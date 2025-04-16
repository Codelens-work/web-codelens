import React, { useContext } from "react";
import "./blogCard.css";
import BlogCard from "./BlogCard";
import { BlogContext } from "../../context/BlogContext";


const LastArticles = ({h1, lang}) => {
  const { getArticlesListData, sortArticlesByDate} = useContext(BlogContext)

  const parseDate = (dateString, lang) => {
    return new Date(dateString).toLocaleDateString(lang, { year:"numeric", month:"long", day:"numeric"} )
  };

  const contextCards = getArticlesListData()
  const sortedCards = sortArticlesByDate(contextCards, true)

  const largeCard = sortedCards[0];

  const mediumCards = sortedCards.slice(1, sortedCards.length);

  return (
    <div className="main-card-container">
      <div className="title-articles">
        <h1>{h1}</h1>
      </div>
      <div className="large-card-container">
        <BlogCard
          title={largeCard.h1[lang]}
          description={largeCard.metadescription[lang]}
          date={parseDate(largeCard.createdDate, lang)}
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
            date={parseDate(mediumCard.createdDate, lang)}
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
