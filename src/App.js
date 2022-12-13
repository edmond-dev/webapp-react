import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

  const url = "http://127.0.0.1:8000/products"
function App() {
    // eslint-disable-next-line no-undef
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false)

    // eslint-disable-next-line no-undef
     useEffect(() => {
    axios.get(url).then((response) => {
      setProducts(response.data);
    }).catch(e => setError(e));
  }, []);

    console.log(error)
  const home = () => (
    <div className="App">
      <header className="App-header">
        <div>CSC-480 Ecommerce</div>
      </header>
        <main>
            <div className="search-bar-container">
                <div className="search-bar"><input name="searchProduct" type={"text"} placeholder={'search products'}/></div>
            </div>
            <div className="products-display-container">
                <div className="products-display">
                    <div className="products-display-title">Buy from a select of products</div>
                        <div className="grid-product-display">
                            {products.map((p) =>(
                                <div className="product-container">
                                    <div className="product">
                                        <div>{p.id}</div>
                                        <div>{p.name}</div>
                                        <div>{p.desc}</div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </main>
        <footer>
            <div className="footer-container">
                    <div className="footer-main">
                        <div> Copyright 2022. Senior year project.</div>
                        <div>The College of Idaho</div>
                    </div>
                </div>
        </footer>
    </div>
  );
    return (
    <>
     {home()}
    </>
)
}



export default App;
