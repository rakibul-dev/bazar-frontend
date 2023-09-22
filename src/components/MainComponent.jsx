import { RouterProvider } from "react-router-dom";
import Router from "../routes/Router";
const MainComponent = () => {
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  );
};

export default MainComponent;
