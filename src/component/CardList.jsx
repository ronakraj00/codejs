import React, { useState } from 'react'
import PreviewCard from './previewCard.jsx';
import place from "../../place_with_about.js";

const CardList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 18;

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = place.slice(indexOfFirstCard, indexOfLastCard);

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };


    return (
        <div>
            <div className="main-content">
                {currentCards.map((place) => (
                    <PreviewCard
                        key={place.about + place.name}
                        img={place.image}
                        name={place.name}
                        rating={5}
                        about={place.about}
                    />
                ))}
            </div>
            <div>
                {place.length > indexOfLastCard ? (
                    <button onClick={nextPage}>Next Page</button>) :
                    (<button onClick={() => setCurrentPage(1)}>Home</button>) 
                }
                
            </div>
        </div>
    )
}

export default CardList