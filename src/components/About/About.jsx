import React, { Component } from 'react'
import './About.css';

class About extends Component {
    render () {
        return (
            <div>
              <div className="banner">
                  <img src={require('./image/About.jpg')} alt="balcony" />
                  </div>  
            </div>
        )
    }
}

export default About;