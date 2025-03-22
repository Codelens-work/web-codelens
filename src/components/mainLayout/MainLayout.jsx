import {Suspense} from 'react';
import Footer from '../footer/Footer';
import NavBar from '../navBar/NavBar';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Spinner } from 'react-bootstrap';
import './mainLayout.css';
const MainLayout = () => {

  const { t } = useTranslation()

  const titles = t("titles", { returnObjects: true })
  const footerSection = t('footer-section', { returnObjects: true })

  return (
    <div className='main-layout'>
      <NavBar
        footerLists={footerSection.lists}
        titles={titles}
      />
      <div className="main-content">
        <Suspense fallback={<Spinner animation='border' role='status'/>}>
          <Outlet />
        </Suspense>
      </div>
      <Footer footerTexts={footerSection} />
    </div>
  )
}

export default MainLayout