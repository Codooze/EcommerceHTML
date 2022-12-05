import NavigationBar from "./components/navbar/navbar";
import Home from "./components/home/Home";
import { createBrowserRouter } from "react-router-dom";

const App = createBrowserRouter([
  {
    path: "/",
    element: <NavigationBar />,
    children: [{ index: true, element: <Home /> }],
  },
]);

export default App;
