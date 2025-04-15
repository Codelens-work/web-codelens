import React, { useContext } from "react";
import "./blogCard.css";
import BlogCard from "./BlogCard";
import { BlogContext } from "../../context/BlogContext";


const LastArticles = () => {
  const cards = [
    {
      title: "Titulo del articulo",
      description:
        "El posicionamiento con ayuda del SEO en Montreal es una de las estrategias más importantes para cualquier negocio.",
      date: "15 de enero de 2025",
      url: "/blog/sitio-web-esencial-negocio",
      img: "card-img",
    },
    {
      title: "Titulo del articulo",
      date: "01 de enero de 2025",
      url: "/",
      img: "card-img",
    },
    {
      title: "Titulo del articulo",
      date: "02 de enero de 2025",
      url: "/",
      img: "card-img",
    },
    {
      title: "Titulo del articulo",
      date: "03 de enero de 2025",
      url: "/",
      img: "card-img",
    },
    {
      title: "Titulo del articulo",
      date: "04 de enero de 2025",
      url: "/",
      img: "card-img",
    },
    {
      title: "Titulo del articulo",
      date: "05 de enero de 2025",
      url: "/",
      img: "card-img",
    },
    {
      title: "Titulo del articulo",
      date: "06 de enero de 2025",
      url: "/",
      img: "card-img",
    },
    {
      title: "Titulo del articulo",
      date: "07 de enero de 2025",
      url: "/",
      img: "card-img",
    },
    {
      title: "Titulo del articulo",
      date: "08 de enero de 2025",
      url: "/",
      img: "card-img",
    },
    {
      title: "Titulo del articulo",
      date: "09 de enero de 2025",
      url: "/",
      img: "card-img",
    },
    {
      title: "Titulo del articulo",
      date: "10 de enero de 2025",
      url: "/",
      img: "card-img",
    },
    {
      title: "Titulo del articulo",
      date: "11 de enero de 2025",
      url: "/",
      img: "card-img",
    },
    {
      title: "Titulo del articulo",
      date: "12 de enero de 2025",
      url: "/",
      img: "card-img",
    },
    {
      title: "Titulo del articulo",
      date: "13 de enero de 2025",
      url: "/",
      img: "card-img",
    },
    {
      title: "Titulo del articulo",
      date: "14 de enero de 2025",
      url: "/",
      img: "card-img",
    },
    {
      title: "Titulo del articulo",
      date: "11 de enero de 2024",
      url: "/",
      img: "card-img",
    },
    {
      title: "Titulo del articulo",
      date: "12 de diciembre de 2024",
      url: "/",
      img: "card-img",
    },
  ];

  const { getArticlesListData, getArticleBySlug, sortArticlesByDate} = useContext(BlogContext)

  const contextCards = getArticlesListData("es")
  
  const sorted = sortArticlesByDate(contextCards, true)


  const parseDate = (dateString) => {
    const [day, month, year] = dateString.split(" de ");
    const months = {
      enero: 1,
      febrero: 2,
      marzo: 3,
      abril: 4,
      mayo: 5,
      junio: 6,
      julio: 7,
      agosto: 8,
      septiembre: 9,
      octubre: 10,
      noviembre: 11,
      diciembre: 12,
    };
    return new Date(`${year}-${months[month]}-${day}`);
  };

  const sortedCards = [...cards].sort(
    (a, b) => parseDate(b.date) - parseDate(a.date)
  );

  const largeCard = sortedCards[0];

  const mediumCards = sortedCards.slice(1, 10);

  const remainingCards = sortedCards.slice(11);

  return (
    <div className="main-card-container">
      <div className="title-articles">
        <h1>Últimos artículos</h1>
      </div>
      <div className="large-card-container">
        <BlogCard
          title={largeCard.title}
          description={largeCard.description}
          date={largeCard.date}
          img={largeCard.img}
          url={largeCard.url}
          isLarge={true}
        />
      </div>
      <div className="medium-card-container">
        {mediumCards.map((mediumCard, i) => (
          <BlogCard
            key={i}
            title={mediumCard.title}
            date={mediumCard.date}
            img={mediumCard.img}
            url={mediumCard.url}
            isLarge={false}
          />
        ))}
      </div>
    </div>
  );
};

export default LastArticles;
