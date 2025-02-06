import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';

function RatingComponent () {
    const [rating, setRating] = useState(5);

    const ratingChanged = (newRating) => {
      setRating(newRating);
      console.log("New rating:", newRating);
    };
    return (
        <div>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={30}
            activeColor="#fca105"
            color={'#fca105'}
          />
        </div>
      );
}

export default RatingComponent;