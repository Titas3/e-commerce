import "./ProductCard.css"

function ProductCard(values){

  const key =  values.item.id+"svg";

  let stars = [];
  for (let i = 0;  i < Number(values.item.rating.rate);i++){
    stars[i]= 1;
  }
  console.log(stars);

    return(
    //  <div>ProductCard</div>
    <div className="card" >
    <h5 className="card-title">{values.item.title.slice(0,60)}...</h5>
        <img src={values.item.image}  alt="..."></img>
        <hr/><div className="card-body">
          
          <p className="card-text">{values.item.category}</p>
          <p className="stars">
          {
            stars.map((x,i)=>(<svg key={key+i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>))
          } &nbsp;
           &nbsp;
          <span>{values.item.rating.count}</span>
          </p>
          <p className="card-text">&#8377;{values.item.price}</p>
          <p title={values.item.description} className="card-text">{values.item.description.slice(0,200)}...</p>
          
          <a href="#" className="btn btn-success flex-box"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-plus" viewBox="0 0 16 16">
          <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
          <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
        </svg>&nbsp;Cart</a>
        </div>
      </div>
    )
}

export default ProductCard;