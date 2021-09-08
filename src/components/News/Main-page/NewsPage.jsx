import React, { useState, useEffect } from "react";
import NewsItem from "../NewsItem/NewsItem";
import Spinner from "../Spinner/Spinner";

const NewsPage = (props) => {
  let articles = [];

  const [enterdNews, setEnterdNews] = useState(articles);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e6146df6a08249b196a409b6d30e70aa&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      setEnterdNews((articles = parsedData.articles));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const nextPageHandler = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=e6146df6a08249b196a409b6d30e70aa&page=${
      page + 1
    }&pageSize=${props.pageSize}`;

    setLoading(true);

    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      setEnterdNews((articles = parsedData.articles));
      setPage(page + 1);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const prevPageHandler = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=e6146df6a08249b196a409b6d30e70aa&page=${
      page - 1
    }&pageSize=${props.pageSize}`;

    setLoading(true);

    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      setEnterdNews((articles = parsedData.articles));
      setPage(page - 1);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="text-info text-center main__heading">
        PakNews - Top Headlines
      </h1>
      {loading && <Spinner />}
      <div className="container my-4">
        <div className="row">
          {enterdNews.map((items, index) => {
            return (
              <div className="col-md-4 my-2" key={index}>
                <NewsItem
                  title={items.title}
                  description={items.description}
                  imgUrl={
                    !items.urlToImage
                      ? "https://dailyutahchronicle.com/wp-content/uploads/2021/09/JG_20210829_S1_15.jpg"
                      : items.urlToImage
                  }
                  auther={items.author ? items.author : "Unknown"}
                  date={new Date(items.publishedAt).toLocaleDateString()}
                  newsUrl={items.url}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="container my-4 d-flex justify-content-between">
        <button
          disabled={page <= 1}
          type="button"
          className="btn btn-danger btn-sm"
          onClick={prevPageHandler}
        >
          <i className="fas fa-chevron-left" />
          Previous
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={nextPageHandler}
        >
          Next <i className="fas fa-chevron-right" />
        </button>
      </div>
    </>
  );
};

export default NewsPage;
