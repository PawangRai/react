import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Layout from './Layout'
import { Home, About, Header, Footer, Contact, User, Github } from './components'
import "./index.css"
import { githubInfoLoader } from './components/Github/Github'

// In order to create the router, we need to create it from the method, createBrowserRouter().


// Creating routes like shown below can be hard to understand and hinders code readability, a more polished method is shown below.
// const router = createBrowserRouter([ 
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]

//   }
// ])

// This is a much more readable format.
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />}/>
      <Route path="about" element={<About />}/>
      <Route path="contact" element={<Contact />}/>
      {/* We can pass parameters using a URL shown below, first create route to which you want to pass arguments, remember the name, here it is userid, with this name you are going to be referencing these parameters in the component where you want to use them. */}
      <Route path="user/:userid" element={<User />}/> 

      {/* What we can do is directly call the api in the loader instead of redirecting to the component and then running the api call. We can define the api call in our component and then call it using a hook inside the loader.x  */}
      <Route 
      loader={githubInfoLoader}
      path="github"
      element={<Github />}
      /> 
    </Route>
  )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* This ReactProvider component takes a prop named router. We can create this router in two ways */}
    <RouterProvider router={router} /> 
  </StrictMode>,
)
