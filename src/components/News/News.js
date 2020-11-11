import React from 'react'
import {Link} from 'react-router-dom'

import Section from '../../components/Section/Section';
import Pagination from './../Pagination/Pagination';

import {createDatePublication} from '../utils/utils'

function News(props) {
    const newsItems = props.news.map(({_id, title, date}) => {
        return <li key={_id}>
            <Link to={`/news/${_id}`}>
                <p>{createDatePublication(date)}</p>
                <p>{title}</p>
            </Link>
        </li>
    })

    return <Section breadcrumbsData={props.breadcrumbsData} titleText={props.titleText}>
        <ul className="newsListPage">
            {newsItems}
        </ul>
        <Pagination {...props.paginationOptions} />
    </Section>
}

export default News;