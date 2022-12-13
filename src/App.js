import './App.css';
import {useState} from "react";

function App() {
    const data = require("./data.json")
    data.map((v) => (
         console.log(v)
     ))
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
                            {data.map((p) =>(
                                <div className="product-container">
                                    <div className="product">
                                        <div className="image">Product Image</div>
                                        <div className="product-details">Product Details</div>
                                        <div> {p.id}</div>
                                        <div> {p.name}</div>
                                        <div>{p.desc}</div>
                                        <div className="view-product">buy</div>
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
                        <div>By Edmond Mumwensi</div>
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
