import React from 'react'

import {FooterSecondData} from '../../data/mock'

function FooterSecond() {

	const footerSecondData = FooterSecondData.map(({titleText, listDataArr}) => {
		const activitiesTitle = <>
			<div className={'footerTitle'}>
				<p className={'footerTitle__text'}>
					{titleText}
				</p>
				<div className={'footerTitle__link'}>
					<a href={"#"} />
				</div>
			</div>
		</>

		const textsList = <>
			<ul className={'footerList'}>
				{listDataArr.map(({text, _id}) => {
					return <li key={_id}>
						<p>
							{text}
						</p>
					</li>
				})}
			</ul>
		</>
		
		return <React.Fragment key={titleText}>
			{activitiesTitle}
			{textsList}
		</React.Fragment>
	})

	return <div>
		{footerSecondData}
	</div>
	
}

export default FooterSecond;