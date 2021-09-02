import React from 'react';

import './ImageCard.css';

class ImageCard extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            span: 0
        };

        this.imageRef = React.createRef();
    }

    componentDidMount(){
        this.imageRef.current.addEventListener("load",this.setSpans);
        
    }
    
    setSpans = () => {
        let span = Math.ceil(this.imageRef.current.clientHeight/10);
        this.setState({ span });
    }

    render(){
        const { alt_description, urls } = this.props.image;
        return(
            <div className="image-card" style={{gridRowEnd:`span ${this.state.span}`}}>
                <img ref={this.imageRef} alt={alt_description} src={urls.regular} />
            </div>
        );
    }
}

export default ImageCard;