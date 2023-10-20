import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/Home";
import Navigation from "./routes/navigation-bar/Navigation"
import SignIn from "./routes/sign-in/SignIn";


const Shop  = () => {
  return <div>shop</div>
}

const App = () => {
  return (
    //Wrap anything that is routable inside the Routes component
    <Routes>
      {/* Basic route */}
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
