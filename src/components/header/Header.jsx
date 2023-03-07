import React from 'react';

import ai from '../../images/ai2.png';


import './header.css';


const Header = () => (
  <div className="gpt3__header section__padding coolBackground" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Buy from the source</h1>
      <p>We at Buta Delivery try our best to present the finest products with reasonable prices gaving you a great products and saving you money! </p>

      <div className="gpt3__header-content__people">
       <p>Tomorrow has arrived</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} style={{borderRadius:"10px"}}/>
    </div>
  </div>
);

export default Header;
