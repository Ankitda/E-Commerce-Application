import React, { useState, useEffect } from 'react'
import ProductList from './ProductList'
import { FaChevronDown, FaFilter } from "react-icons/fa";
import { RiFilterOffFill } from "react-icons/ri";
import { IoChevronUpSharp } from "react-icons/io5";

const ProductFilter = () => {

    const [filterSection, setfilterSection] = useState({
        categoryFilter: false,
        brandFilter: false,
        isFilterSectionClosed : false
    });

    const [isFilterSectionClosed, setFilterSectionClosed] = useState(false);

    const toggleFilterSection = () => {
        setfilterSection((prevValue) => (
            {...prevValue, isFilterSectionClosed : !prevValue.isFilterSectionClosed}
        ))
    };

    const handleCategoryFilter = () => {
        setfilterSection((prevValue) => (
            { ...prevValue, categoryFilter: !prevValue.categoryFilter }
        ));
    }
    const handleBrandFilter = () => {
        setfilterSection((prevValue) => (
            { ...prevValue, brandFilter: !prevValue.brandFilter }
        ));
    }

    const setInitialFilterState = () => {
        if (window.innerWidth <= 768) {
            setfilterSection((prevValue) => (
                {...prevValue, isFilterSectionClosed : true}
            ))
        } else {
            setfilterSection((prevValue) => (
                {...prevValue, isFilterSectionClosed : false}
            ))
        }
    };

    useEffect(() => {
        window.addEventListener('resize', setInitialFilterState);

        return () => {
            window.removeEventListener('resize', setInitialFilterState);
        };

    }, []);

    useEffect(() => {
        setInitialFilterState();
    }, []);


    return (
        <div className="container mx-auto p-4 flex flex-col md:flex-row">
            {/* (Filter Section) */}
            <button className="md:hidden absolute top-0 right-0 p-4" onClick={toggleFilterSection}>
                {filterSection.isFilterSectionClosed ? <FaFilter /> : <RiFilterOffFill />}
            </button>
            <div className={`w-full md:w-1/4 pr-8 mb-4 md:mb-0 product-filter-section ${filterSection.isFilterSectionClosed ? "product-filter-section-closed" : ""}`}>
                <h1 className="text-3xl font-bold mb-6">Product Filter</h1>

                {/* Category filtering */}
                <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">Categories
                        <span className='filterSection' onClick={handleCategoryFilter}>{filterSection.categoryFilter ? <IoChevronUpSharp /> : <FaChevronDown />}</span>
                    </h2>
                    <div className={`${filterSection.categoryFilter ? "filter-section-open" : "filter-section-close"}`}>
                        <label htmlFor="category1" className="block mb-1">
                            <input type="checkbox" id="category1" className="mr-4" /> Category 1
                        </label>
                        <label htmlFor="category2" className="block mb-1">
                            <input type="checkbox" id="category2" className="mr-4" /> Category 2
                        </label>
                        <label htmlFor="category3" className="block mb-1">
                            <input type="checkbox" id="category3" className="mr-4" /> Category 3
                        </label>
                    </div>
                </div>

                <hr className='mt-4 mb-4' />

                {/* Price Range Filter */}
                <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">Price Range</h2>
                    <div>
                        <input type="range" className="w-full" min="0" max="100" step="1" />
                    </div>
                </div>

                <hr className='mt-4 mb-4' />

                {/* <!-- Brand Filter --> */}
                <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">Brands
                        <span className='filterSection' onClick={handleBrandFilter}>{filterSection.brandFilter ? <IoChevronUpSharp /> : <FaChevronDown />}</span>
                    </h2>
                    <div className={`${filterSection.brandFilter ? "filter-section-open" : "filter-section-close"}`}>
                        <label htmlFor="brand1" className="block mb-1">
                            <input type="checkbox" id="brand1" className="mr-4" /> Brand 1
                        </label>
                        <label htmlFor="brand2" className="block mb-1">
                            <input type="checkbox" id="brand2" className="mr-4" /> Brand 2
                        </label>
                        <label htmlFor="brand3" className="block mb-1">
                            <input type="checkbox" id="brand3" className="mr-4" /> Brand 3
                        </label>
                    </div>
                </div>

                <hr className='mt-4 mb-4' />

                {/* <!-- Additional Filters --> */}
                <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">Additional Filters</h2>
                </div>
            </div>

            {/* (Product Display) */}
            <div className="w-full md:w-3/4">
                <div className="mt-2">
                    <ProductList />
                </div>
            </div>
        </div>
    )
}

export default ProductFilter