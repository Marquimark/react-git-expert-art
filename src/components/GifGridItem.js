
import React from 'react'

export const GifGridItem = ({ title, url} ) => {

    // console.log({ title, url });

    return (
        <div className="card animate__animated animte_fadeIn">
            <img src={ url } alt={ title}></img>
            <p> { title} </p>
        </div>
    )
}


