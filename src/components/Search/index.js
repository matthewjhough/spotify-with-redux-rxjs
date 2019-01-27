import { connect } from 'react-redux';
import { searchAction } from '../../ducks/search';
import Search from './Search.jsx';

const mapStateToProps = ({ search }) => ({ search });

const mapDispatchToProps = dispatch => ({
  searchQuery: val => dispatch(searchAction(val))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
