import React from 'react';

const SingleProduct = (props) => {
    const {idMeal,strMeal,strArea,strInstructions,strMealThumb} = props.meal
    return (
        <div className='container'>
            <h3>{strMeal}</h3>
            <img style={{width: "100%"}} src={strMealThumb}/>
        </div>
    );
};

export default SingleProduct;