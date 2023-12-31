import React, { Component } from 'react';

export class NewsItem extends Component {
render() {
  let { title, description,url,imgurl} = this.props
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={imgurl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={url} className="btn btn-sm">Read More</a>
        </div>
      </div>
    </div>
  );
}
}

export default NewsItem;


