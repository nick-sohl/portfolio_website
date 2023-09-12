import React from 'react'

import { useState } from 'react'

import User from './User'

const App = () => {

    const [users, setUsers] = useState([])

    const getUsers = async () => {
        try {
            const resp = await fetch('https://randomuser.me/api/?results=5')
            const data = await resp.json()

            const userArray = data.results.map(result => ({
                image: result.picture.thumbnail,
                img_alt: result.name,
                firstname: result.name.first,
                lastname: result.name.last,
                country: result.location.country,
                email: result.email,
                phone: result.phone,
              }));
        
              setUsers(userArray);

        } catch(error) {
            'The users could not be loaded.'
        }
    }


  return (
    <div className='flex flex-col gap-4 w-full'>
        <button className='btn btn-primary' onClick={getUsers}>Load Users</button>
        <div>
            <User
                users={users}
            />
        </div>
    </div>
  )
}

export default App