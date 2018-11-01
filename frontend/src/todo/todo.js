import React from "react";
import PageHeader from "../template/pageHeader";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

const page = {
  name: "Tasks",
  description: "A task web app for your daily produtivity"
};

export default class Todo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <PageHeader name={page.name} description={page.description} />
        <TodoForm />
        <TodoList />
      </React.Fragment>
    );
  }
}
