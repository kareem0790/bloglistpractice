// Write your JS code here
import Loader from 'react-loader-spinner'

import {Component} from 'react'

import './index.css'

class BlogItemDetails extends Component {
  state = {
    blogDetails: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getBlogDetails()
  }

  getBlogDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(` https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      topic: data.topic,
      content: data.content,
    }

    this.setState({blogDetails: updatedData, isLoading: false})
  }

  renderBlogItemDetails = () => {
    const {blogDetails} = this.state
    const {title, content, imageUrl, avatarUrl, author} = blogDetails

    return (
      <ul className="blog-details-list-container">
        <h1 className="blog-details-topic">{title}</h1>
        <div className="author-container">
          <img src={avatarUrl} alt="title" className="author-image" />
          <p className="author-name">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="title-image" />
        <p className="content">{content}</p>
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="blog-item-details-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderBlogItemDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
