import React, {useEffect, useState, useMemo} from 'react'

import Component from '../../../components/MainArticleInfo/MainArticleInfo'

import {articlesAxios} from '../../../components/axios'
import getI18Text from './../../../components/utils/i18n';

function ArticlePage(props) {
    const [article, setArticle] = useState({});
    const [alsoArticles, setAlsoArticles] = useState([]);

    useEffect(() => {
        articlesAxios.get(`/article/${props.match.params.articleID}`)
        .then(response => {
            if (response.status === 200) {
                setArticle(response.data);
            } else {
                throw new Error('Recomendation Error');
            }
        })
        .catch(err => {
            console.log(err);
        })
    }, [props.match.params.articleID])

    useEffect(() => {
        if (article._id) {
            articlesAxios.post('/article/also', {
                ignoreArticleID: article._id,
                categoryID: article.categoryID._id
            })
            .then(response => {
                if (response.status === 200) {
                    setAlsoArticles(response.data);
                } else {
                    throw new Error('Recomendation Error');
                }
            })
            .catch(err => {
                console.log(err);
            })
        }
    }, [article])

    const BreadcrumbsData = useMemo(() => {
        if (article._id && props.languageID) {
            return [
                {
                    text: getI18Text('articlesTitle', props.languageID),
                    url: "#"
                },
                {
                    text: article.categoryID[props.languageID],
                    url: `/articles/${article.categoryID.eng}`
                },
                {
                    text: article.main_title,
                    url: ""
                }
            ];
        } else {
            return [];
        }
    }, [article, props.languageID])

    const [goToStartPageText, categoryTitle, categoryEng] = useMemo(() => {
        if (props.languageID && article._id) {
            return [
                getI18Text('goToStartPage', props.languageID),
                article.categoryID[props.languageID],
                article.categoryID.eng
            ]
        } else {
            return [];
        }
    }, [props.languageID, article]);

    if (article._id) {
        return <Component 
            breadcrumbsData={BreadcrumbsData} 
            categoryTitle={categoryTitle}
            categoryEng={categoryEng}
            article={article}
            goToStartPageText={goToStartPageText}
            alsoArticles={alsoArticles}
        />
    } else {
        return '';
    }
}

export default ArticlePage;