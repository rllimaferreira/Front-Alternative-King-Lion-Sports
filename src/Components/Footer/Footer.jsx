import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
import LogomarcaIco from '../../assets/icon/kingLionIco.svg';
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="CorNav w-100 d-flex flex-column align-items-center text-center">
      <div className="navFooter p-1">
        <Link className="navgationItem nav-link textStyleFooter" to="/">
        <img src={LogomarcaIco}/>
        </Link>

        <Link className="navgationItem nav-link textStyleFooter" to="/">
          Home
        </Link>

        <Link className="navgationItem  nav-link textStyleFooter" to="/pg_products">
          Products
        </Link>
        
        <Link className="navgationItem  nav-link textStyleFooter" to="/pg_categories">
          Categories
        </Link>
        
        <Link className="navgationItem  nav-link textStyleFooter" to="/pg_sobre">
          About Us
        </Link>
      </div>
      <span className="lineBreakSmall" />
      <p className="textStyleFooter">Social Mídia</p>
     
      <div className="SocialMidia d-flex flex-row">
        <Link className="socialIco nav-link" to="#">
          <BsFacebook size={32}/>
        </Link>
        <Link className="socialIco nav-link" to="#">
          <BsInstagram size={32} />
        </Link>
        <Link className="socialIco nav-link" to="#">
          <BsYoutube size={32}/>
        </Link>
      </div>

      <span className="lineBreakBig" />
      <p className="copyRightText">
        Prices, promotions, payment terms, shipping and products are valid exclusively for purchases made via the internet. 
        Photos for illustrative purposes only. 
        <br/><br/>
        Copyright © 2022 All rights reserved King Lion Ecommerce</p>
    </footer>
  );
}
