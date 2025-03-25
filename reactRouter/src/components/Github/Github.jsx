import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData] = useState([])
    // useEffect(() => { // Called when the component is loaded
    // fetch("https://api.github.com/users/pawangrai")
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data)
    //     setData(data)
    // })
    // }, [])

    const data = useLoaderData()
    
  return (
    <div  className='text-center m-4 flex flex-wrap gap-7 items-center bg-gray-600 text-white p-4 text-3xl'>
      <img className='rounded-full' src={data.avatar_url} alt="Github profile" width={300} />
      Github followers: {data.followers}
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/pawangrai")
    return response.json()
}
