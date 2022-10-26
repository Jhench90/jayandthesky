import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import { FetchBlog as BlogLoader } from './components/blog/Blog.jsx';

import AboutMe from './components/AboutMe.jsx';
import Admin from './components/admin/Admin';
import Blog from './components/blog/Blog.jsx';
import BlogPost from './components/blog/BlogPost.jsx';
import Drone from './components/Drone.jsx';
import Home from './components/home/Home.jsx';
import Productivity from './components/productivity/Productivity.jsx';
import SocialMedia from './components/socialMedia/SocialMedia.jsx';
import App from './App';
import ErrorPage from './error-page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      // {
      //   path: 'aerialdrone',
      //   element: <Drone/>
      // },
      {
        path: 'admin',
        element: <Admin />
      },
      {
        path: 'social-media',
        element: <SocialMedia/>
      },
      {
        path: 'about-me',
        element: <AboutMe/>
      },
      {
        path: 'productivity',
        element: <Productivity />
      },
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'blog',
        element: <Blog />,
        children: [
          {
            path: 'post/:postName',
            loader: BlogLoader,
            element: <BlogPost />
          }
        ]
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
