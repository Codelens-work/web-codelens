import './App.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from './components/mainLayout/MainLayout';
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { Blog } from './pages/blog/Blog';
import { WebDevelopment } from './pages/services/webDevelopment/WebDevelopment';


function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:(
        <MainLayout>
          <Home/>
        </MainLayout>
      ),
    },
    {
      path:"/nosotros",
      element:(
        <MainLayout>
          <About />
        </MainLayout>
      ),
    },
    {
      path:"/servicios",
      element:(
        <MainLayout>
          <WebDevelopment />
        </MainLayout>
      ),
    },
    {
      path:"/blog",
      element:(
        <MainLayout>
          <Blog />
        </MainLayout>
      ),
    },
    {
      path:"/terminos",
      element:(
        <MainLayout>
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
