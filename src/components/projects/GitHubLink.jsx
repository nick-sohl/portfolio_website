import React from 'react'

import {AiFillGithub} from 'react-icons/ai'

const GitHubLink = (props) => {

  const link = props.link

  return (
    <div className='fixed bottom-20 left-0 right-0 flex justify-center items-center z-50'>
        <div className='tooltip tooltip-primary' data-tip="GitHub">
            <a href={link} target="_blank">
                <button className="btn bg-base-200/50 backdrop-blur-lg btn-outline border-1 border-base-content/50 aspect-1 text-3xl p-0">
                    <AiFillGithub />
                </button>
            </a>
        </div>
    </div>
  )
}

export default GitHubLink