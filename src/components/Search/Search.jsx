import React from 'react';
import { Input } from 'antd';
import debounce from 'lodash/debounce';

const AntSearch = Input.Search;

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = debounce(this.handleSearch.bind(this), 1000);
    this.antSearch = React.createRef();
  }

  handleSearch() {
    const { search } = this.props;
    if (search) search(this.antSearch.current.input.state.value);
  }

  render() {
    console.log('Search Props: ', this.props);
    return (
      <AntSearch
        ref={this.antSearch}
        onChange={this.handleSearch}
        placeholder="Search Spotify..."
      />
    );
  }
}

export default Search;
