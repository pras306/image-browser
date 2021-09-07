import React from 'react';

import './ImageBrowser.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import ImageList from '../../components/ImageList/ImageList';
import { PROXY_UNSPLASH_API } from '../../apis/requests';

class ImageBrowser extends React.Component {

    state = {
        images: []
    }
    
    onSearchSubmit = async (term) => {        
        let response = await PROXY_UNSPLASH_API.get(term);
        
        this.setState({ images: response.data });
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