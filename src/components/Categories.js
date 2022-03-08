import React, { useEffect, useState } from 'react';
import Cards from './cards/Cards';
import Data from '../assets/json/data.json'; 


const categories = () => {
    console.log(Data);
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        console.log(category);
        console.log(Data.images);
        if (Data.images) {
            setCategories(Data.images);
        }
        console.log(Data.images.glasses[{ selectedLanguge }]);
    }, [selectedLanguge]);

    //Get current posts    
    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

    console.log(currentImages);

    
    return (
        <div className="container">
            <div className="row rows-cols-auto">
                <Cards images={currentImages} />
            </div>
        </div>
    )
};

export default categories;

