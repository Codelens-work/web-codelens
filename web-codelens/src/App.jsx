import './App.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from './components/mainLayout/MainLayout';
import LegalSection from './components/lagalSection/LegalSection';
import Services from './components/services/Services';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:(
        <MainLayout>
          <Services/>
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
          {/* </> */}
        </MainLayout>
      ),
    },
    {
      path:"/servicios/seo",
      element:(
        <MainLayout>
          {/* </> */}
        </MainLayout>
      ),
    },
    {
      path:"/servicios/diseno-web",
      element:(
        <MainLayout>
          {/* </> */}
        </MainLayout>
      ),
    },
    {
      path:"/servicios/desarrollo-web",
      element:(
        <MainLayout>
          {/* </> */}
        </MainLayout>
      ),
    },
    {
      path:"/servicios/desarrollo-api",
      element:(
        <MainLayout>
          {/* </> */}
        </MainLayout>
      ),
    },
    {
      path:"/terminos-y-condiciones",
      element:(
        <MainLayout>
          {/* </> */}
        </MainLayout>
      ),
    },
    {
      path:"/politica-de-privacidad",
      element:(
        <MainLayout>
          {/* </> */}
        </MainLayout>
      ),
    },
    {
      path:"/blog", 
      element:(
        <MainLayout>
          {/* </> */}
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
