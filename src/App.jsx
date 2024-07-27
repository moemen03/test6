import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Layout from "./Components/Layout/Layout";

export default function App() {

  const route = createHashRouter([
      {
        path: "/",
        element: <Layout/>,
        children: [
          {
            path: "/",
            element: <Home/>
          },
          {
            path: "/about",
            element: <About/>,
            children: [
              {
                path: "front",
                element: <h1 className="text-3xl font-bold underline">Front</h1>
              },
              {
                path: "back",
                element: <h1 className="text-3xl font-bold underline">Back</h1>
              }
            ]
          },
          {
            path: "/contact",
            element: <Contact/>
          }
        ]
      },
  ])
  return (



    <>

      <RouterProvider router={route}>
      </RouterProvider>
{/* 
      <Navbar/>
      <About/> */}

    </>

  )
}