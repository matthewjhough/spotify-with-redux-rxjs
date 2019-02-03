import { connect } from 'react-redux';
import Results from './Results';

const mapStateToProps = ({ search }) => ({
  results: search.results,
  query: search.query.name,
  loading: search.loading
});

export default connect(mapStateToProps)(Results);
