import React from 'react'
import {Link} from 'react-router-dom'

import ImageGallery from 'react-image-gallery';
import {createDatePublication} from '../utils/utils';

import Section from './../Section/Section';

import './New.scss'

function generateImgages(imgs) {
    return imgs.map(img => {
        return {
            original: img.imgSrc
        }
    })
};

function New({
    sectionData,
    datePublicText,
    newData,
    anchorNewsLinkText
}) {
    const datePublic = (datePublicText && newData.date) ?
        <p className="newItem__datePublic">{`${datePublicText}: ${createDatePublication(newData.date)}`}</p> : '';

    const gallery = (newData.imgs) ? <ImageGallery
        showThumbnails={false}
        showFullscreenButton={false}
        useBrowserFullscreen={false}
        showPlayButton={false}
        items={generateImgages(newData.imgs)}
    /> : '';

    const mainText = (newData.mainText) ? <p className="newItem__mainText">{newData.mainText}</p> : '';

    const video = (newData.videoSrc) ? <>
        <iframe 
            className="youtubeVideo"
            type="text/html"
            src={newData.videoSrc}
        />
    </> : '';

    return <Section {...sectionData}>
        <main className="newItem">
            {datePublic}
            {gallery}
            {mainText}
            {video}
        </main>
        <Link to={'/news'} className="videoAnchor" >{anchorNewsLinkText}</Link>
    </Section>
}

export default New;