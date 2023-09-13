import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import { Routes, Route } from "react-router-dom";
import CheckOut from "./routes/check-out/check-out.component";
import NavBar from "./routes/nav-bar/nav-bar.component";
import Authentication from "./routes/authentication/authentication.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/check-out" element={<CheckOut />} />
      </Route>
    </Routes>
  );
};

export default App;
