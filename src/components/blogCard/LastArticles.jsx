import React, { useContext } from "react";
import "./blogCard.css";
import BlogCard from "./BlogCard";
import { BlogContext } from "../../context/BlogContext";


const LastArticles = ({lang}) => {
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

  const contextCards = getArticlesListData()
  
  const sortedCards = sortArticlesByDate(contextCards, true)


  const parseDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("es-AR", { year:"numeric", month:"long", day:"numeric"} )
  };

console.log(sortedCards)
  const largeCard = sortedCards[0];

  const mediumCards = sortedCards.slice(1, sortedCards.length);

  return (
    <div className="main-card-container">
      <div className="title-articles">
        <h1>Últimos artículos</h1>
      </div>
      <div className="large-card-container">
        <BlogCard
          title={largeCard.h1[lang]}
          description={largeCard.metadescription[lang]}
          date={parseDate(largeCard.createdDate)}
          img={largeCard.imgUrl}
          url={largeCard.slug[lang]}
          isLarge={true}
        />
      </div>
      <div className="medium-card-container">
        {mediumCards.map((mediumCard, i) => (
          <BlogCard
            key={i}
            title={mediumCard.h1[lang]}
            date={parseDate(mediumCard.createdDate)}
            img={mediumCard.imgUrl}
            url={mediumCard.slug[lang]}
            isLarge={false}
          />
        ))}
      </div>
    </div>
  );
};

export default LastArticles;
