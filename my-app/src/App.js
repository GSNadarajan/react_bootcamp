import logo from './logo.svg';
import './App.css';
import Product from './components/Product';
// const obj ={ a:1, b: 2}

function App() {
  const iphone = {
    id: 1,
    title : "Apple Iphone 13"

  }

  

  return (
    <div className="App">
      <Product />
     
    </div>
  );
}

export default App;
