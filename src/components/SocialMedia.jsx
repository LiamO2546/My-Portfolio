import React from 'react';
import { BsGithub, BsLinkedin, BsFiles } from 'react-icons/bs';
import Pdf from '../../src/resume.pdf'

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <a href='https://github.com/LiamO2546' target="_blank" rel="noreferrer"><BsGithub /></a>
        </div>
        <div>
        <a href='https://www.linkedin.com/in/liam-oflaherty-7088501b1/' target="_blank" rel="noreferrer"><BsLinkedin /></a>
        </div>
        <div>
        <a href={Pdf} target="_blank" rel="noreferrer"><BsFiles /></a>
        </div>
    </div>
  )
}

export default SocialMedia