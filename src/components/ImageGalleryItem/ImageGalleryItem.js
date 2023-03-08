import { Component } from 'react';
import { getImg } from 'components/Services/GetImg';
import { Image, Item } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    ImgArray: [],
  };

  componentDidUpdate(prevProps) {
    if (prevProps.searchText !== this.props.searchText) {
      getImg(this.props.searchText)
        .then(response => response.json())
        .then(obj => {
          this.setState({ ImgArray: obj.hits });
        });
    }
  }

  render() {
    // console.log('ttt', this.props.searchText);
    // console.log('aaa', this.state.ImgArray);
    return (
      <>
        {this.state.ImgArray.map(el => {
          return (
            <Item key={el.id}>
              <Image src={el.previewURL} alt={el.tags} />
            </Item>
          );
        })}
      </>
    );
  }
}
