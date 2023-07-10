import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description, imageUrl, url} = this.props;
    return (
        <>
        <div className="card" style={{width:'18rem'}}>
            <img src={imageUrl} className="card-img-top" alt="..." width="286px" height="160.875px"/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a href={url} target = '_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
        </>
    )
  }
}

export default NewsItem
