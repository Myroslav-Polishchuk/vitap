import React, {useEffect, useState, useMemo} from 'react'

import Component from '../../../components/VideoPage/VideoPage'

import {videoAxios} from '../../../components/axios'
import getI18Text from '../../../components/utils/i18n'

import './VideoPage.scss'

const TitleMainText = getI18Text("videoListTitle", "ukr");
const anchorLinkText = getI18Text("videoPageReturn", "ukr");

function VideoPage(props) {
    const [video, setVideo] = useState({});

    useEffect(() => {
        videoAxios.get(`/${props.match.params.videosID}`)
        .then(response => {
            if (response.status === 200) {
                setVideo(response.data);
            } else {
                throw new Error('Recomendation Error');
            }
        })
        .catch(err => {
            console.log(err);
        })
    }, [props.match.params.videosID]);

    const BreadcrumbsData = useMemo(() => [
        {
            text: getI18Text('videoPreviewTitle', props.languageID),
            url: "/videosList"
        },
        {
            text: video.title,
            url: ""
        }
    ], [props.languageID, video]);

    if (video._id) {
        return <Component 
            breadcrumbsData={BreadcrumbsData}
            titleText={TitleMainText}
            video={video}
            anchorLinkText={anchorLinkText}
        />
    } else {
        return '';
    }
}

export default VideoPage;