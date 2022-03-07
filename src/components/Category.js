import React, { useEffect, useState } from 'react';
import Cards from './cards/Cards';
import Data from './assets/json/data.json';
import Pagination from './Pagination';


const Category = ({ category }) => {

    const [selectedLanguge, setSelectedLanguge] = useState('ru');
    const [images, setImages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [imagesPerPage, setImagesPerPage] = useState(9);

    console.log(typeof selectedLanguge);

    console.log(Data.images);
    useEffect(() => {
        console.log(category);
        console.log(Data.images);
        if (Data.images[category][selectedLanguge]) {
            setImages(Data.images[category][selectedLanguge]);
        }
        console.log(Data.images.glasses[{ selectedLanguge }]);
    }, [selectedLanguge]);

    //Get current posts    
    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

    console.log(currentImages);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    return (
        <div className="container">

            <div className="row rows-cols-auto"><Cards images={currentImages} /></div>
            <Pagination imagesPerPage={imagesPerPage} totalImages={images.length} paginate={paginate} currentPage={currentPage} />
        </div>
    )
};

export default Category;

