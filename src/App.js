import './App.css';
import Header from './Header.js'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from './Home';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
       <Switch>
         <Route exact path="/" component={Home}/>
         <Route path="/portafolio">Portafolio</Route>
         <Route path="/reserva_en_linea">Reserva en linea</Route>
         <Route path="/blog">Blog</Route>
       </Switch>
       <Footer/>
      </Router>

    </div>
  );
}

export default App;
