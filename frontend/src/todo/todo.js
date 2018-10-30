import React from "react";
import axios from "axios";

import PageHeader from "../template/pageHeader";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

axios.defaults.baseURL = "http://localhost:3003/api";
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";

const page = {
  name: "Tasks",
  description: "A task web app for your daily produtivity"
};

export default class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = { description: "", list: [], filteredList: [] };
    this.handleClear = this.handleClear.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
    this.refresh = this.refresh.bind(this);
    this.filterList = this.filterList.bind(this);

    this.refresh();
  }

  filterList(term) {
    return term
      ? this.state.list.filter(t => t.description.includes(term))
      : this.state.list;
  }

  async handleAdd() {
    console.log("add");

    const description = this.state.description;
    const response = await axios.post("/todos", { description });
    console.log(response.data);

    this.refresh();
  }

  async refresh(term) {
    const response = await axios.get("/todos?sort=done");
    const filteredData = term
      ? response.data.filter(t => t.description.includes(term))
      : response.data;

    this.setState({
      ...this.state,
      description: "",
      list: response.data,
      filteredList: filteredData
    });

    console.log(response.data);
  }

  async handleChange(e) {
    console.log("change");
    //filtra a lista
    this.setState({
      ...this.state,
      description: e.target.value,
      filteredList: this.state.list.filter(t =>
        t.description.includes(e.target.value)
      )
    });
  }

  handleClear() {
    this.setState({...this.state, description: '', filteredList: this.state.list })
  }

  async handleRemove(todo) {
    const response = await axios.delete(`/todos/${todo._id}`);
    if (response.status === 204) {
      this.refresh();
    }
  }

  async handleMarkAsDone(todo) {
    todo.done = !todo.done;
    await axios.put(`/todos/${todo._id}`, todo);
    this.refresh();
  }

  render() {
    return (
      <React.Fragment>
        <PageHeader name={page.name} description={page.description} />
        <TodoForm
          description={this.state.description}
          handleAdd={this.handleAdd}
          handleChange={this.handleChange}
          handleClear={this.handleClear}
        />
        <TodoList
          list={this.state.filteredList}
          handleRemove={this.handleRemove}
          handleMarkAsDone={this.handleMarkAsDone}
        />
      </React.Fragment>
    );
  }
}
