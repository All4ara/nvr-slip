import './App.css';
import SneakerList from '../src/components/sneakerList';
import SneakerFromList from '../src/components/sneakerFromList';
import { Route } from 'react-router-dom'
function App(props) {
  return (
    <>
      <Route exact path="/sneakers/:id" render={(props) => <SneakerFromList {...props} />} />
      <Route exact path="/sneakers" render={(props) => <SneakerList {...props} />} />
      
      
    </>
  );
}

export default App;
