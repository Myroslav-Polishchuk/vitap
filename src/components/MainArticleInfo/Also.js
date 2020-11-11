import React from 'react'
import {Link} from 'react-router-dom'
import getI18Text from '../../components/utils/i18n'

const AlsoTitle = getI18Text('alsoTitle', 'ukr');

const alsoDataArr = [
    {
        text: 'Сучасні погляди на різні фенотипи гастроезофагеальної рефлюксної хвороби',
        url: '#'
    },
    {
        text: 'Клінічний випадок хвороби Вільсона — Коновалова',
        url: '#'
    },
    {
        text: 'Дуоденальна гіпертензія — наріжний камінь гастроентерології',
        url: '#'
    }
];

function Also(props) {
    if (props.alsoArticles.length) {
        return <div className="Also">
            <h6 className="Also__title">
                {AlsoTitle}
            </h6>
            <ul className="Also__list">
                {props.alsoArticles.map((article) => {
                    return <li key={article._id}>
                        <Link to={`/article/${article._id}`}>{article.main_title}</Link>
                    </li>
                })}
            </ul>
        </div>
    } else {
        return '';
    }
}

export default Also;