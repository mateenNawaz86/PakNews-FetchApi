import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewsPage from "./components/News/Main-page/NewsPage";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />

        <div className="container">
          <Switch>
            <Route exact path="/">
              <NewsPage
                key="general"
                pageSize={15}
                country="us"
                category="general"
              />
            </Route>
            <Route exact path="/business">
              <NewsPage
                key="business"
                pageSize={15}
                country="us"
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <NewsPage
                key="entertainment"
                pageSize={15}
                country="us"
                category="entertainment"
              />
            </Route>
            <Route exact path="/general">
              <NewsPage
                key="general"
                pageSize={15}
                country="us"
                category="general"
              />
            </Route>
            <Route exact path="/health">
              <NewsPage
                key="health"
                pageSize={15}
                country="us"
                category="health"
              />
            </Route>
            <Route exact path="/science">
              <NewsPage
                key="science"
                pageSize={15}
                country="us"
                category="science"
              />
            </Route>
            <Route exact path="/sports">
              <NewsPage
                key="sports"
                pageSize={15}
                country="us"
                category="sports"
              />
            </Route>
            <Route exact path="/technology">
              <NewsPage
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
