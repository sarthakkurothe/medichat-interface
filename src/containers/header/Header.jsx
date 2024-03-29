import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Welcome to MediChat, your personalized healthcare companion</h1>
        <p>MediChat revolutionizes the way you interact with healthcare information and assistance, offering a seamless and intuitive chat interface designed to meet your medical needs effectively.</p>

        <div className="gpt3__header-content_input">
          <input type="email" name="" id="" placeholder='Your Email Here' />
          <button type='button'>Get Started</button>
        </div>

        <div className="gpt3__header-content-people">
          <img src={people} alt="loading" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>

      </div>
      <div className='gpt3__header-image'>
        <img src={ai} alt="loading img" />
      </div>
    </div>
  )
}

export default Header