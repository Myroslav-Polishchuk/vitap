import React from 'react'
import {Link} from 'react-router-dom'

import ArticleListItem from './ArticleListItem';
import Pagination from './../Pagination/Pagination';

import getI18Text from '../../components/utils/i18n'

function ArticlesListPage({
    articleListData,
    categories,
    paginationProps,
    languageID
}) {
    const ArticlesListItems = articleListData.map((data) => <ArticleListItem {...data} />);

    const ArticleBtnListItems = categories.map(item => {
        return <li key={item._id} className={'active'}>
            <Link to={`${item.eng}`}>
                {item[languageID]}
            </Link>
        </li>
    });

    return <>
        <ul className="articleList">
            {ArticlesListItems}
        </ul>
        <Pagination {...paginationProps} />
        <h5 className="articleListState">{getI18Text('stateCategoriesTitle', languageID)}</h5>
        <ul className="JournalList">
            {ArticleBtnListItems}
        </ul>
    </> 
}

export default ArticlesListPage;