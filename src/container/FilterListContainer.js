import { connect } from 'react-redux';
import FilterList from '../component/FilterList';
import { changeStatus } from '../action';
import todoAPI from '../api/TodoResourseAPI';
const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos,
    status: state.status
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFilterTodos: status => {
        todoAPI.status =status
      const todos = todoAPI.filerByStatus(status,dispatch);

      // dispatch(changeStatus(todos, status));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterList);
