import React from 'react'

const BrowserMockup = ( {app} ) => {

  return (
    <div className="mockup-window mb-8 border border-primary/20 bg-base-300/50 backdrop-blur-md relative z-40">
        <div className="flex justify-center p-8 bg-base-200/75 backdrop-blur-md">
            {app}
        </div>
    </div>
  )
}

export default BrowserMockup