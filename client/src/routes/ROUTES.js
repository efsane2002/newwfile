import Home from "../pages/Home";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Country from "../pages/Country";
import MainRoot from "../pages/MainRoot";
import Course from "../pages/Course";


export const ROUTES = [
    {
       path:"/",
       element:<MainRoot/>,
       children: [
        {
          path:"",
          element:<Home/>
        },
        {
            path:"/about",
            element:<About/>
          },
          {
            path:"/blog",
            element:<Blog/>
          },
          {
            path:"/country",
            element:<Country/>
          },
          {
            path:"/course",
            element:<Course/>
          },
              
       ]
    }
]