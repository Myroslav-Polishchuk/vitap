import React from 'react'
import {Link} from 'react-router-dom'

import './Authors.scss'

function AuthorsList(props) {
    return <ul className="AuthorsList">
        {props.authors.map(author => {
            return <li key={author._id}>
                <Link to={`/authors/${author._id}`}>
                    {author.name}
                </Link>
            </li>
        })}
    </ul>
}

export default AuthorsList;