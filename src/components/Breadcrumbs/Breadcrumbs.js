import React from 'react'

import {Link} from 'react-router-dom'

function Breadcrumbs({dataArr, classStyle}) {
    const data = [{
        text: "Домашня сторінка",
        url: "/"
    }, ...dataArr];

    return <p className={classStyle}>
        {data.map(({text, url}) => {
            if (!url) {
                return <span className="text" key={text + url}>
                    {text}
                </span> 
            } else {
                return <Link className="link" to={url} key={text + url}>
                {`${text} > `}
            </Link>
            }
        })}
    </p>
}

export default Breadcrumbs;