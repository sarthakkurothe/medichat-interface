import React from 'react'
import './features.css'
import Feature from '../../containers/feature/Feature'

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='casestudies'>
      <div className="gpt3__features-heading">
        <h1 className='gradient__text'>
          The Future is Now and You Just Need To Realize It. 
        </h1>
        <p>
          Step into Future Today & Make it Happen.
        </p>
      </div>
      <div className="gpt3__features-container">
        <Feature title='Enhanced Efficiency and Accessibility' text='With the ability to handle a wide range of inquiries and provide instant responses, MediChat reduces the burden on healthcare facilities and staff, leading to improved efficiency and productivity.'/>
        <Feature title='Personalized Healthcare Conversations' text='With MediChat, patients can engage in personalized conversations with our advanced AI-powered chatbot.'/>
        <Feature title='Empowering Patients and Providers' text='By streamlining communication between patients and healthcare providers, MediChat empowers individuals to take control of their health journey.'/>
      </div>
    </div>
  )
}

export default Features