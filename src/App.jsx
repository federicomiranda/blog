import React from 'react';
import './styles/App.css';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import Header from './components/Header';
import ListOfArticles from './components/ListOfArticles';
import SinglePost from './components/SinglePost';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <ListOfArticles />
          </Route>
          <Route exact path="/post/:id/:title">
            <SinglePost />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
