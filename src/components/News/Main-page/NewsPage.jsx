import React, { useState, useEffect } from "react";
import NewsItem from "../NewsItem/NewsItem";
import Spinner from "../Spinner/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const NewsPage = (props) => {
  
  const [articles, setArticles] = useState([]);
  let [totalRes, setTotalRes] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    props.changeProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8636ac2a9dee4fb5be8f7cebd4ad8f99&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    try {
      let data = await fetch(url);
      props.changeProgress(30);
      let parsedData = await data.json();
      props.changeProgress(70);
      setArticles(parsedData.articles);
      setTotalRes(parsedData.totalRes);
      setLoading(false);
      props.changeProgress(100);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchMoreData = async () => {
    setPage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8636ac2a9dee4fb5be8f7cebd4ad8f99&page=${page}&pageSize=${props.pageSize}`;
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles(articles.concat(parsedData.articles));
      setTotalRes(parsedData.totalRes);
    } catch (error) {
      console.log(error);
    }
  };

  const capitalizeFun = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  document.title = `${capitalizeFun(props.category)} - PakNews`;
  return (
    <>
      <h1 className="text-info text-center main__heading">
        PakNews - Top {capitalizeFun(props.category)} Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalRes}
        loader={<Spinner />}
      >
        <div className="container my-4">
          <div className="row">
            {articles.map((items, index) => {
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
