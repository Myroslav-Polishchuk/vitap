import React from 'react'
import {Link} from 'react-router-dom'

import Pagination from './../Pagination/Pagination';
import Section from './../Section/Section';

function AuthorsArticlesListComp({
    paginationProps,
    articleListData,
    BreadcrumbsData,
    titleText
}) {
    const ArticlesListItems = articleListData.map((data) => <ArticleListItem {...data} />);

    return <Section breadcrumbsData={BreadcrumbsData} titleText={titleText}>
        <ul className="articleList">
            {ArticlesListItems}
        </ul>
        <Pagination {...paginationProps}/>
    </Section>
}

function ArticleListItem({journalID, meta_authors, main_title, _id}) {
    const authorsListItems = meta_authors.map((author, index) => {
        const name = index + 1 !== meta_authors.length ? author.name + ',' : author.name;
        return <li key={author.name}>
            <a href={author.href}>
                {name}
            </a>
        </li>
    });

    return <li>
        <h6>
            <Link to={`/article/${_id}`}>{main_title}</Link>
        </h6>
        <div className="articleAuthors">
            <ul className="articleAuthorsList">
                {authorsListItems}
            </ul>
            <p className="articleAuthorsJournal">
                <span>Журнал: <a href={journalID.url} rel="noopener noreferrer" target="_blank">{journalID.name}</a></span>
            </p>
        </div>
    </li>

}

export default AuthorsArticlesListComp;