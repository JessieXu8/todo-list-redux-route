import { connect } from 'react-redux';
import AddItem from '../component/AddItem';
import { addItem } from '../action';
import todoApi from '../api/TodoResourseAPI';

const mapStateToProps = (state, ownProps) => {
  return {
    status: this.status
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAddItem: todo => {
      todoApi.add(todo,dispatch);
      //   todoApi.add(todo);
      //   dispatch(addItem(todo));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddItem);
