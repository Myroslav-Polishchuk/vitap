import React from 'react';

import News from './News';
import CurrentPublication from './CurrentPublication';
import Magazines from './Magazines';
import AdvertisingInfo from "./AdvertisingInfo";
import Authors from './Authors'

import './InformationMain.scss'

function InformationMain({
	newsPreview,
	magazinesData,
	titles,
	mainNews
}) {
	return <>
		<div className="InformationMainWrapper standartContainer globalWrapper">
			<News newsPreview={newsPreview} titleText={titles.newsTitle}/>
			{mainNews._id && <CurrentPublication {...mainNews} mainNewsTitle={titles.mainNewsTitle}/>}
			<Magazines magazinesData={magazinesData} titleText={titles.magazinesTitle}/>
			<AdvertisingInfo src={'./img/reclama.png'} alt={'reclama'} link={'#'}/>
			<Authors linkText={titles.authorsLinkText} />
		</div>
	</> 
}

export default InformationMain;