import React from 'react';

const Cards = ({name, image, description}) => {
    return(
        <div className="cards">
            <div className="image--background" style={{backgroundImage: `url(${image})`}}></div>
            <span className="text--lead">
                {name}
            </span><br />
            <span class="text--body">
                {description}
            </span>
        </div>       
    )
}

export default Cards;