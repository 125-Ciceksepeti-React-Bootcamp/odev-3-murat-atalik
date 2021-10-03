import React, { useState, useEffect } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import ReactModal from 'react-modal';
import CardStar from '../card-star/CardStar';
import './CardModal.scss';
const themes = {
  modal: {
    light: {
      overlay: {
        background: 'rgba(49,49,49, 0.6)',
      },
    },
    night: {
      overlay: {
        background: 'rgba(24,24,24, 0.6)',
      },
    },
  },
};

export default function CardModal(props) {
  const [name, setName] = useState(props.modalData?.name);
  const [director, setDirector] = useState(props.modalData?.director);
  const [teaser, setTeaser] = useState(props.modalData?.teaser);
  const [imageUrl, setImageUrl] = useState(props.modalData?.imageUrl);
  const [star, setStar] = useState(props.modalData?.star);

  useEffect(() => {
    setName(props.modalData?.name);
    setDirector(props.modalData?.director);
    setTeaser(props.modalData?.teaser);
    setImageUrl(props.modalData?.imageUrl);
    setStar(props.modalData?.star);
  }, [props.modalData]);

  // datalari sifirlamak icin gerkeli mi -_- ?_?
  const handleCloseModal = () => {
    props.closeModal();
    props.alert('EDIT CANCELLED');
  };

  // state te tutulan datalari app componentinden gelen handleEdit fonksiyonunu kullanark ogeyi gunceller
  const handleEdit = () => {
    const movie = {
      id: props.modalData?.id,
      name,
      director,
      teaser,
      imageUrl,
      star,
    };
    props.handleEdit(movie);
    props.closeModal();
  };

  // changing popularity star but its not working its cahnge copy datat but stars not updated
  const handleStar = (id, star) => {
    setStar(star);
  };
  // changin movie name
  const handleMovieName = (event) => {
    setName(event.target.value);
  };
  //changin movie director
  const handleDirector = (event) => {
    setDirector(event.target.value);
  };
  //changing imageurl
  const handleImageUrl = (event) => {
    setImageUrl(event.target.value);
  };
  //changing teaser url
  const handleTeaser = (event) => {
    setTeaser(event.target.value);
  };

  return (
    <div>
      <ReactModal
        className="modal"
        style={
          props.theme === 'light' ? themes.modal.light : themes.modal.night
        }
        ariaHideApp={false}
        isOpen={props.showModal}
        contentLabel="Minimal Modal Example"
      >
        <div className="modal-inner">
          <button className="modal-closebtn" onClick={handleCloseModal}>
            <AiFillCloseCircle size="1.5rem" color="#fed34d" />
          </button>

          <div className="modal-body">
            <div className="modal-info">
              <div className="modal-name">
                <span className="input-label">Movie Name:</span>
                <input
                  className="modal-input"
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleMovieName}
                />
              </div>
              <div className="modal-director">
                <span className="input-label">Director:</span>
                <input
                  className="modal-input"
                  type="text"
                  name="director"
                  value={director}
                  onChange={handleDirector}
                />
              </div>
              <div className="modal-imageurl">
                <span className="input-label">image Url:</span>
                <input
                  className="modal-input"
                  type="text"
                  name="director"
                  value={imageUrl}
                  onChange={handleImageUrl}
                />
              </div>
              <div className="modal-teaserurl">
                <span className="input-label">Teaser Url:</span>
                <input
                  className="modal-input"
                  type="text"
                  name="director"
                  value={teaser}
                  onChange={handleTeaser}
                />
              </div>
              <div className="modal-popularity">
                <span className="input-label">Popularity:</span>
                <div className="popularity-star">
                  <CardStar
                    star={star}
                    id={props.modalData?.id}
                    handleStar={handleStar}
                  />
                </div>
              </div>
            </div>
            <div className="modal-image">
              <img src={imageUrl} alt={name} />
            </div>
          </div>
          <iframe
            width="40%"
            height="40%"
            src={teaser}
            title={name}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <button className="modal-button" onClick={handleEdit}>
            Confirm
          </button>
        </div>
      </ReactModal>
    </div>
  );
}
