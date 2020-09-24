import React from 'react';

import './Header.css' ;

const Header = () =>{
    return(
        <div className="header">
            <img 
                className= "header__logo"
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="an imag of amazon logo" 
             />
             <div className="header__search">
                 <input type="text" className=/>
             </div>

        </div>
    )
}

export default Header;