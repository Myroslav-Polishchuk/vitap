import React, {useEffect, useState, useMemo} from 'react'

import Authors from '../../components/Authors/Authors';
import Section from '../../components/Section/Section';

import {authorsAxios} from '../../components/axios'
import getI18Text from '../../components/utils/i18n'

function AuthorsPage(props) {
    const [authors, setAuthors] = useState([]);
    const [activeLetter, setActiveLetter] = useState('');

    useEffect(() => {
        authorsAxios.get(`/${activeLetter}`)
            .then(response => {
                if (response.status === 200) {
                    setAuthors(response.data);
                } else {
                    throw new Error('Authors Error')
                }
            })
            .catch(err => {
                console.log(err);
            })
    }, [activeLetter])

    const {TitleMainText, BreadcrumbsData} = useMemo(() => {
        return {
            BreadcrumbsData: [
                {
                    text: getI18Text("authorsMainTitle", props.languageID),
                    url: ''
                }
            ],
            TitleMainText: getI18Text("authorsMainTitle", props.languageID)
        }
    }, [props.languageID]);

    return <>
        <Section breadcrumbsData={BreadcrumbsData} titleText={TitleMainText}>
            <Authors authors={authors} setLetter={setActiveLetter}/>
        </Section>
    </>

}

export default AuthorsPage;