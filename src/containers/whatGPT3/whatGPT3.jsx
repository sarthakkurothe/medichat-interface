import React from 'react'
import './whatGPT3.css'
import Feature from '../feature/Feature'
const whatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='gpt3'>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title='Accessible Anytime, Anywhere' text=' Say goodbye to long wait times and scheduling conflicts. MediChat is accessible 24/7 from the comfort of your own home or on-the-go via our user-friendly website'/>
        <Feature  title='Data-Driven Insights' text='Leveraging advanced analytics and machine learning algorithms, MediChat generates valuable insights into patient interactions, preferences, and trends.'/>
        <Feature title='Privacy and Security' text='Our platform adheres to stringent data protection regulations and utilizes robust encryption protocols.'/>
      </div>
    </div>
  )
}

export default whatGPT3
