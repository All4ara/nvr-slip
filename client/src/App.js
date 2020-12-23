import './App.css';
import { Route } from 'react-router-dom'
import Header from './components/navbar'
import SneakerList from '../src/components/sneakerList';
import SneakerFromList from '../src/components/sneakerFromList';
import Adduser from '../src/components/signup'
import Login from '../src/components/login'
import EditPost from '../src/components/editpost'
import Background from "../src/components/background"

function App(props) {
  return (
    <>
      
      <Header/>

      <Route exact path="/sneakers/:id" render={(props) => <SneakerFromList {...props} />} />
      <Route exact path="/sneakers" render={(props) => <SneakerList {...props} />} />
      <Route exact path="/sneakers/edit/:id" render={(props) => <EditPost {...props} />} />
      <Route exact path="/signup" render={(props) => <Adduser {...props} />} />
      <Route exact path="/login" render={(props) => <Login {...props} />} />
      <Route exact path="/back" render={(props) => <Background {...props} />} />
    </>
  );
}

export default App;
