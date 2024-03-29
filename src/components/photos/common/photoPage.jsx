import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

/*
Props
Posts: An array of string links to images.
Banner: A string link to a banner image.
Title: The title of the PhotoPage.
SocialMediaLink: Link to referring social media page. 
**/
function PhotoPage({ setPage, posts, banner, title, socialMediaLink }) {
    const [photoArray, setPosts] = useState(posts)
    const [display, setDisplay] = useState(4)
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState("")

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    function incrementDisplay() {
        let count = display + 4
        setDisplay(count)
    }
    let i = 0

    useEffect(() => {
        console.log(photoArray)
    }, [])

    return (
        <div className="backgroundWhite">
            <img src={banner} width='100%' />
            <div className="socialMediaTitle" onClick={() => {
                setPage('home')
            }}>{title}</div>
            <div className="socialMediaPostsContainer">
                <div className="postsContainer">
                    {photoArray.map((post) => {
                        if (i !== display) {
                            i += 1
                            return <img key={post.photo} style={{ objectFit: "cover" }} className="imgPost" src={`${post.photo}`} onClick={(e) => {
                                setSelectedPhoto(post.photo);
                                openModal();
                                // window.open(post.url)
                            }} />
                        }
                    })}
                </div>
                <div className="buttonsContainer">
                    <span className="socialMediaButton" onClick={(e) => {
                        incrementDisplay()
                    }}>Load More</span>
                    <span className="socialMediaButton" onClick={(e) => {
                        window.open(socialMediaLink)
                    }}>Instagram</span>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Dog Photo Modal"
            >
                <div className="flexContainer" style={{ position: 'relative', }}>
                    <div style={{position: 'relative'}}>
                        <img
                            src={selectedPhoto}
                            alt="Dog Photo"
                            style={{
                                position: 'relative',
                                maxHeight: "800px",
                                maxWidth: "800px",
                                margin: "auto"
                                // position: 'fixed',
                                // top: '50%',
                                // left: '50%',
                                // transform: 'translate(-50%, -50%)'
                            }}
                        />
                         <div className="socialXButton"
                        style={{
                            position: 'absolute',
                            left: '-50px',
                            top: '0px',
                            margin: 'auto'
                        }}
                        onClick={closeModal}>X</div>
                    </div>   
                </div>
            </Modal>

        </div>
    )
}

export default PhotoPage