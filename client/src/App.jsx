import React from 'react';
import Router from './Router';
import {Footer} from './components/UIKit';
import Header from "./components/Header/Header";


const App = () => {
  return (
    <main>
      <Header/>
      <Router />
      <Footer />
    </main>
  )
}

export default App;
