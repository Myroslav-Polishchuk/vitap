import React, {useState, useEffect} from 'react'

import Component from '../../../components/Admin/Admin'
import {adminAxios} from '../../../components/axios' 

function AdminPage() {
    const [tablesConfig, setTablesConfig] = useState([]);
    const [activeTable, setActiveTable] = useState({});
    const [data, setData] = useState([]);
    const [regime, setRegime] = useState('getAll');
    const [currentData, setCurrentData] = useState({});
    const [currentDataID, setCurrentDataID] = useState('');
    const [currentFormData, setCurrentFormData] = useState({});
    const [sendDataConfigMethod, setSendDataConfigMethod] = useState('');

    const formRef = React.createRef(null);

    useEffect(() => {
        if (regime === 'put' && activeTable && activeTable.name && currentDataID) {
            adminAxios.get(`/${activeTable.name}/${currentDataID}`)
            .then(response => {
                if (response.status === 200) {
                    setCurrentData(response.data);
                    setCurrentDataID('');
                } else {
                    setCurrentDataID('');
                    throw new Error('Recomendation Error');
                }
            })
            .catch(err => {
                console.log(err);
            })
            
        }
    }, [regime, currentDataID])

    useEffect(() => {
        if (sendDataConfigMethod && activeTable && activeTable.name) {
            adminAxios({
                method: sendDataConfigMethod,
                url: `/form/${activeTable.name}`,
                data: {
                    formData: getFormData(formRef)
                }
            })
            .then(response => {
                if (response.status === 200) {
                    setSendDataConfigMethod('');
                    setRegime('getAll');
                } else {
                    setSendDataConfigMethod('');
                    setRegime('getAll');
                    throw new Error('Recomendation Error');
                }
            })
            .catch(err => {
                console.log(err);
            })
        }
    }, [sendDataConfigMethod])

    useEffect(() => {
        adminAxios.get('/')
            .then(response => {
                if (response.status === 200) {
                    setTablesConfig(response.data);
                } else {
                    throw new Error('Recomendation Error');
                }
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    useEffect(() => {
        if (activeTable.name && regime === 'getAll') {
            adminAxios.get(`/${activeTable.name}`)
            .then(response => {
                if (response.status === 200) {
                    setData(response.data);
                } else {
                    throw new Error('Recomendation Error');
                }
            })
            .catch(err => {
                console.log(err);
            })

        }
    }, [activeTable, regime]);

    useEffect(() => {
        if (activeTable.name && regime === 'post') {
            adminAxios.get(`/${activeTable.name}`)
            .then(response => {
                if (response.status === 200) {
                    setData(response.data);
                } else {
                    throw new Error('Recomendation Error');
                }
            })
            .catch(err => {
                console.log(err);
            })

        }
    }, [activeTable, regime]);

    useEffect(() => {
        if (activeTable.name) {
            adminAxios.get(`/form/${activeTable.name}`)
            .then(response => {
                if (response.status === 200) {
                    setCurrentFormData(response.data);
                } else {
                    throw new Error('Recomendation Error');
                }
            })
            .catch(err => {
                console.log(err);
            }) 
        }
    }, [activeTable, regime])

    return <Component
        tablesConfig={tablesConfig}
        activeTable={activeTable}
        setActiveTable={setActiveTable}
        tableData={data}
        regime={regime}
        setRegime={setRegime}
        currentFormData={currentFormData}
        formRef={formRef}
        setSendDataConfigMethod={setSendDataConfigMethod}
        currentData={currentData}
        setCurrentDataID={setCurrentDataID}
    />

}

export default AdminPage;

function getFormData(formRef) {
    const formData = {}
    if (formRef) {
        for (let i = 0; i < formRef.current.length; i++) {
            const el = formRef.current[i];
            if (el.name && el.value) {
                formData[el.name] = el.value;
            }
        }
    }
    return formData;
}

