import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import "./App.scss";
function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="App">
      {loading ? <h1>Loading...</h1> : <ProductList products={products} />}
    </div>
  );
}

export default App;
