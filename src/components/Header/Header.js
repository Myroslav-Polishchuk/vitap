import React from 'react'
import {Link} from 'react-router-dom'

import Links from './Links'
import SearchBar from './SearchBar'

import './Header.scss'

function Header(props) {
    return <header className="header">
		<div className="globalWrapper">
			<nav className="navigationUp">
				{props.ListLanguages}

				<div className="navigationUpImage">
					<Link to={'/'}>
						<img src="img/vitapol_main_image.png" alt=""/>
					</Link>
				</div>

				<div className="registationLink">
					<a href="#">Реєстрація</a>
				</div>
			</nav>
		</div>

		<nav className="navigationBottomWrapper">
			<div className="globalWrapper headerGlobalWrapper" ref={props.globalWrapperRef}>
				<div className="goHomeWrapper">
					<Link to={'/videosList'}/>
				</div>
				<Links dataLinks={props.categories} GlobalWrapperWidht={props.GlobalWrapperWidht} languageID={props.languageID} />
				<SearchBar />
			</div>
		</nav>
	</header>
}

export default Header;

