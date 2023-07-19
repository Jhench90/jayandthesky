import React, { useState, useEffect } from 'react';
import PhotoPage from './common/photoPage';

function DogApi({setPage}) {
    const [dogPhotos, setDogPhotos] = useState([])
        let photoArray = [];
        for (let i = 1; i <= 32; i++) {
            let newEntry = {
                photo: `HuntPhoto/${i}.jpeg`,
                url: ''
            }
            photoArray.push(newEntry)
        }
    return (
        <PhotoPage setPage={setPage}
            posts={photoArray}
            banner={""}
            title={"Dog Api"}
            socialMediaLink={"https://www.instagram.com/hunt.abcd.dood/"}
         />
    )
}

export default DogApi