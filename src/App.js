import React, {useEffect, useState, useCallback} from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './styles/global.css'
import './styles/reset.css'

import Header from './containers/Header';
import Footer from './containers/Footer';
import HomePage from './containers/pages/HomePage';
import ArticlePage from './containers/pages/ArticlePage/ArticlePage';
import AuthorsPage from './containers/pages/AuthorsPage';
import NewsPage from './containers/pages/NewsPage/NewsPage';
import RecomendationPage from './containers/pages/RecomendationPage';
import VideoListPage from './containers/pages/VideoListPage/VideoListPage';
import VideoPage from './containers/pages/VideoPage/VideoPage';
import EventPage from './containers/pages/EventPage/EventPage';
import OrganizationPage from './containers/pages/OrganizationPage/OrganizationPage';
import ArticlesListPage from './containers/pages/ArticlesListPage/ArticlesListPage';
import NewPage from './containers/pages/NewPage/NewPage';
import {categoriesAxios} from './components/axios';
import AuthorsArticlesListPage from './containers/pages/AuthorsArticlesListPage/AuthorsArticlesListPage';
import AdminPage from './containers/pages/AdminPage/AdminPage'

function App() {
  const [categories, setCategories] = useState([]);
  const [languageID, setLanguageID] = useState('ukr');

  useEffect(() => {
		categoriesAxios.get('/')
		.then(response => {
      if (response.status === 200) {
          setCategories(response.data);
      } else {
          throw new Error('Recomendation Error');
      }
    })
    .catch(err => {
        console.log(err);
    })
  }, []);

  const setLanguage = useCallback((langID) => {
    window.localStorage.setItem('languageID', langID);
    setLanguageID(langID);
  }, [])
  
  useEffect(() => {
    const windowLanguageID = window.localStorage.getItem('languageID');
    if (windowLanguageID) {
      setLanguageID(windowLanguageID);
    }
  }, [languageID]);

  return <BrowserRouter>
      <Header categories={categories} languageID={languageID} setLanguageID={setLanguage}/>
        <Switch>
          <Route exact path='/' render={props => <HomePage {...props}   categories={categories} languageID={languageID} />}/>
          <Route exact path='/articles/:categoryID' render={props => <ArticlesListPage {...props} categories={categories} languageID={languageID} />}/>
          <Route path='/article/:articleID' render={props => <ArticlePage {...props} categories={categories} languageID={languageID} />}/>
          <Route exact path='/authors' render={props => <AuthorsPage {...props} categories={categories} languageID={languageID} />}/>
          <Route path='/authors/:authorsID' render={props => <AuthorsArticlesListPage {...props} categories={categories} languageID={languageID} />}/>
          <Route exact path='/news' render={props => <NewsPage {...props} categories={categories} languageID={languageID} />}/>
          <Route path='/news/:newsID' render={props => <NewPage {...props} categories={categories} languageID={languageID} />} />
          <Route exact path='/recomendations/:categoryEng' render={props => <RecomendationPage {...props} categories={categories} languageID={languageID} />}/>
          <Route exact path='/videosList/:categoryEng' render={props => <VideoListPage {...props} categories={categories} languageID={languageID} />}/>
          <Route exact path='/videosList' render={props => <VideoListPage {...props} categories={categories} languageID={languageID} />}/>
          <Route path='/videos/:videosID' render={props => <VideoPage {...props} categories={categories} languageID={languageID} />}/>
          <Route exact path='/events' render={props => <EventPage {...props} categories={categories} languageID={languageID} />}/>
          <Route exact path='/organizations' render={props => <OrganizationPage {...props} categories={categories} languageID={languageID} />}/>
          <Route path="/admin" component={AdminPage} />
        </Switch>
      <Footer categories={categories} languageID={languageID}/>
    </BrowserRouter>
}

export default App;
