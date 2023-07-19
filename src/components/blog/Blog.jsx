import React, { useState, useEffect, Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';
import { IPServerRoutes } from '../../const/IPServerRoutes';

export function FetchBlog(query) {
    // query = query || {params: {postName: 'website-deployment'}}
    return axios.get(`http://${IPServerRoutes}:3005/blog/post/${query.params.postName}`)
        .then(function (article) {
            console.log('The FetchBlog function is working as expected. Database successful', article)
            return article;
        })
}

function FetchAllBlogs() {
    return axios.get(`http://${IPServerRoutes}:3005/blog`)
        .then(function (response) {
            let articles = response.data.sort((a, b) => new Date(b.date) - new Date(a.date))
            return articles;
        })
}

export default function Blog() {
    const [activeArticle, setActiveArticle] = useState(0);
    const [articles, setArticles] = useState([{
        id: 1,
        shorttitle: 'Test',
        title: 'test',
        author: 'test',
        date: 'test',
        banner: '/DronePhoto/DJI_0120_banner.webp',
        content: `test`,
        tags: 'sampleTag1, Sampletag2, sampleTag3'
    }]);

    const findActiveArticle = (arango_id) => {
        for (let i = 0; i < articles.length; i++) {
            if (articles[i]._id == arango_id) {
                setActiveArticle(i);
                return;
            }
        }
    }

    useEffect(() => {
        FetchAllBlogs()
        .then((articles)=>setArticles(articles));
    }, [])

    return (
        <Fragment>
            <div class="blogRow">
                <div class="columnLeft">
                    <ul className="list">
                        <li style={{ textDecoration: 'underline' }}>Articles</li>
                        {articles.map((article) =>
                            <li>
                                <Link to={`post/${article.shorttitle.split(' ').join('-')}`} id={article._key} className="hoverUnderline" 
                                >{article.shorttitle}</Link>
                            </li>
                        )}
                    </ul>
                </div>
                <div class="columnRight">
                    <Outlet />
                </div>
            </div>
        </Fragment>
    )
}