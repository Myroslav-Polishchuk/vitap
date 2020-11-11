import React from 'react'
import {Link} from 'react-router-dom';

function Authors({linkText, linkURL, imgSrc, imgAlt}) {
    return <>
        <Link to={'/authors'} className={"Authors"}>
            <img 
                className={"Authors__img"}
                src={imgSrc}
                alt={imgAlt}
            />
            <span className={"Authors__link"}>
                {linkText}
            </span>
        </Link>
    </>
}

Authors.defaultProps = {
    linkText: 'Автори >>',
    linkURL: '#',
    imgSrc: '#',
    imgAlt: '#'
}

export default Authors;