import React from 'react'

import { IoMdClose } from 'react-icons/io'

const Modal = ({closeModal}) => {
  return (
    <div className='w-[100vw] h-[100vh] bg-base-100/50 backdrop-blur-lg fixed top-0 left-0 bottom-0 right-0 z-40'>
        <div className='w-[90vw] md:max-w-xl  lg:max-w-3xl xl:max-w-4xl my-24 m-auto fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center bg-base-100 shadow-xl rounded-lg z-50'>
            <div className='p-8 w-full h-full'>
                <div className='w-full flex justify-end'>
                    <button className='btn rounded-full border-1 border-base-content/50' onClick={closeModal}>
                        <IoMdClose />
                    </button>
                </div>
                <div>
                    <div>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal