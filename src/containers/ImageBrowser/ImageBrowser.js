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
        try {
            let response = await PROXY_UNSPLASH_API.get(term);

            if(response.data.length <=0 || response.data.Error ) {
                throw new Error("Search returned no results.");
            }
            
            this.setState({ images: response.data });
        } catch (err) {
            alert(err.message);
        }
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