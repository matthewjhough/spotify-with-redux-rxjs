import { connect } from 'react-redux';
import Results from './Results';

const mapStateToProps = ({ search }) => ({
  results: search.results,
  query: search.query,
  loading: search.loading
});

export default connect(mapStateToProps)(Results);
