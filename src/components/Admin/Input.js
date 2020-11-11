import React, {useState, useEffect} from 'react'

import axioses from '../axios'

const axioeseRef = {
    journal: {
        axios: axioses.journalAxios,
        valueName: 'name'
    },
    author: {
        axios: axioses.authorsAxios,
        valueName: 'name'
    },
    recomendations: axioses.recomendationsAxios,
    recomendation: axioses.recomendationAxios,
    category: {
        axios: axioses.categoriesAxios,
        valueName: 'ukr'
    },
    img: {
        axios: axioses.imgAxios,
        valueName: 'imgAlt'
    },
    video: axioses.videoAxios,
    news: axioses.newsAxios,
    articles: axioses.articlesAxios,
    admin: axioses.adminAxios,
    activities: axioses.activitiesAxios,
    organizations: axioses.organizationsAxio
};

function Input({
    fieldType,
    idName,
    placeholder,
    isIgnore,
    value
}) {
    const [valueState, setValue] = useState(value);
    const [references, setReferences] = useState([]);
    const [valueName, setValueName] = useState('');

    useEffect(() => {setValue(value)}, [value]);

    useEffect(() => {
        if (typeof fieldType === 'object' && fieldType.subType === 'reference') {
            const axiosRef = axioeseRef[fieldType.table];

            if (axiosRef) {
                axiosRef.axios.get('/')
                .then(response => {
                    if (response.status === 200) {
                        setValueName(axiosRef.valueName)
                        setReferences(response.data);
                    } else {
                        throw new Error('Recomendation Error');
                    }
                })
                .catch(err => {
                    console.log(err);
                })
            }
        }
    }, [])

    if (typeof fieldType !== 'object') {
        switch(fieldType) {
            case 'text': 
                return <label>
                    {placeholder}
                    <input
                        type="text"
                        name={idName}
                        placeholder={placeholder}
                        disabled={isIgnore}
                        value={valueState}
                        onChange={(e) => {setValue(e.target.value)}}
                    />
                </label>
            case 'checkbox':
                return <label>
                    {placeholder}
                    <input
                        type="checkbox"
                        name={idName}
                        disabled={isIgnore}
                        value={valueState}
                        onChange={(e) => {setValue(e.target.value)}}
                    />
                </label>
            case 'textarea':
                return <label>
                    {placeholder}
                    <textarea
                        type="checkbox"
                        name={idName}
                        disabled={isIgnore}
                        value={valueState}
                        onChange={(e) => {setValue(e.target.value)}}
                    />
                </label>
        }
    } else {
        switch(fieldType.subType) {
            case 'reference': 
                return <label>
                    Text: {placeholder || fieldType.placeholder}
                    <select name={idName}>
                        <option value={''}>Default</option>
                        {references.map(ref => {
                            return <option value={ref._id} selected={valueState === ref._id}>{ref[valueName]}</option>
                        })}
                    </select>
                </label>
            case 'referenceArr':
                return <label>
                    {placeholder}
                    {valueState && valueState.map(v => {
                        return <select name={idName}>
                            <option value={''}>Default</option>
                            {references.map(ref => {
                                return <option value={ref._id} selected={v === ref._id}>{ref[valueName]}</option>
                            })}
                        </select>
                    })}
                </label>
            case 'array': 
                return <label>
                    {placeholder}
                    {valueState && valueState.map(v => {
                        return <input
                            type="text"
                            name={idName}
                            placeholder={placeholder}
                            disabled={isIgnore}
                            value={v}
                            onChange={(e) => {setValue(e.target.value)}}
                        />
                    })}
                </label>
        }
    }

    return '';
}

export default Input;