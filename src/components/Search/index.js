import { connect } from 'react-redux';
import { queryAction } from '../../ducks/search';
import Search from './Search.jsx';

const mapStateToProps = ({ search }) => ({ search });

const mapDispatchToProps = dispatch => ({
  searchQuery: val => dispatch(queryAction(val))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
