import React, {useEffect, useState, useMemo} from 'react'

import Component from '../../../components/News/News'

import {newsAxios} from '../../../components/axios'
import getI18Text from '../../../components/utils/i18n'

import './NewsPage.scss'

const newsLimitPerPage = 2;

function NewsPage(props) {
    const [news, setNews] = useState([]);
    const [activePagination, setActivePagination] = useState(1);
    const [newsLength, setNewsLength] = useState(0);

    const {newsTitle, BreadcrumbsData} = useMemo(() => {
        return {
            newsTitle: getI18Text("newsTitle", props.languageID),
            BreadcrumbsData: [{
                text: getI18Text('newsTitle', props.languageID),
                url: ''
            }]
        } 
    }, [props.languageID]);

    useEffect(() => {
        newsAxios.get('/length')
        .then(response => {
            if (response.status === 200) {
                setNewsLength(response.data.newsLength);
            } else {
                throw new Error('Recomendation Error');
            }
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    useEffect(() => {
        if (newsLength) {
            newsAxios.post('/', {
                page: activePagination
            })
            .then(response => {
                if (response.status === 200) {
                    setNews(response.data);
                } else {
                    throw new Error('Recomendation Error');
                }
            })
            .catch(err => {
                console.log(err);
            })
        }
    }, [newsLength, activePagination]);

    return <Component
        news={news}
        breadcrumbsData={BreadcrumbsData}
        titleText={newsTitle}
        paginationOptions={{
            dataLength: newsLength,
            limitPerPage: newsLimitPerPage,
            containerClassName: "videoListPagination",
            onPaginationChange: setActivePagination
        }}
    />
}

export default NewsPage;