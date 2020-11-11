import React from 'react'

import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import TitleMain from '../../components/TitleMain/TitleMain';

function Section({breadcrumbsData, titleText, children}) {
    return <div className="articlePage globalWrapper">
        <main className="ArticlePageMain">
            {breadcrumbsData && <Breadcrumbs dataArr={breadcrumbsData} classStyle="breadcrumbs" />}
            {titleText && <TitleMain text={titleText}/>}
            {children}
        </main>
        <aside className="articlePage__aside">
            <div>
                <img src="#" alt="#"/>
            </div>
        </aside>
    </div>
}

export default Section;