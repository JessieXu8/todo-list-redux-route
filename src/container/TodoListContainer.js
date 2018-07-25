import {connect} from 'react-redux';
import TodoList from '../component/TodoList';
import {checkItem, editItem, changeStatus, getAll, getAllTodos} from '../action';
import todoAPI from '../api/TodoResourseAPI';

const mapStateToProps = (state, ownProps) => {
    const {match:{params:{status}}} = ownProps;
    return {
        todos: state.todos,
        status: status
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onToggleTodo: (item, status) => {

            todoAPI.toggleActive(item,dispatch,status);
        },
        onUpdateTodo: (viewId, content,status) => {

            todoAPI.updateItemContent(viewId, content,dispatch,status);
        },
        onGetAll: () => {
            todoAPI.getAll(list=>dispatch(getAllTodos(list)));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
