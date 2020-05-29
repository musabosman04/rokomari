import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Blog from './Components/Blog/Blog';
import Potkast from './Components/Potkast/Potkast';
import Islam from './Components/Islam/Islam';
import History from './Components/History/History';
import Blogbook from './Components/Blogbook/Blogbook';
import Literature from './Components/Literature/Literature';
import Economy from './Components/Economy/Economy';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import BlogDitle from './Components/BlogDitle/BlogDitle';
function App() {
  return (
    <div className="App">
      <header>
        <Header></Header>
        <Router>
          <Switch>

            <Route path="/home">
              <Blog></Blog>
            </Route>

            <Route path="/potkast">
              <Potkast></Potkast>
            </Route>

            <Route path="/islam">
              <Islam></Islam>
            </Route>

            <Route path="/history">
              <History></History>
            </Route>

            <Route path="/blogbook">
              <Blogbook></Blogbook>
            </Route>

            <Route path="/literature">
              <Literature></Literature>
            </Route>

            <Route path="/economy">
              <Economy></Economy>
            </Route>

            <Route path="/post/:postKey">
              <BlogDitle></BlogDitle>
            </Route>

            <Route exact path="/">
              <Blog></Blog>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
