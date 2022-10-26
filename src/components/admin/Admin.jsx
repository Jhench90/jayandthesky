import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Admin() {
    const [title, setTitle] = useState('');
    const [shortTitle, setShortTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [banner, setBanner] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState(new Date());

    const [missingField, setMissingField] = useState(false);
    const [successfullyPosted, setSuccessfullyPosted] = useState(false);

    return (
        <div>
            <div style={{ marginLeft: '200px' }}>
                <div>Title</div>
                <input onChange={(e) => {
                    setTitle(e.target.value)
                }}></input>
                <div>Short Title</div>
                <input onChange={(e) => {
                    setShortTitle(e.target.value)
                }}></input>
                <div>Author</div>
                <input onChange={(e) => {
                    setAuthor(e.target.value)
                }}></input>
                <div>Banner</div>
                <select onChange={(e) => {
                    setBanner(e.target.value)
                }}>
                    <option selected disabled hidden></option>
                    <option value="/DronePhoto/DJI_0120_banner.webp">forest</option>
                    <option value="/DronePhoto/DJI_0536_banner.webp">desert</option>
                    <option value="/DronePhoto/DJI_0020_banner.webp">ferriswheel</option>
                    <option value="/DronePhoto/DJI_0151_banner.webp">windmill</option>
                </select>
                <div>Content</div>
                <textarea onChange={(e) => {
                    setContent(e.target.value)
                }} rows="25" cols="100"></textarea>
                <form></form>
                <br></br>
                <button onClick={() => {
                    console.log({
                        title: title,
                        shorttitle: shortTitle,
                        author: author,
                        banner: banner,
                        date: date,
                        content: content
                    })
                    if (banner == '' || title == '' || shortTitle == '' || author == '' || content === '') {
                        setMissingField(true);
                        setSuccessfullyPosted(false);
                        return
                    } else {
                        setMissingField(false);
                        setSuccessfullyPosted(true);
                    }
                    axios.post('http://67.161.47.190:3000/blog', {
                        title: title,
                        shorttitle: shortTitle,
                        author: author,
                        banner: banner,
                        date: date,
                        content: content
                    })
                        .then(function (response) {
                            console.log(response)
                            // if (response.data === 'Incorrect password') {
                            //     toggle('incorrectpassword')
                            // }
                        })
                        .catch(function (error) {
                            console.log(error)
                        })
                }}>Submit</button>
                {missingField ? <div style={{color: 'red'}}>There is a missing field</div> : null}
                {successfullyPosted ? <div>Post has been sent to the database! </div> : null}
            </div>

        </div>
    )
}