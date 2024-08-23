import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="logo">MarketZone</div>
      <nav className="navbar">
        {/* <a href="/shop">Shop</a>
        <a href="/review">Order Review</a>
        <a href="/inventory">Manage Inventory</a> */}
        <Link to='/shop'> Shop </Link>
        <Link to='/order'> Order REview </Link>
        <Link to='/inventoryManage'> Manage Inventory </Link>
        
      </nav>
    </div>
  );
};

export default Header;
