import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description,imageUrl,url,author,date, source} = this.props;

    return (
      <div>
        <div className="card my-2" style={{ width: "18rem"}}>
        <span className="position-absolute top-0 badge rounded-pill text-bg-danger">{source}</span>
          <img src={imageUrl} className="card-img-top" alt="..." style={{width:"18rem", height:"13rem"}}/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
            <a href={url} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More..</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
