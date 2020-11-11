import React, {useState, useMemo, useEffect} from 'react'

import Section from '../../../components/Section/Section';
import Component from '../../../components/ArticleListPage/ArticlesListPage';
import {articlesAxios} from '../../../components/axios'

import getI18Text from '../../../components/utils/i18n';

import './ArticlesListPage.scss';

const limitPerPage = 2;

function ArticlesListPage(props) {
    const [articles, setArticles] = useState([]);
    const [activePagination, setActivePagination] = useState(1);
    const [articlesLength, setArticlesLength] = useState(0);

    const activeCategory = useMemo(() => {
        return props.categories.find(cat => {
            return props.match.params.categoryID === cat.eng;
        });
    }, [props.categories, props.match.params.categoryID]);

    useEffect(() => {
        if (activeCategory) {
            articlesAxios.get(`/length/${activeCategory._id}`)
                .then(response => {
                    if (response.status === 200) {
                        setArticlesLength(response.data.articlesLength);
                    } else {
                        throw new Error('Authors Error')
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }, [activeCategory]);

    useEffect(() => {
        if (activeCategory && activePagination) {
            articlesAxios.post(`/preview/${activeCategory._id}`, {
                page: activePagination
            })
            .then(response => {
                if (response.status === 200) {
                    setArticles(response.data);
                } else {
                    throw new Error('Authors Error')
                }
            })
            .catch(err => {
                console.log(err);
            })
        }
    }, [activeCategory, activePagination]);

    const {categoryTitle, BreadcrumbsData} = useMemo(() => {
        if (activeCategory) {
            return {
                categoryTitle: activeCategory[props.languageID],
                BreadcrumbsData: [
                    {
                        text: getI18Text('articlesTitle', props.languageID),
                        url: "#"
                    },
                    {
                        text: activeCategory[props.languageID],
                        url: ""
                    },
                ]
            };
        } else {
            return {
                categoryTitle: '',
                BreadcrumbsData: []
            }
        }
    }, [props.languageID, activeCategory, props.categories]);

    return <>
        <Section breadcrumbsData={BreadcrumbsData} titleText={categoryTitle}>
            <Component
                languageID={props.languageID}
                articleListData={articles}
                categories={props.categories}
                paginationProps={{
                    activePagination: activePagination,
                    dataLength: articlesLength,
                    limitPerPage: limitPerPage,
                    onPaginationChange: setActivePagination
                }}
            />
        </Section>
    </>
}

export default ArticlesListPage;