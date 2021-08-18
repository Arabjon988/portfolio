import './App.css';
import Home from './Pages/home-page/Home';
import Cart from './Components/Cart/Cart';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Components/Header/Header';
import Section from './Components/Section/Section';
import MainContent from './Components/maincontent/MainContent';
import Footer from './Components/Footer/Footer';


function App() {

  const handleHeaderSearch = (e) => {
    const mainContainer = document.querySelector('.main__container')
    mainContainer.classList.add('mainContainerNotActive')
    const mainHeader = document.querySelector(".main__header")
    mainHeader.classList.add("activeMainHeader")
  }

  const handleHeaderSearchHide = (e) => {
    const mainContainer = document.querySelector('.main__container')
    mainContainer.classList.remove('mainContainerNotActive')
    const mainHeader = document.querySelector(".main__header")
    mainHeader.classList.remove("activeMainHeader")
  }

  return (
    <Router>
      <div className="app">
        <Header callBack={handleHeaderSearch} removeCallBack={handleHeaderSearchHide} />
        <MainContent />
        <Switch>
          <Route exact path="/" component={() => <Home />}/>
          <Route exact path="/cart" component={() => <Cart />}/>
          <Route exact path ="/section" component = {() => <Section />} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
