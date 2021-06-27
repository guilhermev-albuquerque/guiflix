import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../pages/Home';
import Movie from '../pages/Movie';
import Favorites from '../pages/Favorites';
import Error from '../pages/Error';

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movie/:id" component={Movie} />
        <Route exact path="/favorites" component={Favorites} />
        <Route path="*" component={Error} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
