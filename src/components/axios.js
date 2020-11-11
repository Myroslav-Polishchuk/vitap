const axios = require('axios');

const host = 'http://localhost:8080'

const mainAxios = axios.create({
    baseURL: `${host}`
});

const authorsAxios = axios.create({
    baseURL: `${host}/authors`
});

const recomendationsAxios = axios.create({
    baseURL: `${host}/recomendations`
});

const categoriesAxios = axios.create({
    baseURL: `${host}/categories`
});

const videoAxios = axios.create({
    baseURL: `${host}/videos`
});

const newsAxios = axios.create({
    baseURL: `${host}/news`
});

const articlesAxios = axios.create({
    baseURL: `${host}/articles`
});

const adminAxios = axios.create({
    baseURL: `${host}/admin`
});

const activitiesAxios = axios.create({
    baseURL: `${host}/events`
});

const organizationsAxios = axios.create({
    baseURL: `${host}/organizations`
});

const recomendationAxios = axios.create({
    baseURL: `${host}/recomendations`
});

const journalAxios = axios.create({
    baseURL: `${host}/external`
})

const imgAxios = axios.create({
    baseURL: `${host}/images`
})
 
export {
    imgAxios,
    journalAxios,
    mainAxios,
    authorsAxios,
    recomendationsAxios,
    recomendationAxios,
    categoriesAxios,
    videoAxios,
    newsAxios,
    articlesAxios,
    adminAxios,
    activitiesAxios,
    organizationsAxios
};

export default {
    journalAxios,
    mainAxios,
    authorsAxios,
    recomendationsAxios,
    recomendationAxios,
    categoriesAxios,
    videoAxios,
    newsAxios,
    articlesAxios,
    adminAxios,
    activitiesAxios,
    organizationsAxios
};