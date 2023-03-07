import React from 'react';
import { Link } from 'react-router-dom';
import './cta.css';

const CTA = () => (
  <div className="gpt3__cta coolBackground">
    <div className="gpt3__cta-content">
      <p></p>
      <h3>Order now and get a discount for you first delivery!!</h3>
    </div>
    <div className="gpt3__cta-btn">
  <Link to="/rooms" className='primary'>Our Products</Link>
    </div>
  </div>
);

export default CTA;
