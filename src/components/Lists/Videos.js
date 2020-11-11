import React from 'react'

import {Link} from 'react-router-dom'

function Videos({dataVideos, ulClass, languageID}) {
    return 	<ul className={ulClass}>
        {dataVideos.map((data, index) => <VideosItem {...data} key={data._id} languageID={languageID}/>)}
    </ul>
}

export default Videos;

function VideosItem({_id, previewImgSrc, previewImgAlt, categoryID: categoryObj, previewText, languageID}) {
    return <li>
        <Link className="imgLink" to={`/videos/${_id}`}>
            <img src={previewImgSrc} alt={previewImgAlt}/>
        </Link>
        <h6>
            {categoryObj[languageID]}
        </h6>
        <p>
            {previewText}
        </p>
    </li>
}