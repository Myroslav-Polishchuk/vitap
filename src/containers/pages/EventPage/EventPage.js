import React, {useState, useMemo, useEffect} from 'react'

import Section from './../../../components/Section/Section';
import Images from '../../../components/Lists/Images'
import getI18Text from './../../../components/utils/i18n';
import {activitiesAxios} from '../../../components/axios'

function EventPage(props) {
    const [activities, setActivities] = useState([]);

    const {BreadcrumbsData, TitleMainText} = useMemo(() => {
        const titleText = getI18Text("activitiesTitle", props.languageID)
        return {
            BreadcrumbsData: [
                {
                    text: titleText,
                    url: ""
                }
            ],
            TitleMainText: titleText
        };
    }, [props.languageID]);

    useEffect(() => {
        activitiesAxios.get('/')
        .then(response => {
            if (response.status === 200) {
                setActivities(response.data);
            } else {
                throw new Error('Recomendation Error');
            }
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    const activitiesList = activities.map(org => {
        return <li key={org._id}>
            <a href={org.url} target="_blank" rel="noopener noreferrer">
                <img src={org.imgID.imgSrc} alt={org.imgID.imgAlt}/>
            </a>
        </li>
    });

    return <Section breadcrumbsData={BreadcrumbsData} titleText={TitleMainText}>
        <ul className="organizationPreviewList globalWrapper listImg">
            {activitiesList}
        </ul>
    </Section>
}

export default EventPage;