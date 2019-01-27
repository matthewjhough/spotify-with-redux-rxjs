import { connect } from 'react-redux';
import { searchAction } from '../../ducks/search';
import Search from './Search.jsx';

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
  search: val => dispatch(searchAction(val))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
