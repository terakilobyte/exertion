import React from 'react'
import './About.scss'

const About = () => {
  return (
    <div className='aboutBackground'>
      <p>
        I'm a passionate and dedicated person who feels there is no insurmountable challenge.
      </p>
      <p>
        I love challenging myself and those around me. I believe we should constantly be learning.
      </p>
      <p>
        <a className='aboutLink' href='https://docs.google.com/document/d/e/2PACX-1vTUJ7ZdKkJkQ4zfZFwsEC33XWbaYqrgu7x3iYt71Q30X7pRn5xbe3xRt1Z-P6u3lfHnXLqrePGxoxJS/pub'>
          Here&nbsp;
        </a>
        is a brief resume.
        <a className='aboutLink' href='mailto:terakilobyte@exertion.io'> &nbsp;Get in touch,</a>
      &nbsp;I'd love to build things for you.</p>
      <p><em><strong>Pssst..</strong></em>&nbsp;Did you like something you saw and want to lift it? The source code for everything on this site can be found
        <a className='aboutLink' href='https://github.com/terakilobyte/exertion'>
          &nbsp;here
        </a>
      </p>
    </div>
  )
}

export default About
