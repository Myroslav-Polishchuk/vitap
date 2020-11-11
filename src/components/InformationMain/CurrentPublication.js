import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

function CurrentPublication ({
	_id,
	mainText,
	imgs,
	title,
	mainNewsTitle
}) {
	return (
		<div className="currentPublicationWrapper">
			<Link to={`/news/${_id}`} className="currentPublicationImg">
				<img src={imgs[0].imgSrc} alt={imgs[0].imgAlt}/>
				<a href={"#"}>
					{mainNewsTitle}
				</a>
			</Link>
			<div className="currentPublication__preview">
				<h4>
					<Link to="/news">
						{title}
					</Link>
				</h4>
				<p>{mainText}</p>
			</div>
		</div>
	)
}

CurrentPublication.propTypes = {
	previewTitle: PropTypes.string.isRequired,
	previewText: PropTypes.string.isRequired,
	imgLinkText: PropTypes.string.isRequired,
	imgLinkUrl: PropTypes.string.isRequired
}

export default CurrentPublication;