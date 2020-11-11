import React from 'react'
import {Link} from 'react-router-dom'

import './CategoryList.scss'

function CategoryList({itemDataArr, languageID}) {
    const itemsArr = itemDataArr.map(item => {
        return <li className={'active'} key={item._id}>
            <Link to={`/recomendations/${item.eng}`}>
                {item[languageID]}
            </Link>
        </li>
    })

    return <ul className="JournalList">
        {itemsArr}
    </ul>
}

export default CategoryList;