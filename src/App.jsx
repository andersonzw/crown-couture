import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/Home";
import Navigation from "./routes/navigation-bar/Navigation"
import Shop from "./routes/shop/Shop";
import Authentication from "./routes/authentication/Authentication";


const App = () => {
  return (
    //Wrap anything that is routable inside the Routes component
    <Routes>
      {/* Basic route */}
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
