import React from 'react'

import {Link} from 'react-router-dom'

function ListLinks({dataLinks, ulClass, listLinksRef, languageID}) {
	const links = dataLinks.map((dataLink) => {
		return <li key={dataLink.eng}>
			<Link to={`/articles/${dataLink.eng}`}>
				{dataLink[languageID]}
			</Link>
		</li> 	
	});

	return <ul className={ulClass} ref={listLinksRef}>
		{links}
	</ul>
}

ListLinks.defaultProps = {
	languageID: 'ukr'
}

export default ListLinks;