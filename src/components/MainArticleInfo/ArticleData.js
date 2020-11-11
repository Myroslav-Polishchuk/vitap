import React from 'react'

import MetaArticle from './MetaArticle';
import Resume from './Resume';

function ArticleData({
    main_title,
    main_fullText,
    meta_name,
    meta_code,
    meta_workplace,
    resume_keywords,
    resume_paragraphs,
    referencesID,
    categoryID,
    meta_authors,
    journalID,
    isOnline,
    date
}) {
    return <div className="articleData">
        <h3>
            {main_title}
        </h3>
        <MetaArticle 
            meta_authors={meta_authors}
            meta_code={meta_code}
            meta_name={meta_name}
            meta_workplace={meta_workplace}
         />
        <Resume
            resume_keywords={resume_keywords}
            resume_paragraphs={resume_paragraphs}
         />
        <div className="articleData__maintext">
            <p>{main_fullText}</p>
        </div>
    </div>
}

ArticleData.defaultProps = {
    main: {
        title: '',
        fullText: []
    }
}

export default ArticleData;