import React from 'react'

import FooterComp from '../components/Footer/Footer'

function Footer() {
	return (
		<footer className="footer">
			<div className="footerContainer globalWrapper">
				<FooterComp/>
				<div className="footerContact">
					© 2020, ТОВ «ВІТ-А-ПОЛ». Усі права захищені
				</div>
			</div>
		</footer>
	) 
}

export default Footer;