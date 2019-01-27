import { connect } from 'react-redux';
import { searchAction } from '../../ducks/search';
import Search from './Search.jsx';

const mapStateToProps = ({ search, user }) => ({ search, token: user.token });

const mapDispatchToProps = dispatch => ({
  searchQuery: (val, token) => dispatch(searchAction(val, token))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
