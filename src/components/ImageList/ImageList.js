import React from 'react';

import './ImageList.css';
import ImageCard from '../ImageCard/ImageCard';

const ImageList = (props) => {
    return (
        <div className="image-list">
            {props.images.map((img => {
                return <ImageCard key={img.id} image={img} />
            }))}
        </div>
    )
}

export default ImageList;
