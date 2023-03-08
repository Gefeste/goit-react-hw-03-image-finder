import propTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';

export const ImageGallery = searchText => {
  return (
    <List>
      <ImageGalleryItem searchText={searchText} />
    </List>
  );
};

ImageGallery.propTypes = {
  searchText: propTypes.string.isRequired,
};
