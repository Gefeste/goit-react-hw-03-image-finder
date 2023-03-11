import { LoadMore } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { SearchBarForm } from '../Searchbar/Searchbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    searchText: '',
    btnVisible: false,
    page: 1,
    perPage: 12,
    showModal: false,
    currentImageUrl: null,
    currentImageDescription: null,
  };

  toogleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  onLoadImg = () => {
    this.setState({ btnVisible: false });
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  StatusStateTrue = e => {
    if (e.length === 12) {
      return this.setState({ btnVisible: true });
    }
    if (e.length < 12) {
      return this.setState({ btnVisible: false });
    }
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({ btnVisible: false });
    this.setState({ page: 1 });
    this.setState({ perPage: 12 });
    this.setState({ showModal: false });
    const form = event.currentTarget;
    const text = form.elements.search.value.trim();
    if (!text) {
      toast.info('Please, enter search term', {
        theme: 'colored',
      });
      return;
    }
    try {
      this.setState({ searchText: text });
      form.reset();
    } catch (error) {
      toast.error('error', {
        theme: 'colored',
      });
      this.setState({ btnVisible: false });
      form.reset();
    }
  };

  openModal = e => {
    const currentImageUrl = e.target.dataset.large;
    const currentImageDescription = e.target.alt;

    if (e.currentTarget.nodeName === 'LI') {
      this.setState(({ showModal }) => ({
        showModal: !showModal,
        currentImageUrl: currentImageUrl,
        currentImageDescription: currentImageDescription,
      }));
    }
  };

  render() {
    const {
      state,
      onSubmit,
      StatusStateTrue,
      onLoadImg,
      toogleModal,
      openModal,
    } = this;
    return (
      <>
        {state.showModal && (
          <Modal
            currentImageDescription={state.currentImageDescription}
            currentImageUrl={state.currentImageUrl}
            toogleModal={toogleModal}
          />
        )}
        <SearchBarForm onSubmit={onSubmit} />
        <ImageGallery
          btnVisible={state.btnVisible}
          perPage={state.perPage}
          page={state.page}
          openModal={openModal}
          searchText={state.searchText}
          StatusStateTrue={StatusStateTrue}
        />
        {state.btnVisible && <LoadMore onClick={onLoadImg} />}
        <ToastContainer />
      </>
    );
  }
}
