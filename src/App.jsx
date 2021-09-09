import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewsPage from "./components/News/Main-page/NewsPage";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setProgress] = useState(0);

  const setChangeProgress = (prog) => {
    setProgress(prog);
  };

  return (
    <>
      <Router>
        <Navbar />
        <LoadingBar color="#d10832" progress={progress} />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <NewsPage
                changeProgress={setChangeProgress}
                key="general"
                pageSize={15}
                country="us"
                category="general"
              />
            </Route>
            <Route exact path="/business">
              <NewsPage
                changeProgress={setChangeProgress}
                key="business"
                pageSize={15}
                country="us"
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <NewsPage
                changeProgress={setChangeProgress}
                key="entertainment"
                pageSize={15}
                country="us"
                category="entertainment"
              />
            </Route>
            <Route exact path="/general">
              <NewsPage
                changeProgress={setChangeProgress}
                key="general"
                pageSize={15}
                country="us"
                category="general"
              />
            </Route>
            <Route exact path="/health">
              <NewsPage
                changeProgress={setChangeProgress}
                key="health"
                pageSize={15}
                country="us"
                category="health"
              />
            </Route>
            <Route exact path="/science">
              <NewsPage
                changeProgress={setChangeProgress}
                key="science"
                pageSize={15}
                country="us"
                category="science"
              />
            </Route>
            <Route exact path="/sports">
              <NewsPage
                changeProgress={setChangeProgress}
                key="sports"
                pageSize={15}
                country="us"
                category="sports"
              />
            </Route>
            <Route exact path="/technology">
              <NewsPage
                changeProgress={setChangeProgress}
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
