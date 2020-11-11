import React, {useEffect, useState, useMemo} from 'react'
import {Link} from 'react-router-dom'

import Section from './../../components/Section/Section';
import Recomendations from '../../components/Lists/Recomendations';
import Pagination from '../../components/Pagination/Pagination';

import {recomendationsAxios} from '../../components/axios';
import getI18Text from './../../components/utils/i18n';

import '../../components/CategoryList/CategoryList.scss';

const limitPerPage = 10;

function RecomendationPage(props) {
    const [recomendations, setRecomendations] = useState([]);
    const [activePagination, setActivePagination] = useState(1);
    const [recomendationLength, setRecomendationLength] = useState(0);

    const activeCategory = useMemo(() => {
        if (props.categories.length && props.match.params.categoryEng) {
            return props.categories.find(cat => {
                return cat.eng === props.match.params.categoryEng;
            })
        } else {
            return {};
        }
    }, [props.match.params.categoryEng, props.categories]);

    const {TitleMainText, BreadcrumbsData} = useMemo(() => {
        const title = getI18Text('recomendationBlockTitle', props.languageID);
        return {
            TitleMainText: title,
            BreadcrumbsData: [
                {
                    text: title,
                    url: "#"
                },
                {
                    text: activeCategory[props.languageID],
                    url: ""
                },
            ]
        }
    }, [props.languageID, activeCategory]);

    useEffect(() => {
        if (activeCategory._id) {
            recomendationsAxios.get(`/length/${activeCategory._id}`)
            .then(response => {
                if (response.status === 200) {
                    setRecomendationLength(response.data.recomendationLength);
                } else {
                    throw new Error('Recomendation Error');
                }
            })
            .catch(err => {
                console.log(err);
            })
        }
    }, [activeCategory]);

    useEffect(() => {
        if (activeCategory._id && recomendationLength) {
            recomendationsAxios.post(`/${activeCategory._id}`, {
                page: activePagination
            })
            .then(response => {
                if (response.status === 200) {
                    setRecomendations([{
                        category: activeCategory,
                        recomendations: response.data
                    }]);
                } else {
                    throw new Error('Recomendation Error');
                }
            })
            .catch(err => {
                console.log(err);
            })
        } else if (activeCategory._id) {
            setRecomendations([{
                category: activeCategory,
                recomendations: []
            }]);
        }
    }, [activeCategory, recomendationLength, activePagination]);

    return <Section breadcrumbsData={BreadcrumbsData} titleText={TitleMainText}>
        <CategoryList itemDataArr={props.categories} languageID={props.languageID}/>
        <Recomendations recomendations={recomendations} ulClass={"recomendationListFull"} languageID={props.languageID}/>
        <Pagination
            dataLength={recomendationLength}
            limitPerPage={limitPerPage}
            paginationClassName={"videoListPagination"}
            onPaginationChange={setActivePagination}
         />
    </Section>
}

export default RecomendationPage;

function CategoryList({itemDataArr, languageID}) {
    const itemsArr = itemDataArr.map(item => {
        return <li className={'active'} key={item._id}>
            <Link to={`/recomendations/${item.eng}`}>
                {item[languageID]}
            </Link>
        </li>
    })

    return <ul className="JournalList">
        {itemsArr}
    </ul>
}
