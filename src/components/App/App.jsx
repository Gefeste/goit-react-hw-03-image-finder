import { Component } from 'react';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { SearchBarForm } from '../Searchbar/Searchbar';

export class App extends Component {
  state = {
    searchText: '',
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({ searchText: e.target.elements[1].value });
  };

  render() {
    // console.log('t', this.state.searchText);
    const { state, onSubmit } = this;
    return (
      <div>
        <SearchBarForm onSubmit={onSubmit} />
        <ImageGallery searchText={state.searchText} />
      </div>
    );
  }
}
