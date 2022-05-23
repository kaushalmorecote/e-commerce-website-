import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "./StateProvider";

function Header() {
  // const [{ basket }] = useStateValue();8888
  // const [{ basket }, dispatch] = useStateValue();
  const [{ basket}, dispatch] = useStateValue();

  // console.log(basket);8888

  return ( 
  <nav className="header">
    {/* logo on the left */}
    <a href="/">
      {/* <Link to="/">     */}
      <img
       className="header__logo" 
       src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
       alt="Amazon logo"/>
      {/* </Link>  */}
      </a>


      {/* search box */}
      <div className="header__search">
      <input type="text" className="header__searchInput"/>
      <SearchIcon className="header__searchIcon" />
      </div>


       {/* 3 links */}
       <div className="header__nav">
       {/* 1st Link */} 
       <a href="/login" className="header__link">
       {/* <Link to="/login" className="header__link"> */}
         <div className="header__option">
           <span  className="header__optionLineOne">Hello Kaushal</span>
           <span className="header__optionLineTwo" >Sign In</span>
         </div>
         </a>
       {/* </Link> */}

       {/* 2st Link */}
       <a href="/" className="header__link">
       {/* <Link to="/" className="header__link"> */}
         <div className="header__option">
           <span className="header__optionLineOne">Returns</span>
           <span className="header__optionLineTwo">& Orders</span>
         </div>
       {/* </Link> */}
       </a>


       {/* 3st Link */}
       <a href="/" className="header__link">
       {/* <Link to="/" className="header__link"> */}
         <div className="header__option">
           <span className="header__optionLineOne">Your</span>
           <span className="header__optionLineTwo">Prime</span>
         </div>
       {/* </Link> */}
       </a>

        <a href="/checkout" className="header__link">
       {/* 4st Link */}
       {/* <Link to="/checkout" className="header__link"> */}
         <div className="header__optionBasket">
           {/* shopping basket icon */}
           <ShoppingCartIcon/>
           {/* Number of items in the basket */}
           <span className="header__optionLinetwo header__BasketCount" >{basket?.length}</span>
           {/* <span className="header__optionLinetwo header__BasketCount" >{basket.length}</span> */}
         </div>
       {/* </Link> */}
       </a>
       </div>
    </nav>
  );
  
}

export default Header;

