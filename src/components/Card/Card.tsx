import React from 'react';
import PropTypes from 'prop-types';

import { Card as CardAnt } from "antd";

import './Card.less';

const Card = (props) => {
    const { title, style, type, size, children } = props;
   
    return (
        <>
        <h3> Cart Component </h3>
        <CardAnt
            title={title}
            style={style}
            type={type}
            size={size}
            className="custom-card"
        >
           {children}
        </CardAnt>
        </>
    )   
}

Card.propTypes = {
   title: PropTypes.element,
   style: PropTypes.object,
   size: PropTypes.oneOf(['small', 'default']),
   bordered: PropTypes.bool,
   type: PropTypes.string,
   children: PropTypes.object
}

Card.defaultProps = {
    title: "Default Card",
    style: { width: 300 },

}

export default Card;