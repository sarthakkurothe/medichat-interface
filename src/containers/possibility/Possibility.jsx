import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possi.png'

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="loading img" />
      </div>
      <div className="gpt3__possibility-content">
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p> Introducing MediChat, a cutting-edge platform that harnesses the power of artificial intelligence to provide a revolutionary approach to healthcare interactions.</p>

      </div>

    </div>
  )
}

export default Possibility