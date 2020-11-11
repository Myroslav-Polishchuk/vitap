import React from 'react'

function MetaArticle({
    meta_authors,
    meta_code,
    meta_name,
    meta_workplace
}) {
    const authorsNames = meta_authors.reduce((acum, val) => {
        return acum + val.name;
    }, '');
    
    return <div className="metaArticle">
        <a className={"metaArticle__journal"} href="#">
            {meta_name}
        </a>
        <p className={"metaArticle__code"}>
            <a href="#">{meta_code}</a>
        </p>
        <p className={"metaArticle__authors"}>
            {authorsNames}
        </p>
        <p className={"metaArticle__workplace"}>
            {meta_workplace}
        </p>
    </div>
}

export default MetaArticle;