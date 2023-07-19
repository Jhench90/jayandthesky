<Modal
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  contentLabel="Dog Photo Modal"
>
  <img
    src={photo.photo}
    alt="Dog Photo"
  />
  <button onClick={closeModal}>Close</button>
</Modal>
