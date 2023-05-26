// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, imageUrl, avatarUrl, author, topic, title} = blogData

  return (
    <Link to={`/blogs/${id}`} className="nav-link">
      <li className="nav-list">
        <img src={imageUrl} alt="title" className="blogitem-image" />
        <div className="item-description-container">
          <h1 className="item-topic">{topic}</h1>
          <h1 className="item-title">{title}</h1>
          <div className="author-container">
            <img src={avatarUrl} alt={title} className="avatar-image" />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
