import React from 'react';
import github_logo from './../img/github_logo.png';
import email_logo from './../img/email_logo.png';
import linkedin_logo from './../img/linkedin_logo.png';
import './../index.css';

export default function About(props) {
  return (
    <div className='container my-3'>
      <h1>I am a CS graduate who is learning React to progress in my career</h1>
      <p>This is small project done in React framework to understand various concepts</p>
      <p>This project is built using the following concepts</p>
      <ul>
        <li>React npm</li>
        <li>React Class based Components</li>
        <li>React Router</li>
        <li>News API</li>
        <li>Features included:
          <ul>
          <li>News Cards with image, some text and Read more button</li>
          <li>Various filters for better user information availability</li>
          <li>Added a spinner when the API is fetching the information</li>
          <li>Added a "No image" when the API doesn't provide the image</li>
          <li>Previous and Next buttons for better user experience</li>
          <li>Disabled previous and next buttons when there is no content to show</li>
        </ul>
        </li>
      </ul>
      <p>Thankyou for using this service!</p>
      <div className='getintouch'>
        <p>Follow me here to see my other projects</p>
        <div className={`contact${props.mode}`}>
        <a href='https://github.com/bharathkumar-18?tab=repositories'><img src={github_logo} alt='Github logo' id='contact-icon'/></a>
        <a href='https://www.linkedin.com/in/bharathkumar18/'><img src={linkedin_logo} alt='Github logo' id='contact-icon'/></a>
        <a href='mailto:bharathtoppobtc@gmail.com'><img src={email_logo} alt='Github logo' id='contact-icon'/></a>
        </div>
      </div>
    </div>
  )
}
