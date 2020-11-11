import React from 'react'
import {Link} from 'react-router-dom'

import ArticleData from "./ArticleData";
import References from './References';
import Also from './Also';
import Section from '../../components/Section/Section'

import './MainArticleInfo.scss'

function MainArticleInfo({
    breadcrumbsData,
    article,
    categoryTitle,
    goToStartPageText,
    categoryEng,
    alsoArticles
}) {
    return <Section breadcrumbsData={breadcrumbsData}>
        <Link className="sectionLink" to={`/articles/${categoryEng}`}>
            {categoryTitle}
        </Link>
        <ArticleData {...article} />
        <References references={article.referencesID} />
        <a className="goToStartPage" href="#">
            {goToStartPageText}
        </a>
        <Also alsoArticles={alsoArticles}/>
    </Section>  
}

export default MainArticleInfo;