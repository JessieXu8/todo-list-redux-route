import Todo from '../model/Todo';
import {addItem, checkItem, editItem, changeStatus, getAllTodos} from '../action'

const initUrl = "http://localhost:8080/api"
const axios = require('axios')

const todoAPI = {
    todos: [],
    status: Todo.ALL,

    getAll(dispatch) {
        axios
            .get(`${initUrl}/todos`)
            .then((response) => {
                console.log("-------\n" + JSON.stringify((response.data._embedded.todos)))
                dispatch(response.data._embedded.todos)
            })
            .catch(function (error) {
                console.log("======" + error);
            });
    },


    add(todo, dispatch) {
        axios
            .post(`${initUrl}/todos`, {
                id: todo.viewId,
                content: todo.content,
                status: "active"
            })

            .then(function (response) {
                console.log(response.data);
                dispatch(addItem(
                    new Todo(
                        response.data.content,
                        response.data.status,
                        response.data.id
                    )
                ))
            })
            .catch(function (error) {
                console.log(error);
            })
    },

    filerByStatus(status,dispatch) {
        const self = this
        let tempUrl = `${initUrl}/todos/search/statusOfTodos?status=completed,active`;
        if (status === "active") {
            tempUrl = `${initUrl}/todos/search/statusOfTodos?status=active`;
        }else if (status === "completed") {
            tempUrl = `${initUrl}/todos/search/statusOfTodos?status=completed`;
        }
        axios
            .get(tempUrl)
            .then(function (response) {
                console.log(response.data._embedded.todos)
                dispatch(changeStatus(response.data._embedded.todos,self.status))
            })
            .catch(function (error) {
                console.log(error)
            })
    },

    editItem12(status,dispatch) {
        let tempUrl = `${initUrl}/todos/search/statusOfTodos?status=completed,active`;
        if (status === "active") {
            tempUrl = `${initUrl}/todos/search/statusOfTodos?status=active`;
        }else if (status === "completed" ) {
            tempUrl = `${initUrl}/todos/search/statusOfTodos?status=completed`;
        }
        axios
            .get(tempUrl)
            .then(function (response) {
                dispatch(editItem(response.data._embedded.todos))
            })
            .catch(function (error) {
                console.log(error)
            })
    },
    toggleActive(item,dispatch,status) {
        const self = this
        console.log(item.status)
        let newStatus = item.status==="completed"?"active":"completed";
        console.log(newStatus)
        axios
            .patch(`${initUrl}/todos/${item.id}`,{status: newStatus})
            .then(function (response){
                self.filerByStatus(status,dispatch);
            })
            .catch(function (error) {
                console.log(error);
            })
        //return todo;
    },


    updateItemContent(viewId, content,dispatch) {
        const self = this
        axios
            .patch(`${initUrl}/todos/${viewId}`, { content: content })
            .then(() => {
                self.editItem12(this.status,dispatch);
            })
            .catch(function(error) {
                console.log(error);
            });
        //return todo;
    }
};
export default todoAPI;
