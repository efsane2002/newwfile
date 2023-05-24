import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { ROUTES } from "./routes/ROUTES";
import { RoboticContextProvider } from "./Context/RoboticContext";

const routes = createBrowserRouter(ROUTES)
function App() {
  return (
   <>
    <RoboticContextProvider>
       <RouterProvider router={routes}/>
    </RoboticContextProvider>
   </>
  );
}

export default App;
