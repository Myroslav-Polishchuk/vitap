import React from 'react'

import Section from '../../components/Section/Section';

function OrganizationPage(props) {
    const OrganizationListItems = props.organizations.map(org => {
        return <li key={org._id}>
            <a href={org.url} target="_blank" rel="noopener noreferrer">
                <img src={org.imgID.imgSrc} alt={org.imgID.imgAlt}/>
            </a>
        </li>
    })

    return <Section breadcrumbsData={props.breadcrumbsData} titleText={props.TitleMainText}>
        <ul className="organizationPreviewList globalWrapper listImg">
            {OrganizationListItems}
        </ul>
    </Section>
}

export default OrganizationPage