import React from 'react'
import Layout from '../components/layout'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// Add all icons to the library so you can use it in your page
library.add(fas, far, fab)

const IndexPage = () => (
  <Layout>
    <div className="intro">
      <h1><span className="animation animation__fade-in-down">Adam</span><span className="animation animation__fade-in-down animation__delay-2"> Morgan</span></h1>
      <h2><span className="animation animation__fade-in-down animation__delay-4">Front end</span><span className="animation animation__fade-in-down animation__delay-6"> developer</span></h2>
    </div>
    <div className="online-status">Online</div>
    <ul className="meta">
      <li className="meta__location">Mountain Ash, South Wales</li>
    </ul>
    <ul className="icons">
      <li className="icons__twitter">
        <a href="http://www.twitter.com/adamtaffymorgan" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={["fab","twitter"]} />
        </a>
      </li>
      <li className="icons__instagram">
        <FontAwesomeIcon icon={["fab","instagram"]} />
      </li>
      <li className="icons__github">
        <FontAwesomeIcon icon={["fab","github"]} />
      </li>
      <li className="icons__stackoverflow">
        <FontAwesomeIcon icon={["fab","stack-overflow"]} />
      </li>
      <li className="icons__codepen">
        <FontAwesomeIcon icon={["fab","codepen"]} />
      </li>
      <li className="icons__linkedin">
        <FontAwesomeIcon icon={["fab","linkedin"]} />
      </li>
    </ul>
    <p>Need a website built? Get in tough.</p>
    <h2>About me</h2>
    <p>Front end developer. Cardiff City FC. Fortnite. Beer.</p>
  </Layout>
)

export default IndexPage
