import React, {useRef, useEffect, useState} from 'react'

import Component from '../components/Header/Header'

function Header(props) {
    const globalWrapperRef = useRef(null);
	const [GlobalWrapperWidht, setGlobalWrapperWidht] = useState(0);
	const ListLanguages = getListLanguages(props.languageID, props.setLanguageID);

	useEffect(() => {
		setGlobalWrapperWidht(globalWrapperRef.current.clientWidth);
    }, [])
    
    return <Component 
        {...props}
        GlobalWrapperWidht={GlobalWrapperWidht}
        ListLanguages={ListLanguages}
        globalWrapperRef={globalWrapperRef}
    />
}

export default Header;

function getListLanguages(languageID, setLanguageID) {
	const activeLanguageID = languageID ? languageID : "ukr";
    const listLanguages = [
		{
			id: "ukr",
			name: "Українська"
		},
		{
			id: "rus",
			name: "Русский"
		}
    ];
    
	if (listLanguages.length) {
		return (
			<ul className="listLanguages">
				{listLanguages.map(({id, name}) => {

					let classStyle = "";
					let text = name;
					if (activeLanguageID === id) {
						classStyle = "active";
						text = `${name} /`;
					}

					return (
						<li className={classStyle} key={id}>
							<span onClick={() => {
								setLanguageID(id)
							}}>
								{text}
							</span>
						</li>
					);
				})}
			</ul>
		)
	} else {
		return '';
	}
};