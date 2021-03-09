import './App.css';
import store from './store'
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import routeConstants from './routes';
import Navbar from './util/Navbar';
import PageNotFound from './components/PageNotFound';
import Homepage from './components/Homepage';

function App() {
  const {
    HOMEPAGE
  } = routeConstants;

  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
      <Provider store={store}>
          <Switch>
             <Route exact path={HOMEPAGE.route} component={Homepage} />
             <Route component={PageNotFound} />
          </Switch>         
      </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;