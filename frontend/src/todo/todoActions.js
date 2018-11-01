import axios from "axios";

axios.defaults.baseURL = "http://localhost:3003/api";
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";

export const changeDescription = event => ({
  type: "DESCRIPTION_CHANGED",
  payload: event.target.value
});

export const clear = () => ({
  type: "TODO_CLEARED"
});

export const search = async () => {
  const request = await axios.get("/todos?sort=done");
  return {
    type: "TODO_SEARCHED",
    payload: request.data
  };
};

export const add = async description => {
  await axios.post("/todos", { description });
  return [{ type: "TODO_ADDED" }, clear(), await search()];
};

export const remove = async todo => {
  await axios.delete(`/todos/${todo._id}`);
  return [{ type: "TODO_REMOVED" }, await search()];
};

export const complete = async todo => {
  todo.done = !todo.done;
  await axios.put(`/todos/${todo._id}`, todo);
  return [{ type: "TODO_COMPLETED" }, await search()];
};
