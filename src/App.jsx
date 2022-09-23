import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewsPage from "./components/News/Main-page/NewsPage";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setProgress] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <LoadingBar color="#d10832" progress={progress} />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <NewsPage
                changeProgress={setProgress}
                key="general"
                pageSize={15}
                country="us"
                category="general"
              />
            </Route>
            <Route exact path="/business">
              <NewsPage
                changeProgress={setProgress}
                key="business"
                pageSize={15}
                country="us"
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <NewsPage
                changeProgress={setProgress}
                key="entertainment"
                pageSize={15}
                country="us"
                category="entertainment"
              />
            </Route>

            <Route exact path="/health">
              <NewsPage
                changeProgress={setProgress}
                key="health"
                pageSize={15}
                country="us"
                category="health"
              />
            </Route>
            <Route exact path="/science">
              <NewsPage
                changeProgress={setProgress}
                key="science"
                pageSize={15}
                country="us"
                category="science"
              />
            </Route>
            <Route exact path="/sports">
              <NewsPage
                changeProgress={setProgress}
                key="sports"
                pageSize={15}
                country="us"
                category="sports"
              />
            </Route>
            <Route exact path="/technology">
              <NewsPage
                changeProgress={setProgress}
                key="technology"
                pageSize={15}
                country="us"
                category="technology"
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
