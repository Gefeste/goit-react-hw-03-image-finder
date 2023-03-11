import { Image, Item } from './ImageGalleryItem.styled';
import propTypes from 'prop-types';

export const ImageGalleryItem = ({
  id,
  src,
  alt,
  largeImageURL,
  openModal,
}) => {
  return (
    <Item key={id} onClick={openModal}>
      <Image src={src} alt={alt} data-large={largeImageURL} />
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  openModal: propTypes.func.isRequired,
  largeImageURL: propTypes.string.isRequired,
};
