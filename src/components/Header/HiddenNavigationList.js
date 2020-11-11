import React from 'react';

import Links from '../Lists/Links';

const rightDataFirst = [{text: "Новини"}, {text: "Лікарю-практику"}, {text: "Автори"}];
const rightDataSecond = [{text: "Про компанію"}, {text: "Проекти"}, {text: "Послуги"}, {text: "Контакти"}];

function HiddenNavigationList({dataLinks}) {
    const NavigationTitle = <>
        <div className={"hiddenNavigationTitle"}>
            <p className={"hiddenNavigationTitle__text"}>
                {"Спеціальності"}
            </p>
        </div>
    </>;
    
    const NavigationTitleRightSecond = <>
        <div className={"hiddenNavigationTitleRightSecond"}>
            <p className={"hiddenNavigationTitleRightSecond__text"}>
                {"ВІТ-А-ПОЛ"}
            </p>
        </div>
    </>;

	return <>
		<div className="hiddenNavigationMenu">
			<div className="hiddenNavigationMenuLeft">
				{NavigationTitle}
                <Links dataLinks={dataLinks} ulClass='hiddenNavigationListLeft'/>
			</div>
			<div className="hiddenNavigationMenuRight">
                <Links dataLinks={rightDataFirst} ulClass='hiddenNavigationListRightFirst'/>
				<div>
					{NavigationTitleRightSecond}
					<Links dataLinks={rightDataSecond} ulClass='hiddenNavigationListRightSecond'/>
				</div>
			</div>
		</div>
	</>
}

export default HiddenNavigationList;