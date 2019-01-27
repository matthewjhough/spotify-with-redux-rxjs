import { connect } from 'react-redux';
import { search } from '../../ducks/search';
import Search from './Search.jsx';

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
  search: () => dispatch(search)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
