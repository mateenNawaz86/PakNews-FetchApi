import React, { useState, useEffect } from "react";
import NewsItem from "../NewsItem/NewsItem";
import Spinner from "../Spinner/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const NewsPage = (props) => {
  let articles = [];

  const [enteredNews, setEnteredNews] = useState(articles);
  let [totalRes, setTotalRes] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e6146df6a08249b196a409b6d30e70aa&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      setEnteredNews((articles = parsedData.articles));
      setTotalRes((totalRes = parsedData.totalRes));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchMoreData = async () => {
    setPage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e6146df6a08249b196a409b6d30e70aa&page=${page}&pageSize=${props.pageSize}`;

    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      setEnteredNews(enteredNews.concat(parsedData.articles));
      setTotalRes((totalRes = parsedData.totalRes));
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
      <InfiniteScroll
        dataLength={enteredNews.length}
        next={fetchMoreData}
        hasMore={enteredNews.length !== totalRes}
        loader={<Spinner />}
      >
        <div className="container my-4">
          <div className="row">
            {enteredNews.map((items, index) => {
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
      </InfiniteScroll>
    </>
  );
};

export default NewsPage;
