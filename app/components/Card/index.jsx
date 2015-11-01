import React from 'react';
import styles from './style';
import classNames from 'classnames';
import Slider from 'react-slick';

export default class Card extends React.Component {
    render() {
        var cardClass = classNames({
            'col-md-4': true,
            'col-sm-6': true,
            'card-container': true
        });

        var settings = {
            dots: true,
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return <div className={cardClass}>
            <div className="card-inner-container">
                <div className="card-image">
                    <Slider {...settings}>
                        <div><img src="http://lorempixel.com/300/300/"/></div>
                        <div><img src="http://lorempixel.com/300/300/"/></div>
                        <div><img src="http://lorempixel.com/300/300/"/></div>
                    </Slider>
                </div>
                <div className="card-controls">

                </div>
            </div>
        </div>;
    }
}
