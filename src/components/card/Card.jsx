import React from 'react';
import CardGraphic from '../../assets/img/Image.png';
import Local from '../../assets/img/Location-fill.png';
import './index.css';

function Card({ title = '', ingredients = '', price = 0, tags = [], location = '' }) {
    return (
        <div className="cardWrapper">
            <div className="imgWrapper">
                <img src={CardGraphic} alt="" />
            </div>
            <div className="contentWrapper">
                <div className="content">
                    <div className="title">{title}</div>
                    <div className="descriptionWrapper">
                        <div className="description">
                            <div className="label">{ingredients}</div>
                            <div className="price">{`$ ${price}`}</div>
                        </div>
                        <div className="hashtags">
                            {tags.map((tag, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        {!!index && <span>•</span>} {tag}
                                    </React.Fragment>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="addressWrapper">
                    <div className="localImgWrapper">
                        <img src={Local} alt="" />
                    </div>
                    <div className="address">{location} </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
