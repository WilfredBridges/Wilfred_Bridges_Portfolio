import React from 'react';
import './Socials.css';
import { ReactComponent as GithubLogo } from '../../media/images/github-logo.svg';
import { ReactComponent as LinkedinLogo } from '../../media/images/linkedin-logo.svg';
import { ReactComponent as PdfLogo } from '../../media/images/pdf-logo.svg';

const Socials = () => {
  return (
    <div className="socials">
      <a href="https://github.com/WilfredBridges">
        <div className="social-icon">
          <GithubLogo className="social-svg" fill="#ffffff"/>
          <span className="social-text">GitHub</span>
        </div>
      </a>
      <a href="https://www.linkedin.com/in/wilfred-bridges-8301a598/">
        <div className="social-icon">
          <LinkedinLogo className="social-svg"/>
          <span className="social-text">LinkedIn</span>
        </div>
      </a>
      <a href="/path/to/resume.pdf" download>
        <div className="social-icon">
          <PdfLogo className="social-svg"/>
          <span className="social-text">Resume</span>
        </div>
      </a>
    </div>
  );
};

export default Socials;
