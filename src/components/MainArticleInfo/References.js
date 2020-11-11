import React, {useState} from 'react'

import getI18Text from '../../components/utils/i18n'

const ReferenceTitleName = getI18Text('ReferenceTitleName', 'ukr')

function References(props) {
    const [showReferences, setShowReferences] = useState(false);
    return <div className="References__wrapper">
        <div className="References">
            <span className="References__text">
                {ReferenceTitleName}
            </span>
            <div className="References__icon" onClick={() => (setShowReferences(!showReferences))}>
                image
            </div>
        </div>
        {showReferences && <ul className="References__list">
            {props.references.map(({text, url}) => {
                return <li>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        {text}
                    </a>
                </li>
            })}
        </ul>}
    </div>
}

export default References;