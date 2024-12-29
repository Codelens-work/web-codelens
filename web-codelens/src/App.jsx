import './App.css'
import NavBar from './components/navBar/NavBar';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from './components/mainLayout/MainLayout';


function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:(
        <MainLayout>
          {/* <Home/> */}
        </MainLayout>
      ),
    },
    {
      path:"/nosotros",
      element:(
        <MainLayout>
          {/* <About/> */}
        </MainLayout>
      ),
    },
    {
      path:"/servicios/app-web",
      element:(
        <MainLayout>
          {/* <Services???AppWeb???/> */}
        </MainLayout>
      ),
    },
    {
      path:"/*", //Con el * cualquier ruta que no sea las indicadas tira notfound
      element:(
        <MainLayout>
          {/* <NotFound/> */}
        </MainLayout>
      ),
    },
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
