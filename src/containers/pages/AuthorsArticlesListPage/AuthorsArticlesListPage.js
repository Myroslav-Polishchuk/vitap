import React, {useState, useEffect, useMemo} from 'react'

import Component from '../../../components/AuthorsArticlesListComp/AuthorsArticlesListComp';

import {authorsAxios} from '../../../components/axios'
import getI18Text from './../../../components/utils/i18n';

const limitPerPage = 2;

function AuthorsArticlesListPage(props) {
    const [articles, setArticles] = useState([]);
    const [activePagination, setActivePagination] = useState(1);
    const [articlesLength, setArticlesLength] = useState(0);
    const [author, setAuthor] = useState({});

    useEffect(() => {
        authorsAxios.get(`/author/${props.match.params.authorsID}`)
        .then(response => {
            if (response.status === 200) {
                setAuthor(response.data);
            } else {
                throw new Error('Recomendation Error');
            }
        })
        .catch(err => {
            console.log(err);
        })
    }, [props.match.params.authorsID]);

    useEffect(() => {
        if (props.match.params.authorsID) {
            authorsAxios.get(`length/${props.match.params.authorsID}`)
            .then(response => {
                if (response.status === 200) {
                    setArticlesLength(response.data.length);
                } else {
                    throw new Error('Recomendation Error');
                }
            })
            .catch(err => {
                console.log(err);
            })
        }
    }, [props.match.params.authorsID]);

    useEffect(() => {
        if (articlesLength && props.match.params.authorsID) {
            authorsAxios.post(`articles/${props.match.params.authorsID}`, {
                page: activePagination
            })
            .then(response => {
                if (response.status === 200) {
                    setArticles(response.data);
                } else {
                    throw new Error('Recomendation Error');
                }
            })
            .catch(err => {
                console.log(err);
            })
        }
    }, [articlesLength, props.match.params.authorsID, activePagination]);

    const {BreadcrumbsData, titleText} = useMemo(() => {
        if (author && author.name && props.languageID) {
            const authorsText = getI18Text('authorsMainTitle', props.languageID);
    
            return {
                BreadcrumbsData: [
                    {
                        text: authorsText,
                        url: "/authors"
                    },
                    {
                        text: author.name,
                        url: ""
                    },
                ],
                titleText: `${getI18Text('justAuthor', props.languageID)}: ${author.name}`,
            }
        } else {
            return {
                BreadcrumbsData: [],
                titleText: '',
            }
        }
    }, [author, props.languageID]);

    return <Component
        BreadcrumbsData={BreadcrumbsData}
        titleText={titleText}
        articleListData={articles}
        paginationProps={{
            activePagination: activePagination,
            dataLength: articlesLength,
            limitPerPage: limitPerPage,
            onPaginationChange: setActivePagination
        }}
    />
}

export default AuthorsArticlesListPage