import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "../../componenets/Home/ProductCard/ProductCard";
import Footer from "../../componenets/Shared/Footer/Footer";
import Header from "../../componenets/Shared/Header/Header";


function Home() {
    // Creating a state for products data.
    // whenever there is a change in products, it will force componenet refresh.
    const [products, setProducts] = useState([]);
    // const [click, setClick] = useState(0);
    // let data = "My Data";

useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    //calling json function.
    .then((res) => res.json())
    // listening for json function to return.
    .then((res) => {
          console.log("fetching data");
          res.forEach(o => {
            o.rating.rate=Math.ceil(Number(o.rating.rate));
          });

          console.log(res);
          console.log(products);
        setProducts(res);
        //  console.log(products.length)
        //   console.log("Fetch called")
    });
    
} , [] );

   
    return (
        <div>

        <Header/>
        {/*Products.*/} 
        <div>
        {/* <h1>{click}</h1>
        <button onClick={()=>{setClick(click+1)}}>Click</button>
        <h3>{ products !== undefined && products.length}</h3> 
    <h1>{data}</h1> */}
    {/*Products.*/} 
    <div className="row">
    {products.map((product, i)=>(
        <div className="col-3">
        < ProductCard item={product} value={i} / > </div>))}
    </div>
    
        
         </div>  
        <Footer/>
        </div>
    )
}


export default Home;