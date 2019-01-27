import { connect } from 'react-redux';
import { setUserAction } from './ducks/user';
import App from './App.jsx';

function mapStateToProps({ user }) {
  return {
    user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setUser: user => dispatch(setUserAction(user))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
