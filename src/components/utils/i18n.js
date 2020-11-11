const text = {
    ukr: {
        alsoTitle: 'Також по спеціальності',
        goToStartPage: "Повернутися на початок сторінки",
        Section: "Гастроентерологія",
        ReferenceTitleName: "Література",
        Resume: "Резюме",
        Keywords: "Ключові слова",
        newsTitle: 'Новини',
        MagazinesTitle: 'Журнали',
        AuthorsLinkText: 'Автори >>',
        articlesTitle: "Науково-практичні статті, лекції, огляди, інформація",
        articlesSpecialion: 'Більше спеціальностей >>',
        recomendationViewmore: 'Більше спеціальностей >>',
        recomendationBlockTitle: "КЛІНІЧНІ НАСТАНОВИ, ПРОТОКОЛИ, РЕКОМЕНДАЦІЇ",
        activitiesTitle: "НАУКОВІ ЗАХОДИ",
        searchPlaceHolderText: "Пошук",
        videoListTitle: "Відео",
        videoPageReturn: "Повернутися до відео",
        authorsMainTitle: "Автори",
        justAuthor: "Автор",
        paginationPrevLabel: "Назад",
        paginationNextLabel: "Вперед",
        stateCategoriesTitle: 'Статті по спеціальності',
        videoPreviewTitle: 'Відео',
        organizationPreviewTitle: 'Професійні медичні асоціації',
        viewMoreVideos: "Більше відео >>",
        datePublic: 'Дата публікації',
        anchorNewsLinkText: 'Повернутися до новин',
        mainNewsTitle: 'Актуальна новина',
        activitiesPreviewText: 'Більше заходів >>',
        organizationPreviewText: 'Більше організацій >>'
    },
    rus: {
        alsoTitle:'Также по специальности',
        goToStartPage:'Вернутса на начало страници',
        Section:'Гастроентерология',
        ReferenceTitleName:'Литература',
        Resume:'Резюме',
        Keywords:'Ключевие слова',
        newsTitle: 'Новости',
        MagazinesTitle: 'Журнали',
        AuthorsLinkText: 'Автори >>',
        articlesTitle: "научно практические статьи, лекции, информация",
        articlesSpecialion: 'Больше специальностей >>',
        recomendationViewmore: 'Больше специальностей >>',
        recomendationBlockTitle: "КЛИНИЧЕСКИЕ НАСТАНОВИ, ПРОТОКОЛИ, РЕКОМЕНДАЦИИ",
        activitiesTitle: "НАУЧНИЕ МЕРОПРИЯТИЯ",
        searchPlaceHolderText: "Поиск",
        videoListTitle: "Видео",
        videoPageReturn: "Вернутса к видео",
        authorsMainTitle: "Авторі",
        justAuthor: "Автор",
        paginationPrevLabel: "Назад",
        paginationNextLabel: "Вперед",
        stateCategoriesTitle: 'Статьи по специальности',
        videoPreviewTitle: 'Видео',
        organizationPreviewTitle: 'Профессиональные медицинские ассоциации',
        viewMoreVideos: "Больше видео >>",
        datePublic: 'Дата публикации',
        anchorNewsLinkText: 'Вернутся к новостям',
        mainNewsTitle: 'Актуальная новость',
        activitiesPreviewText: 'Больше мероприятий >>',
        organizationPreviewText: 'Больше организцый >>'
    }
}

function getI18Text(name, language) {
    if (name && language) {
        return text[language][name];
    } else {
        return '';
    }
}

export default getI18Text