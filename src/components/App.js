import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import {SearchForm} from './molecules/SearchForm'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SearchForm />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
