import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function News ({newsPreview, titleText}) {
	const NewsList = <ul className={"newsList"}>
		{newsPreview.map((dataLink) => {
			return <li key={dataLink._id}>
				<Link to={`/news/${dataLink._id}`}>
					{dataLink.title}
				</Link>
			</li>
		})}
	</ul>

	const NewsTitle = <>
		<div className={'newsTitle'}>
			<p className={'newsTitle__text'}>
				<Link to={'/news'} >
					{titleText}
				</Link>
			</p>
			<div className={'newsTitle__link'}>
				<Link to={'/news'} />
			</div>
		</div>
	</>
	
	return <div className="newsContainer">
		{NewsTitle}
		{NewsList}
	</div>
}

News.propTypes = {
	titleText: PropTypes.string.isRequired,
	newsDataArr: PropTypes.array.isRequired
}

News.defaultProps = {
	newsDataArr: []
}

export default News;