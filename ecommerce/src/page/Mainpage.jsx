import React ,{ useEffect,useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer,  toast } from "react-toastify";
import  cart_icon from '../Components/Assets/cart_icon.png';
import Products from '../Components/Products/Products';



export default function Mainpage() {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);
  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        navigate("/login");
      } else {
        const { data } = await axios.post(
          "http://localhost:4000",
          {},
          {
            withCredentials: true,
          }
        );
        if (!data.status) {
          removeCookie("jwt");
          navigate("/login");
        } else
          toast(`Hi ${data.user}`, {
            theme: "dark",
          });
      }
    };
    verifyUser();
  }, [cookies, navigate, removeCookie]);

  const logOut = () => {
    removeCookie("jwt");
    navigate("/login");
  };
  
  const [menu,setMenu] = useState("shop");
 

  return (
  <>
    <div className='navbar'>
          <div className='nav'>
            <p>SHOPPER</p>
          </div>
          <ul className='nav-menu'>
              <li onClick={() =>{setMenu("mens")}}><Link style={{textDecoration: 'none'}}to='/mens'>Mens</Link>{menu==="mens"?<hr/>:<></>} </li>
              <li onClick={() =>{setMenu("womens")}}><Link style={{textDecoration: 'none'}} to='/womens'>Womens</Link>{menu==="womens"?<hr/>:<></>}</li>
          </ul>
          <div className="nav-login-cart">
              
              <Link to='/cart'><img src={cart_icon} alt=""/></Link>
              <div className="nav-cart-count">0</div>
          </div>
          <button onClick={logOut}>Log Out</button>
          
      </div>
      
      
      <div className='content-area'>
      
      <Products />
      

      </div>
      
      
    <ToastContainer />
  </>
    
  );
}
