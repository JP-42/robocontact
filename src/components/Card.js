import React from 'react';

const Card = ({ name, email, id }) => { // accepts params that are destructered from props
    return ( 
        <div className='tc bg-light-green dib br3 ma2 grow bw2 shadow-5'>
            <img alt='PhotoPortrait' src = {`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2> 
                <p>{email}</p> 
            </div> 
        </div>
    )
}

export default Card;