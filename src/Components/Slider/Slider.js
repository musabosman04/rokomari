import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Slider.css'
class Slider extends Component {
    render() {
        return (
            <div className="container slider">
                <Carousel>
                    <div>
                        <img src="https://i.pinimg.com/originals/5c/3d/43/5c3d43e8e8c588c4727cbaca4514857e.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2017/08/nature-design.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSp8FuvKwZoFGJwLl7mB5YMXqQ_XbpO5vJDqodrquCIK0zYVux1&usqp=CAU" alt="" />
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default Slider;