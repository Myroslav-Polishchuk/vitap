import React from 'react'

import FooterFirst from './FooterFirst'
import FooterSecond from './FooterSecond';

import './Footer.scss'

function Footer() {
	return (
		<div className="footerInformaion">
			<FooterFirst/>
			<FooterSecond /> 
		</div>
	) 
}

export default Footer;