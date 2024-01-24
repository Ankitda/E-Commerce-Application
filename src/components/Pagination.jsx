import React, { useState } from 'react';

const Pagination = () => {

    const [page, setPage] = useState({
        firstPage: 1,
        secondPage: 2,
        thridPage: 3,
        fourthpage: 4,
        fifthPage: 5

    });

    const handlePagination = (value) => {
        if (value === "previous-page" && page.firstPage > 1) {
            setPage((prevPage) => (
                {
                    ...prevPage, firstPage: prevPage.firstPage - 1,
                    secondPage: prevPage.secondPage - 1,
                    thridPage: prevPage.thridPage - 1,
                    fourthpage: prevPage.fourthpage - 1,
                    fifthPage: prevPage.fifthPage - 1
                }
            ))
        }else if(value === "next-page") {
            setPage((prevPage) => (
                {
                    ...prevPage, firstPage: prevPage.firstPage + 1,
                    secondPage: prevPage.secondPage + 1,
                    thridPage: prevPage.thridPage + 1,
                    fourthpage: prevPage.fourthpage + 1,
                    fifthPage: prevPage.fifthPage + 1
                }
            ))
        }
    }

    return (
        <div className="max-w-md mx-auto flex justify-center border-2 border-black rounded-lg mt-4 mb-4 flex-1">
            <div className="flex items-center space-x-2">
                <a href="#" className="flex items-center p-3 text-gray-950 border-r-4 border-gray-500 pr-5" onClick={() => handlePagination("previous-page")}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                </a>

                <a href="#" className="px-4 py-2 text-gray-950 border-r-4 border-gray-500">{page.firstPage}</a>
                <a href="#" className="px-4 py-2 border-r-4 border-gray-500 text-gray-950">{page.secondPage}</a>
                <a href="#" className="px-4 py-2 border-r-4 border-gray-500 text-gray-950">{page.thridPage}</a>
                <a href="#" className="px-4 py-2 border-r-4 border-gray-500 text-gray-950">{page.fourthpage}</a>
                <a href="#" className="px-4 py-2 border-r-4 border-gray-500 text-gray-950">{page.fifthPage}</a>

                <a href="#" className="flex items-center p-3 text-gray-950 pl-3" onClick={() => handlePagination("next-page")}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default Pagination;
