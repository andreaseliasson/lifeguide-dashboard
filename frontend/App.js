import React, { Component } from 'react'
import * as d3 from "d3";

import List from './List'
import Input from './Input'
import Title from './Title'
import Sankey from './Sankey'

export default class App extends Component {

  state = {
    todos: ["Click to remove", "Learn React", "Write code", "Ship React"],
    sankeyData: []
  };

  componentDidMount() {
    d3.csv("../data/power-page-flow-transformed-data.csv", (error, data) => {
      this.setState({
        sankeyData: data
      });
    });
  }

  onAddTodo = (text) => {
    const {todos} = this.state;

    this.setState({
      todos: [text, ...todos],
    })
  };


  onRemoveTodo = (index) => {
    const {todos} = this.state;

    this.setState({
      todos: todos.filter((todo, i) => i !== index)
    })
  };

  render() {
    const {todos} = this.state;
    const {sankeyData} = this.state;

    return (
      <div style={styles.container}>
        <Title>
          To-Do List
        </Title>
        <Input
          placeholder={'Type a todo, then hit enter!'}
          onSubmitEditing={this.onAddTodo}
        />
        <List
          list={todos}
          onClickItem={this.onRemoveTodo}
        />
        <Sankey pageFlowData={sankeyData}></Sankey>
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  }
};
