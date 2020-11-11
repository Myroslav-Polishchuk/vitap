import React from 'react'
import ReactPaginate from 'react-paginate';

import getI18Text from '../utils/i18n';

import './Pagination.scss'

const prevLabel = getI18Text("paginationPrevLabel", "ukr");
const nextLabel = getI18Text("paginationNextLabel", "ukr");

const defaultPaginationClass = 'paginationList';

function Pagination({
    dataLength,
    limitPerPage,
    paginationClassName,
    onPaginationChange,
    initialPage,
    forcePage
}) {
    if (dataLength && (dataLength / limitPerPage > 1)) {
        return <ReactPaginate
            pageCount={dataLength / limitPerPage}
            pageRangeDisplayed={5}
            marginPagesDisplayed={5}
            previousLabel={prevLabel}
            nextLabel={nextLabel}
            initialPage={initialPage}
            forcePage={forcePage}
            containerClassName={paginationClassName || defaultPaginationClass}
            onPageChange={(page) => {
                onPaginationChange(page.selected + 1);
            }}
        />
    }
    return '';
}

export default Pagination;