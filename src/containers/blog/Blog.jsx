import React from 'react'
import Article from '../../components/article/Article'
import blog01 from '../../assets/blog01.png'
import blog02 from '../../assets/blog02.png'
import blog03 from '../../assets/blog03.png'
import blog04 from '../../assets/blog04.png'
import blog05 from '../../assets/blog05.png'
import './blog.css'

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className="gpt3__blog-heading gradient__text">
        <h1>We're Blogging About the latest trends in AI and healthcare !</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgUrls={blog01} date='03 Sep 2022' title='How is AI changing healthcare ?' />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article imgUrls={blog02} date='03 Sep 2022' title='How does AI contribute to early disease detection?' />
          <Article imgUrls={blog03} date='03 Sep 2022' title='Can AI improve surgical precision and outcomes?' />
          <Article imgUrls={blog04} date='03 Sep 2022' title='How is AI being utilized in medical education and training?' />
          <Article imgUrls={blog05} date='03 Sep 2022' title='How is AI revolutionizing the medical field?' />
        </div>
      </div>
    </div>
  )
}

export default Blog
