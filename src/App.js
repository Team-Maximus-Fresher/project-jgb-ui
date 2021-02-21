import './App.css';
import store from './store'
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import routeConstants from './routes';
import HomePage from './components/Homepage';

function App() {
  const {
    HOMEPAGE
  } = routeConstants;

  return (
    <div className="App">
      <BrowserRouter>
      <Provider store={store}>
          <Switch>
             <Route exact path={HOMEPAGE.route} component={HomePage} /> 
          </Switch>         
      </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
