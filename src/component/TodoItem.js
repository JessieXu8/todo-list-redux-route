import React, { Component } from 'react';
import Todo from '../model/Todo';
import '../App.css';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'read'
    };
  }

  changeToEditable() {
    this.setState({ status: 'write' });
  }

  updateItem(e, viewId, content) {

      const status = this.props.status
    if (e.keyCode === 13) {
      this.props.updateItemContent(viewId, content,status);
        //console.log(3333333)
      this.setState({ status: 'read' });
    }
  }

  toggleActive(viewId) {
    this.setState({ status: 'read' });
    this.props.toggleActiveHandler(viewId);
  }

  render() {
    const item = this.props.item;
    return (
      <li className={item.status}>
        {
          <input
            type="checkbox"
            className="done-todo"
            defaultChecked={item.status === Todo.COMPLETED||item.status === "complete"}
            onClick={e => this.toggleActive(item.id)}
          />
        }
        <span onDoubleClick={e => this.changeToEditable(e)}>
          {this.state.status === 'read' ? (
            item.content
          ) : (
            <input
              autoFocus
              className="edit-input"
              defaultValue={item.content}
              onKeyUp={e =>
                this.updateItem(e, item.id, e.currentTarget.value)
              }
            />
          )}
        </span>
      </li>
    );
  }
}

export default TodoItem;
