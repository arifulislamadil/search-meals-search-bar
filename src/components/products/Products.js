import React, { useEffect, useState } from 'react';
import SingleProduct from '../singleProducts/SingleProduct';
import "./products.css"

const Products = () => {

    const [searchText, setSearchText] = useState('')
    const [meals, setMeals] = useState([]);

    const handleSearchField = (e) => {
        const searchField = e.target.value;
        setSearchText(searchField)
    }
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchText])

    return (
        <div>
            <div>
                <h3>Search Your Food</h3>
                <input onChange={handleSearchField} style={{ padding: "5px 10px" }} type="text" placeholder="search your food" />
            </div>
            <div className='meals'>
               {
                meals.map(meal=><SingleProduct meal={meal}></SingleProduct>)
               }
            </div>
        </div>
    );
};

export default Products;