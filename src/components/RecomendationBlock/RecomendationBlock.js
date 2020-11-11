import React from 'react'
import {Link} from 'react-router-dom';

import Recomendations from '../Lists/Recomendations'
import PreviewContainer from './../PreviewContainer/PreviewContainer';

import './RecomendationBlock.scss'

function RecomendationBlock({recomendations, titleData, viewMoreText, languageID}) {  
        return <PreviewContainer classStyle={'recomendationTitle'} containerStyle={'recomendationContainer'} {...titleData}>
                <Recomendations recomendations={recomendations} ulClass={"recomendationList"} languageID={languageID} viewMoreText={viewMoreText}/>
        </PreviewContainer>
}

export default RecomendationBlock;
