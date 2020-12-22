import './App.css';
import SneakerList from '../src/components/sneakerList';
import SneakerFromList from '../src/components/sneakerFromList';
import Header from './components/navbar'
import Adduser from '../src/components/signup'
import Login from '../src/components/login'
import { Route } from 'react-router-dom'
function App(props) {
  return (
    <>
      <Header/>
      <Route exact path="/sneakers/:id" render={(props) => <SneakerFromList {...props} />} />
      <Route exact path="/sneakers" render={(props) => <SneakerList {...props} />} />
      <Route exact path="/signup" render={(props) => <Adduser {...props} />} />
      <Route exact path="/login" render={(props) => <Login {...props} />} />
    </>
  );
}

export default App;
