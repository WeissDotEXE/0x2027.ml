import logo from './logo.svg';
import styles from './App.module.scss'
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Courses from './components/Courses/Courses';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <div className={styles.App}>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/courses' exact component={Courses} />
            <Route path="/profile" exact componet={Profile} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
