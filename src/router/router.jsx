import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import About from "../pages/miniPage/About";
import PrivacyPolicy from "../pages/miniPage/PrivacyPolicy";
import ContactUs from "../pages/miniPage/ContactUs";
import SingleBlog from "../pages/blogs/singleBlog/SingleBlog";
const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
          path: "/about-us",
          element: <About/>
        },
        {
          path: "/privacy-policy",
          element: <PrivacyPolicy/>
        },
        {
          path: "/contact-us",
          element: <ContactUs/>
        },
        {
          path: "blogs/:id",
          element: <SingleBlog/>
        }
      ]
    },
  ]);

  export default router;