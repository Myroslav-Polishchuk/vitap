import React from 'react'

import InformationMain from '../InformationMain';
import ArticleBlock from '../ArticleBlock'
import RecomendationBlock from '../RecomendationBlock';
import ActivitiesPreview from '../ActivitiesPreview';
import AdvertisingInfo from '../AdvertisingInfo';
import VideoPreview from '../VideoPreview';
import OrganizationPreview from '../OrganizationPreview';

const classStyle = "fullWrapper";

function HomePage(props) {
    return <>
        <InformationMain languageID={props.languageID}/>
        <ArticleBlock languageID={props.languageID}/>
        <RecomendationBlock languageID={props.languageID}/>
        <AdvertisingInfo classStyle={classStyle} link={"#"}/>
        <VideoPreview languageID={props.languageID}/>
        <ActivitiesPreview languageID={props.languageID}/>
        <OrganizationPreview languageID={props.languageID}/>
    </>
}

export default HomePage;