import React from 'react'

import getI18Text from '../../components/utils/i18n'

const resumeTitle = getI18Text('Resume', 'ukr');
const keywordsTitle = getI18Text('Keywords', 'ukr');

function Resume({
    resume_keywords,
    resume_paragraphs
}) {
    return <div className="Resume">
        <h5 className="Resume__title">
            {resumeTitle}
        </h5>
        <div className="Resume__maintext">
            <p>{resume_paragraphs}</p>
        </div>
        <div className="Resume__mainWords">
            <h6>
                {keywordsTitle}
            </h6>
            <p>{resume_keywords}</p>
        </div>
    </div>
}

Resume.defaultProps = {
    paragraphs: [],
    keywords: ''
}

export default Resume;