import React from 'react'
import {Link} from 'react-router-dom'

import './OrganizationPreview.scss';
import PreviewContainer from './../PreviewContainer/PreviewContainer';

function OrganizationPreview(props) {

    const OrganizationListItems = props.organizations.map(org => {
        return <li key={org._id}>
            <a href={org.url} target="_blank" rel="noopener noreferrer">
                <img src={org.imgID.imgSrc} alt={org.imgID.imgAlt}/>
            </a>
        </li>
    })

    return <PreviewContainer {...props.titleData}>
        <ul className="organizationPreviewList globalWrapper listImg">
            {OrganizationListItems}
        </ul>
        <Link to="/organizations" className="videoViewMore" >{props.linkPreviewText}</Link>
    </PreviewContainer> 
}

export default OrganizationPreview;