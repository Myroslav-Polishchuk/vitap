import React from 'react'
import {Link} from 'react-router-dom'

function Recomendations({recomendations, ulClass, languageID, viewMoreText}) {
    return <ul className={ulClass}>
        {recomendations.map((data, index) => <RecomendationItem {...data} viewMoreText={viewMoreText} languageID={languageID} key={'recomendation' + index}/>)}
    </ul>
}

export default Recomendations;

function RecomendationItem({category, recomendations, languageID, viewMoreText}) {
    const RecomendationTitle = <>
        <div className={"recomendationItemTitle"}>
            <Link to={`/recomendations/${category.eng}`} className={`recomendationItemTitle__text`}>
                {category[languageID]}
            </Link>
            <div className={`recomendationItemTitle__link`}>
                <Link to={`/recomendations/${category.eng}`} />
            </div>
        </div>
    </>

	return (
		<li>
			{RecomendationTitle}
			<div>
                {recomendations.map(rec => {
                    return <a
                        className={'recomendationItemTitle__dataLink'}
                        key={rec._id}
                        href={rec.fileID.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {rec.text}
                    </a>
                })}
			</div>
            {viewMoreText && <Link className="recomendationViewmore" to={`/recomendations/${category.eng}`}>
                {viewMoreText}
            </Link>}
		</li>
	)
}

Recomendations.defaultProps = {
    recomendations: []
}
