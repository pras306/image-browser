import React from 'react';

import './ImageBrowser.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import ImageList from '../../components/ImageList/ImageList';
import { UNSPLASH_API } from '../../apis/axios';
import requests from '../../apis/requests';

class ImageBrowser extends React.Component {

    state = {
        images: []
    }
    
    onSearchSubmit = async (term) => {        
        let response = await UNSPLASH_API.get(requests.getImages,{
            params: {
                query: term,
                per_page: 30
            }
        });
            
        this.setState({ images: response.data.results });
    }

    render() {
        return(
            <div className="pics">
                <SearchBar label={"Image Search"} onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images}/>
            </div>
        );

    }
}

export default ImageBrowser;