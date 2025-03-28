import React from 'react'
import { useParams } from 'react-router-dom' // We have to use this to receive parameters passed through the URL.

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-600 text-white ml-6 mr-6 text-3xl p-3 text-center'>
      User: {userid}
    </div>
  )
}

export default User
