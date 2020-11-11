import React, {useState} from 'react'

import Component from '../components/AdvertisingInfo/AdvertisingInfo'

function AdvertisingInfo(props) {
	const [reclama, setReclama] = useState({
		src: "./img/reclama_2.png",
		alt: "reclama_2"
	});
	return <Component {...props} src={reclama.src} alt={reclama.alt}/>
}

export default AdvertisingInfo;