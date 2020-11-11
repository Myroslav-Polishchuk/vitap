import React, {useState, useEffect} from 'react'

import Component from '../../../components/OrganizationPage/OrganizationPage'
import {organizationsAxios} from '../../../components/axios';

const BreadcrumbsData = [
    {
        text: "Професійні медичні організації",
        url: "#"
    }
];

const titleData = {
    languageProperty: 'organizationPreviewTitle',
    languageName: 'ukr'
}

function OrganizationPage() {
    const [organizations, setOrganizations] = useState([]);

    useEffect(() => {
        organizationsAxios.get('/preview')
        .then(response => {
            if (response.status === 200) {
                setOrganizations(response.data);
            } else {
                throw new Error('Recomendation Error');
            }
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    if (organizations.length) {
        return <Component organizations={organizations} titleData={titleData} breadcrumbsData={BreadcrumbsData}/>
    } else {
        return '';
    }
}

export default OrganizationPage;