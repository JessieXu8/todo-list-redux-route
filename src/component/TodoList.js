import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
      this.props.onGetAll();
  }

  render() {
    return (
      <div>
        <ol>
          {(() => {
            return this.props.todos.map(item => (
              <TodoItem
                item={item}
                key={item.id}
                toggleActiveHandler={viewId =>
                  this.props.onToggleTodo(item, this.props.status)
                }
                updateItemContent={(viewId, content,status) =>
                  this.props.onUpdateTodo(viewId, content,status)
                }
              />
            ));
          })()}
        </ol>
      </div>
    );
  }
}
