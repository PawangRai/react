import React from 'react'
// In the card component, we can either expect a prop and then use prop.propertyname wherever we want to use that property or a better approach is to desctructure the objects directly when you receive and then use it however you like.
function Card({data : {name, description, btnText: text}}) { // You can also specify default values if no properties are passed.
  return (
    <>
     <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
        <img
          src="https://images.pexels.com/photos/31039333/pexels-photo-31039333/free-photo-of-elegant-barcelona-balcony-view-from-apartment.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
            <p className="text-gray-400">
              {description}
            </p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
          >
            {text}
          </button>
        </div>
      </div>
    </>
  )
}

export default Card
