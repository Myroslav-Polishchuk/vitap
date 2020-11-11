import React from 'react'
import {Link} from 'react-router-dom'

import Section from '../../components/Section/Section';

function VideoPage(props) {
    const {categoryID: categoryObj, previewText, title, embedURL} = props.video;

    return <Section breadcrumbsData={props.breadcrumbsData} titleText={props.titleText}>
        <main className="videoItem">
            <iframe 
                className="youtubeVideo"
                type="text/html"
                src={embedURL}
            />
            <h6>
                {categoryObj.ukr}
            </h6>
            <h5>
                {title}
            </h5>
            <p>
                {previewText}
            </p>
        </main>
        <Link to={'/videosList'} className="videoAnchor" >{props.anchorLinkText}</Link>
    </Section>
}

export default VideoPage;
