import React from 'react'
import {Link} from 'react-router-dom';

function Articles({previewArticles, ulClass, linkText, languageID}) {
	return <ul className={ulClass}>
		{previewArticles.map((data, index) => <ArticleItem {...data} languageID={languageID} key={'article' + index} linkText={linkText}/>)}
	</ul>
}

function ArticleItem({
	category, 
	articles,
	linkText,
	languageID
}) {
	const titleText = category[languageID];
	const titleUrl = `/articles/${category.eng}`;
	const {imgSrc, imgAlt} = category;

	const ItemTitle = <>
		<div className={'articleTitle'}>
			<p className={'articleTitle__text'}>
				<Link to={titleUrl}>
					{titleText}
				</Link>
			</p>
			<div className={'articleTitle__link'}>
				<Link to={titleUrl} />
			</div>
		</div>
	</>

	const listArticles = articles.map((art, index) => {
		return <Link to={`/article/${art._id}`} key={art._id} className={index === 0 ? "firstLink" : ""}>
			{art.main_title}
		</Link>
	})

	return <li>
		<div className="articleItem">
			{ItemTitle}
			<div>
				<img src={imgSrc} alt={imgAlt}/>
			</div>
			{listArticles}
		</div>
		<Link to={titleUrl} className="articlesSpecialion">{linkText}</Link>
	</li> 
}

export default Articles