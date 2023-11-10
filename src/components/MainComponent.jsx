import { RouterProvider } from "react-router-dom";
import Router from "../routes/Router";
import { Dna, InfinitySpin } from "react-loader-spinner";
import { useSelector } from "react-redux";
const MainComponent = () => {
  const { user } = useSelector((state) => state.userSlice);
  return (
    // <div>
    //   {user._id ? (
    <RouterProvider router={Router} />
    //   ) : (
    //     <div
    //       style={{
    //         display: "flex",
    //         justifyContent: "center",
    //         alignItems: "center",
    //         height: "100vh",
    //       }}
    //     >
    //       <InfinitySpin width="200" color="#d23f57" />
    //     </div>
    //   )}
    // </div>
  );
};

export default MainComponent;
