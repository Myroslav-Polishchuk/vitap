import React from 'react'
import {Link} from 'react-router-dom';

import './VideoPreview.scss'
import PreviewContainer from './../PreviewContainer/PreviewContainer';

function VideoPreview({
    videos,
    titleData,
    viewMoreVideos,
    languageID
}) {
    const videoPreviewsItems = videos.map(({previewImgSrc, categoryID, previewText, _id}) => {
        return <li key={_id}>
            <div>
                <img src={previewImgSrc} alt="#"/>
            </div>
            <div>
                <Link to={`/videosList/${categoryID.eng}`}>
                    <h6>{categoryID[languageID]}</h6>
                </Link>
                <Link to={`videos/${_id}`}>
                    <p>{previewText}</p>
                </Link>
            </div>
        </li>
    });

    return <PreviewContainer {...titleData}>
        <ul className="videoPreview">
            {videoPreviewsItems}
        </ul>
        <Link to="/videosList" className="videoViewMore" >{viewMoreVideos}</Link>
    </PreviewContainer>
}

VideoPreview.defaultProps = {
    videos: []
}

export default VideoPreview;