import React, {useState, useCallback} from 'react';

import HiddenNavigationList from './HiddenNavigationList';
import Links from '../Lists/Links'

function LinksComp({GlobalWrapperWidht, dataLinks, languageID}) {
	const [showHiddenMenu, setShowHiddenMenu] = useState(false);

	const clickMenuHandler = useCallback(() => {
		setShowHiddenMenu(!showHiddenMenu);
	}, [showHiddenMenu]);

	const countLinks = calculateCountLinks(GlobalWrapperWidht, dataLinks, languageID);
	
	const HiddentNavigationMenu = showHiddenMenu && <HiddenNavigationList dataLinks={dataLinks} />;
	const currentDataLinks = dataLinks.slice(0, countLinks);

	return (
		<div className="navigationListWrapper">
			<div className="navigationList">
				<Links dataLinks={currentDataLinks} ulClass={"navigationListLinks"} languageID={languageID}/>
				<button onClick={clickMenuHandler} className={"navigationOpenMenuBtn" + (showHiddenMenu ? " navigationOpenMenuBtn--active" : "")} />
			</div>
			{HiddentNavigationMenu}
		</div> 
	)
};

LinksComp.defaultProps = {
	languageID: 'ukr'
}

export default React.memo(LinksComp);

function calculateCountLinks(GlobalWrapperWidht, dataLinks, languageID) {
	if (!dataLinks) {
		return 0;
	}
	const containerWidht = GlobalWrapperWidht * 0.69;
	
	let currentWidht = 0;
	let countLinks = 0;

	dataLinks.forEach((dataLink) => {
		const text = dataLink[languageID];
		const sLetters = text.length * 8;
		const size = sLetters + 20;

		currentWidht += size;
		if (currentWidht < containerWidht) {
			countLinks++;
		}
	});

	return countLinks;
}



