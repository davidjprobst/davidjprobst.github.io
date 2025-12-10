import React, { Component } from "react";
import photoData from "./../data/photos";

class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = { photos: photoData };
  }

  render() {
    return (
      <div className="photo-gallery">
        {this.state.photos.map((photo, index) => (
          <div className="photo-preview" key={index}>
            <img src={photo.image} alt={photo.alt} />
          </div>
        ))}
      </div>
    );
  }
}

export default Photos;
