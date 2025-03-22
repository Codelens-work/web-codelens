import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./breadcrumbs.css";

const Breadcrumbs = ({ currentService }) => {
  const { t } = useTranslation();
  const navigate = useNavigate(); 

  const handleHomeClick = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <nav className="breadcrumbs">
      <ul>
        <li className="custom-color">
          <a href="/" onClick={handleHomeClick}>{t("breadcrumbs.home")}</a> {/* Evita recarga */}
        </li>
        <li className="custom-color">{t("breadcrumbs.servicios")}</li> 

        {currentService && (
          <li>
            <span className="service-custom">
              {t(`breadcrumbs.${currentService}`, currentService)}
            </span>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;