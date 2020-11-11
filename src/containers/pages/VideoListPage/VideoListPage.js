import React, {useEffect, useState, useMemo} from 'react'
import {Link} from 'react-router-dom'

import Section from '../../../components/Section/Section';
import Videos from '../../../components/Lists/Videos'
import Pagination from './../../../components/Pagination/Pagination';

import getI18Text from '../../../components/utils/i18n'
import {videoAxios} from '../../../components/axios'

import './VideoListPage.scss';
import '../../../components/CategoryList/CategoryList.scss'

const videoLimitPerPage = 2;

const all = {
    _id: '',
    eng: 'all',
    ukr: 'Всі',
    rus: 'Все'
}

function VideoListPage(props) {
    const [videos, setVideos] = useState([]);
    const [activePagination, setActivePagination] = useState(1);
    const [videosLength, setVideoLength] = useState(0); 
    
    const videosCategories = useMemo(() => [...props.categories, all], [props.categories]);

    const activeCategory = useMemo(() => {
        if (videosCategories.length) {
            return videosCategories.find(cat => {
                return cat.eng === props.match.params.categoryEng || (!props.match.params.categoryEng && cat.eng === 'all');
            })
        } else {
            return '';
        }
    }, [props.match.params.categoryEng, videosCategories]);

    const {videoListTitle, BreadcrumbsData} = useMemo(() => {
        return {
            videoListTitle: getI18Text("videoListTitle", props.languageID),
            BreadcrumbsData: [{
                text: getI18Text("videoListTitle", props.languageID),
                url: ""
            }]
        }
    }, [props.languageID]);

    useEffect(() => {
        if (activeCategory) {
            videoAxios.get(`/length/${activeCategory._id}`)
            .then(response => {
                if (response.status === 200) {
                    setVideoLength(response.data.videosLength);
                } else {
                    throw new Error('Recomendation Error');
                }
            })
            .catch(err => {
                console.log(err);
            })
        }
    }, [activeCategory]);

    useEffect(
        () => {
            const url = activeCategory && activeCategory._id ? activeCategory._id : '';
            videoAxios.post(`/${url}`, {
                page: activePagination
            })
            .then(response => {
                if (response.status === 200) {
                    setVideos(response.data);
                } else {
                    throw new Error('Recomendation Error');
                }
            })
            .catch(err => {
                console.log(err);
            })
            
        },
        [activeCategory, activePagination]
    );

    return <Section breadcrumbsData={BreadcrumbsData} titleText={videoListTitle}>
        <CategoryList itemDataArr={videosCategories} languageID={props.languageID}/>
        <Videos dataVideos={videos} ulClass={"videoCategoriesList"} languageID={props.languageID}/>
        <Pagination
            dataLength={videosLength}
            limitPerPage={videoLimitPerPage}
            paginationClassName={"videoListPagination"}
            onPaginationChange={setActivePagination}
        />
    </Section>
}

function CategoryList({itemDataArr, languageID}) {
    const itemsArr = itemDataArr.map(item => {
        return <li className={'active'} key={item._id}>
            <Link to={`/videosList/${item.eng}`}>
                {item[languageID]}
            </Link>
        </li>
    })

    return <ul className="JournalList">
        {itemsArr}
    </ul>
}

export default VideoListPage;
