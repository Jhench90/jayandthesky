import React, { useState, useEffect, Fragment } from 'react';
import { Outlet, Link, useLoaderData } from 'react-router-dom';
import axios from 'axios';
import { IPServerRoutes } from '../../const/IPServerRoutes';

export function FetchBlog() {
    return axios.get(`http://${IPServerRoutes}:3005/blog`)
        .then(function (response) {
            let articles = response.data.sort((a, b) => new Date(b.date) - new Date(a.date))
            return articles;
        })
}

// const findActiveArticle = (arango_id) => {
//     console.log('arango_id', arango_id)
//     for (let i = 0; i < articles.length; i++) {
//         if (articles[i]._id == arango_id) {
//             setActiveArticle(i);
//             return;
//         }
//     }
// }

export default function BlogPost() {
    const [activeArticle, setActiveArticle] = useState(0);
    const articles = useLoaderData().data;

    return (
        <Fragment>
            <div className="bannerContainer">
                <img src={articles[activeArticle].banner} className="blogBanner"></img>
                <div className="bannerCenter">
                    <div style={{ backgroundColor: 'rgba(128,128,128, 0.6)', borderRadius: '20px', padding: '20px' }}>
                        <div style={{ all: 'unset', color: 'white', opacity: '100%' }}>
                            {articles[activeArticle].title}
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ textAlign: 'center' }}>
                <div>Author: {articles[activeArticle].author}</div>
                <div>Date: {articles[activeArticle].date.slice(0, 10)}</div>
            </div>
            <div>{articles[activeArticle].content.split('\n').map((paragraph) => {
                if (paragraph.includes('Image:')) {
                    let imageURL = paragraph.slice(8);
                    return <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src={`/BlogPhoto/${imageURL}`} />
                    </div>
                } else {
                    return <p>{paragraph}</p>
                }
            })}
            </div>
            <div>Tags: {articles[activeArticle].tags}</div>
        </Fragment>
    )
}