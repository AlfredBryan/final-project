import React, { Component } from 'react';
import './Home.css';
import CustomNavbar from '../Navigation/CustomNavbar';

export default class Home extends Component {
    render() {
        return (
            <div>
            
            <CustomNavbar />

              <div className="banner" >
                  <h6 className="banner-contenth6">AWAY FROM MONOTONOUS LIFE</h6>
                  <h2 className="banner-contenth2">Relax Your Mind</h2>
                  <p className="banner-contentp">
                  If you are looking at blank cassettes on the web, you may be very confused at the
                  <br/>
                       difference in price. You may see some for as low as $.17 each.
                  </p>
                     <button className="banner-btn">GET STARTED</button>
                  </div>  
            </div>
        )
    }
}
