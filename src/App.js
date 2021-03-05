import './App.css';
import store from './store'
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import routeConstants from './routes';
import HomePage from './components/Homepage';
import Navbar from './util/Navbar';
import ApplicationDetails from './components/ApplicationDetails';
import PageNotFound from './components/PageNotFound';

function App() {
  const {
    HOMEPAGE,
    APPLICATIONDETAILS
  } = routeConstants;

  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
      <Provider store={store}>
          <Switch>
             <Route exact path={HOMEPAGE.route} component={HomePage} /> 
             <Route exact path={APPLICATIONDETAILS.route} component={ApplicationDetails} />
             <Route component={PageNotFound} />
          </Switch>         
      </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
