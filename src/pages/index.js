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
    <div className="home-container">
      <div className="container">
        <div className="home-container__intro">
          <h1><span className="animation animation__fade-in-down">Adam </span><span className="animation animation__fade-in-down animation__delay--0-25">Morgan</span></h1>
          <h2><span className="animation animation__fade-in-down animation__delay--0-5">Front end </span><span className="animation animation__fade-in-down animation__delay--0-75">developer</span></h2>
        </div>
        <p class="contact">Need a website built? Get in touch.</p>
        <ul className="icons-list">
          <li className="icons-list__twitter">
            <a href="http://www.twitter.com/adamtaffymorgan" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={["fab","twitter"]} />
            </a>
          </li>
          <li className="icons-list__instagram">
            <a href="https://www.instagram.com/adamccfc/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={["fab","instagram"]} />
            </a>
          </li>
          <li className="icons-list__github">
            <a href="https://github.com/adamccfc" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={["fab","github"]} />
            </a>
          </li>
          <li className="icons-list__stackoverflow">
            <a href="https://stackoverflow.com/users/3276321/adam-morgan" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={["fab","stack-overflow"]} />
            </a>
          </li>
          <li className="icons-list__codepen">
            <a href="https://codepen.io/AdamCCFC/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={["fab","codepen"]} />
            </a>
          </li>
          <li className="icons-list__linkedin">
            <a href="https://uk.linkedin.com/in/adam-morgan-230a9672" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={["fab","linkedin"]} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default IndexPage
