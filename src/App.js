import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MealDetail from './components/MealDetail/MealDetail';
import NotFound from './components/NotFound/NotFound';
import Resturent from './components/Resturent/Resturent';

function App() {
  return (
    <div className="App container mx-auto text-center py-8">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Resturent></Resturent>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/resturent">
            <Resturent></Resturent>
          </Route>
          <Route path="/meals/:mealId">
            <MealDetail></MealDetail>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
