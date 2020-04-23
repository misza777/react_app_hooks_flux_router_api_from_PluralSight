import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import ManageCoursePage from "./ManageCoursePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import { BrowserRouter } from "react-router-dom";

function App() {
  // function getPage() {
  //   const route = window.location.pathname;
  //   console.log(route);
  //   if (route === "/courses") return <Courses />;
  //   if (route === "/about") return <AboutPage />;
  //   return <HomePage />;
  // }
  //   return (
  //     <div className="container-fluid">
  //       <Header />
  //       {/* {getPage()} */}
  //     </div>
  //   );
  // }

  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar />
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course/" component={ManageCoursePage} />
        <Redirect from="/about-page" to="about" />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
export default App;
