import React from 'react'
import news from '../assets/news.jpg'

const NewsItem = ({title, description, src, url}) => {
  return (
  
      <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth: "345px"}}>
  <img src={src?src:news} style={{height:"200px", width:"330px" }} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title.slice(0, 50)}</h5>
    <p className="card-text">{description?description.slice(0,90):" NewsMag is your trusted source for unbiased reporting and in-depth analysis. We cover the latest in politics, business, technology, and culture, bringing you real-time updates and expert commentary. Stay informed and engaged with the stories that matter most."}</p>
    <a href={url}  className="btn btn-primary">Read More</a>
  </div>
</div>

  )
}

export default NewsItem;