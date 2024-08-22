import React, { useState } from 'react'
import '../css/Header.css';
import { SlBasket } from "react-icons/sl";
import { MdOutlineLightMode } from "react-icons/md";
import { FaCloudMoon } from "react-icons/fa";

function Header() {
          const [theme, setTheme] = useState(false);

          const changeTheme = () => {
                    const root = document.getElementById("root");
                    setTheme(!theme);
                    if (theme) {
                              root.style.backgroundColor = "black"
                              root.style.color = '#fff'
                    } else {
                              root.style.backgroundColor = "#fff"
                              root.style.color = 'black'
                    }

          }
          return (
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                              <div className='flex-row'>
                                        <img className='logo' src="./src/images/logo.avif" />
                                        <p className='logo-text'> SENA A.Ş</p>
                              </div>
                              <div className='flex-row'>
                                        <input className='search-input' type='text' placeholder='Bir şeyler ara' />
                                        <div>
                                                  {theme ? <FaCloudMoon className='icon' onClick={changeTheme} /> : <MdOutlineLightMode className='icon' onClick={changeTheme} />}
                                                  <SlBasket className='icon' />
                                        </div>
                              </div>
                    </div>
          )
}

export default Header