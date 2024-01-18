import image from "../utils/asset/logo.png";
import { useState } from "react";
import {Link} from 'react-router-dom'
const Header = ()=>{
   const [login,setLogin] = useState('Login')
   return (
     <div className="header-container">
       <div className="header">
         <div className="logo-container">
           <img src={image} alt="not scccfound" id="logo" />
           <h1 className="product">Food Mania</h1>
         </div>

         <div className="nav-bar">
           <ul>
             <li className="items">
               <Link to="/" className="afterlink">
                 Home
               </Link>
             </li>
             <li className="items">
               <Link to="/about" className="afterlink">
                 About
               </Link>
             </li>
             <li className="items">
               <Link to="/contact" className="afterlink">
                 Contact
               </Link>
             </li>
             <li className="items">Cart</li>
             <li className="items">
               <button
                 className="login"
                 onClick={() => {
                   if (login == "Login") setLogin("Logout");
                   else setLogin("Login");
                 }}
               >
                 {login}
               </button>
             </li>
           </ul>
         </div>
       </div>
     </div>
   );
}

export default Header