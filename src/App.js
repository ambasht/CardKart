
import './CardKart/App.css';
import './scss/main.scss';
import Header from './CardKart/pages/Header'
import HeaderSlider from './CardKart/pages/HeaderSlider'
import Footer from './pages/Footer';
import Results from './CardKart/pages/Results';
import Home from './CardKart/pages/Home';
import Index from './CardKart/pages/Index';
import FooterIndex from './CardKart/pages/FootIndex';
import FooterSearch from './CardKart/pages/FooterSearch';
import FooterFillter from './CardKart/pages/FooterFillter';
import CartAddressFooter from './CardKart/pages/CartAddressFooter';
import CartPay from './CardKart/pages/CartPay';
import CartFooter from './CardKart/pages/CartFooter';
import ResultSlider from './CardKart/pages/ResultSlider';
import React from 'react'
import Cart from './CardKart/pages/Cart';
import CartAddress from './CardKart/pages/CartAddress';
import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: false,
      footer: true,
      footerType: 5,
      headerType: 1,
      page: "cart",
      displayinfo: false,

      prevFooter: false,
      prevFooterType: 0,
      prevHeader: false,
      prevHeaderType: 0,
      prevPage: "",


    };
  }
  maintainPrevState() {
    this.setState({ prevPage: this.state.page });
    this.setState({ prevHeader: this.state.header });
    this.setState({ prevHeaderType: this.state.headerType });
    this.setState({ prevFooter: this.state.footer });
    this.setState({ prevFooterType: this.state.footerType });
    console.log(this.state)
  }
  changePage = (pageData) => {
    
    if (pageData == "results") {
    
      this.setState({ page: pageData });
      this.setState({ header: true });
      this.setState({ headerType: 1 });
      this.setState({ footer: true });
      this.setState({ footerType: 1 });


    }

    else if (pageData == "home") {
      this.maintainPrevState();
      this.setState({ page: pageData });
      this.setState({ header: true });
      this.setState({ headerType: 1 });
      this.setState({ footer: true });
      this.setState({ footerType: 3 });
    }

    else if (pageData == "resultSlider") {
      this.maintainPrevState();
      this.setState({ page: pageData });
      this.setState({ header: true });
      this.setState({ headerType: 2 });
      this.setState({ footer: false });
      this.setState({ footerType: 4 });
    }


    else if (pageData == "back") {
      //console.log("back")
      this.setState({ page: this.state.previousPage });
      this.setState({ header: this.state.prevHeader });
      this.setState({ headerType: this.state.prevHeaderType });
      this.setState({ footer: this.state.prevFooter });
      this.setState({ footerType: this.state.prevFooterType });
      
    }

  }
  render() {
   
    var body = <Index onClick={this.changePage}/>;
    if (this.state.page == "index") {
      body = <Index onClick={this.changePage} />;
    }
    else if (this.state.page == "results") {
      body = <Results onClick={this.changePage}/>;
    }
    else if (this.state.page == "resultSlider") {
      body = <ResultSlider info={this.state.displayinfo} onClick={this.changePage}/>;
    }
    else if (this.state.page == "home") {
      body = <Home onClick={this.changePage}/>;
    }
    else if (this.state.page == "cart") {
      body = <Cart onClick={this.changePage}/>;
    }
    return (

      <div className="App">
         <Router basename="/index.html"> 
           {this.state.header ? <Header results={this.state.headerType} onClick={this.changePage} /> : ''}
           <Routes>
              <Route exact path='/CardKart' element={''} />
              <Route exact path='/CardKart/home' element={<Header/>} />
              <Route exact path='/CardKart/search' element={<Header/>} />
              <Route exact path='/CardKart/results' element={<HeaderSlider/>} />
              <Route exact path='/CardKart/cart' element={''} />
              <Route exact path='/CardKart/cart/linkaddress' element={''} />
              <Route exact path='/CardKart/cart/review' element={''} />
           </Routes>
           <Routes>
              <Route exact path='/CardKart' element={<Index/>} />
              <Route exact path='/CardKart/home' element={<Home/>} />
              <Route exact path='/CardKart/search' element={<Results/>} />
              <Route exact path='/CardKart/results' element={<ResultSlider/>} />
              <Route exact path='/CardKart/cart' element={<Cart/>} />
              <Route exact path='/CardKart/cart/linkaddress' element={<CartAddress/>} />
              <Route exact path='/CardKart/cart/review' element={<Home/>} />

          </Routes>
          <Routes>
              <Route exact path='/CardKart' element={<FooterIndex/>} />
              <Route exact path='/CardKart/home' element={<FooterSearch/>} />
              <Route exact path='/CardKart/search' element={<FooterFillter/>} />
              <Route exact path='/CardKart/results' element={<ResultSlider/>} />
              <Route exact path='/CardKart/cart' element={<CartFooter/>} />
              <Route exact path='/CardKart/cart/linkaddress' element={<CartAddressFooter/>} />
              <Route exact path='/CardKart/cart/review' element={<CartPay/>} />
           </Routes>
        </Router>
    </div>


);
}}

export default App;
