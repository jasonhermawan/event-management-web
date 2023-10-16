import React from 'react'
import './createEvent.css'
import Layout from '../../Layout'
import axios from 'axios'
import {API_URL} from '../../helper'

const CreateEvent = () => {
  return (
    <Layout>
      <div id="create-event" className='create-event-container'>
        <div id="create-event-main">
          <h1>Create your event</h1>
          <input type="text" placeholder='Event Name'/>
          <label htmlFor="format-option">Event Type</label>
          <select name="" id="format-option">
            <option value="">Choose type</option>
            <option value="Festival, Bazaar, Fair">Festival, Bazaar, Fair</option>
            <option value="Concert">Concert</option>
            <option value="Competition / Match">Competition / Match</option>
            <option value="Exhibition">Exhibition</option>
            <option value="Conference">Conference</option>
            <option value="Workshop">Workshop</option>
            <option value="Show">Show</option>
            <option value="Seminar">Seminar</option>
            <option value="Training / Sertification">Training / Sertification</option>
            <option value="Other">Other</option>
          </select>
          <label htmlFor="topic-option">Event Topic</label>
          <select name="" id="topic-option">
            <option value="">Choose topic</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Business">Business</option>
            <option value="Lifestyle / Music">Lifestyle / Music</option>
            <option value="Sports">Sports</option>
            <option value="Investment">Investment</option>
            <option value="Automotive">Automotive</option>
            <option value="Science / Technology">Science / Technology</option>
            <option value="Family">Family</option>
            <option value="E-Sport">E-Sport</option>
            <option value="Education">Education</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
    </Layout>
  )
}

export default CreateEvent