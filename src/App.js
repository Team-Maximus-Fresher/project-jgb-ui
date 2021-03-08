import './App.css';
import store from './store'
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import routeConstants from './routes';
import SearchByCustID from './components/SearchByCustID';
import Navbar from './util/Navbar';
import PageNotFound from './components/PageNotFound';
import SearchByMobileNo from './components/SearchByMobileNo';

function App() {
  const {
    SEARCHBYCUSTID,
    SEARCHBYMOBILENO
  } = routeConstants;

  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
      <Provider store={store}>
          <Switch>
             <Route exact path={SEARCHBYCUSTID.route} component={SearchByCustID} /> 
             <Route exact path={SEARCHBYMOBILENO.route} component={SearchByMobileNo} /> 
             <Route component={PageNotFound} />
          </Switch>         
      </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;