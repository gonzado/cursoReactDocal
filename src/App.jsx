import React from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Error404 from "./components/Error404";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Menu from "./components/Menu";
import NavBar from "./components/NavBar";
import Promo from "./components/Promo";


const App = () => {
  return (
<BrowserRouter>
  <NavBar/>
  <Routes>
        <Route path={"/"} element={<ItemListContainer />} />
        <Route path={"/category/:id"} element={<ItemListContainer />} />
        <Route path={"/item/:id"} element={<ItemDetailContainer />} />
        <Route path={"*"} element={<Error404 />} />
  </Routes>
  <Banner/>
  <Promo/>
  <Menu/>
  <Footer/>
</BrowserRouter>
);
}

export default App;