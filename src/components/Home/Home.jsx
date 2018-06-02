import React, { Component } from 'react';
import './Home.css';
import { Carousel } from 'react-bootstrap';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="Hbanner" >
                    <h6 className="banner-contenth6">AWAY FROM MONOTONOUS LIFE</h6>
                    <h2 className="banner-contenth2">Relax Your Mind</h2>
                    <p className="banner-contentp">
                        If you are looking at blank cassettes on the web, you may be very confused at the
                  <br />
                        difference in price. You may see some for as low as $.17 each.
                  </p>
                    <button className="banner-btn">GET STARTED</button>

                    <div className="booking-area">
                        <div className="title">
                            <h2>
                                BOOK
                             <br />
                                YOUR ROOM
                         </h2>
                        </div>
                        <div className="form1">
                            <input type="date" name="arrival" className="no1" placeholder="    Arrival Date">
                            </input>
                            <input type="text" name="departure" className="no2" placeholder="    Departure Date">
                            </input>
                        </div>
                        <div className="form2">
                            <input type="text" name="adult" className="no3" placeholder="    Adult">
                            </input>
                            <input type="text" name="child" className="no4" placeholder="    Child">
                            </input>
                        </div>
                        <div className="form3">
                            <input type="text" name="child" className="no5" placeholder="    Child">
                            </input>
                            <button className="no6">BOOK</button>
                        </div>

                    </div>
                </div>

                <div className="header">
                    <h2 className="room-title">Hotel Accomodation</h2>
                    <p className="room-titlep">We all live in an age that belongs to the young at heart. Life that is becoming extremely fast,</p>
                </div>
                <div className="rooms">
                    <div className="room1">
                        <div className="room-image">
                            <img src={require('./image/room1.jpg')} alt="room" />
                            <a href="/" className="room-btn">Book Now</a>
                        </div>
                    </div>
                    <div className="room2">
                        <div className="room-image2">
                            <img src={require('./image/room2.jpg')} alt="room" />
                            <a href="/" className="room-btn">Book Now</a>
                        </div>
                    </div>
                    <div className="room3">
                        <div className="room-image3">
                            <img src={require('./image/room3.jpg')} alt="room" />
                            <a href="/" className="room-btn">Book Now</a>
                        </div>
                    </div>
                    <div className="room4">
                        <div className="room-image4">
                            <img src={require('./image/room4.jpg')} alt="room" />
                            <a href="/" className="room-btn">Book Now</a>
                        </div>
                    </div>
                </div>
                <div className="facilities">
                    <div className="header2">
                        <h2 className="fac-title">Royal Facilities</h2>
                        <p className="fac-titlep">Who are in extremely love with eco friendly system.</p>
                    </div>
                    <div className="hotel-fac">
                        <div className="fac1">
                            <h4 className="fac-h4">Restaurant</h4>
                            <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                        </div>
                        <div className="fac2">
                            <h4 className="fac-h4">Sports CLub</h4>
                            <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                        </div>
                        <div className="fac3">
                            <h4 className="fac-h4">Swimming Pool</h4>
                            <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                        </div>
                    </div>
                    <div className="hotel-fac-2">
                        <div className="facc1">
                            <h4 className="fac-h4">Rent a Car</h4>
                            <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                        </div>
                        <div className="facc2">
                            <h4 className="fac-h4">Gymnesium</h4>
                            <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                        </div>
                        <div className="facc3">
                            <h4 className="fac-h4">Bar</h4>
                            <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                        </div>
                    </div>
                </div>
                <div className="about-head">
                    <div className="about-head1">
                        <h2 className="about-head-h2">About Us
                <br />
                            Our History
                <br />
                            Mission & Vision </h2>
                        <p className="about-head-p">inappropriate behavior is often laughed off as “boys will be boys,”
                <br />
                            women face higher conduct standards especially in the workplace.
                 <br />
                            That’s why it’s crucial that, as women, our behavior on the job is beyond
                 <br />
                            reproach. inappropriate behavior is often laughed.</p>
                        <a href="/" className="btn-about">Request Custom Price</a>
                    </div>
                    <div className="about-head2">
                        <img src={require('./image/about_bg.jpg')} alt="about" />
                    </div>
                </div>
                <div className="testimonial-area">
                    <div className="area-header">
                        <h2 className="area-header-h2">Testimonial from our Clients</h2>
                        <p>The French Revolution constituted for the conscience of the dominant aristocratic class a fall from</p>
                    </div>
                    <Carousel>
                        <Carousel.Item>
                            <div className="card">
                                <div className="card1">
                                    <div className="card-container">
                                        <img src={require('./image/testtimonial-1.jpg')} width="80px" height="80px" alt="card" />
                                        <div className="card-media">
                                            <p>As conscious traveling Paupers we must always be
                           <br />
                                                concerned about our dear Mother Earth. If you think
                            <br />
                                                about it, you travel across her face, and She is the </p>
                                            <h4 className="card-h4">Fanny Spencer</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="card2">
                                    <div className="card-container">
                                        <img src={require('./image/testtimonial-1.jpg')} width="80px" height="80px" alt="card" />
                                        <div className="card-media">
                                            <p>As conscious traveling Paupers we must always be
                           <br />
                                                concerned about our dear Mother Earth. If you think
                            <br />
                                                about it, you travel across her face, and She is the </p>
                                            <h4 className="card-h4">Fanny Spencer</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="card">
                                <div className="card1">
                                    <div className="card-container">
                                        <img src={require('./image/testtimonial-1.jpg')} width="80px" height="80px" alt="card" />
                                        <div className="card-media">
                                            <p>As conscious traveling Paupers we must always be
                           <br />
                                                concerned about our dear Mother Earth. If you think
                            <br />
                                                about it, you travel across her face, and She is the </p>
                                            <h4 className="card-h4">Fanny Spencer</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="card2">
                                    <div className="card-container">
                                        <img src={require('./image/testtimonial-1.jpg')} width="80px" height="80px" alt="card" />
                                        <div className="card-media">
                                            <p>As conscious traveling Paupers we must always be
                           <br />
                                                concerned about our dear Mother Earth. If you think
                            <br />
                                                about it, you travel across her face, and She is the </p>
                                            <h4 className="card-h4">Fanny Spencer</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>;
                </div>
                <div className="post-blog">
                    <div className="post-head">
                        <h2 className="post-head-h2">
                            latest posts from blog
                </h2>
                        <p>The French Revolution constituted for the conscience of the dominant aristocratic class a fall from</p>
                    </div>
                    <div className="blog-post">
                    <div className="blog1">
                        <div className="blog-image1">
                        <img src={require('./image/blog-1.jpg')} alt="blog" />
                            <div></div>
                        </div>
                        </div>
                        <div className="blog2">
                        <div className="blog-image2">
                        <img src={require('./image/blog-2.jpg')} alt="blog" />
                            <div></div>
                        </div>
                        </div>
                        <div className="blog3">
                        <div className="blog-image3">
                        <img src={require('./image/blog-3.jpg')} alt="blog" />
                            <div></div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
