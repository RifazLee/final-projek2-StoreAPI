
import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NavbarAdmin from "./components/NavbarAdmin";
import routes from "./router";

function App() {
  return (
    <>
    {(() => {
      if(localStorage.getItem("token") === "admin"){
       return(
        <NavbarAdmin />
       )
      }else{
        return(
          <Navbar />
        )
      }
    })()}
    <Routes>
            {routes.map((route, index) => {
              return (
                <Route key={index} path={route.path} element={route.element}>
                  {route.children &&
                    route.children.map((child, index) => {
                      return (
                        <Route
                          key={index}
                          path={child.path}
                          element={child.element}
                        />
                      );
                    })}
                </Route>
              );
            })}
          </Routes>
      <Footer />
    </>
  );
}

export default App;
