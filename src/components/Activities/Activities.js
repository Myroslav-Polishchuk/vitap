import React from 'react'
import {Link} from 'react-router-dom'

import PreviewContainer from './../PreviewContainer/PreviewContainer';
import './Activities.scss'

function Activities(props) {
    const ActivitiesList = props.activities.map(act => {
        return <li key={act._id}>
            <a href={act.url} target="_blank" rel="noopener noreferrer">
                <img src={act.imgID.imgSrc} alt={act.imgID.imgAlt}/>
            </a>
        </li>
    })

	return <PreviewContainer {...props.titleData} classStyle={'activityTitle'}>
        <ul className="imgList listImg">
            {ActivitiesList}
        </ul>
        <Link to="/events" className="videoViewMore" >{props.linkPreviewText}</Link>
    </PreviewContainer>
}

export default Activities;