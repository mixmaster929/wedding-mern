import "./App.css";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound/NotFound";
import { useEffect, useState } from "react";
import ForceRedirect from "./components/ForceRedirect";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Splash from "./pages/Splash";
import Lake from "./pages/Lake";
import Hotels from "./pages/Lake/hotels";
import Transportation from "./pages/Transportation";
import Celebrate from "./pages/Celebrate";
import Wedding from "./pages/Wedding";
import Activities from "./pages/Lake/activities";


function App() {
  const [isConnected, setIsconnected] = useState(false);

  const checkUserToken = () => {
    if (typeof window !== "undefined") {
      const user = JSON.parse(localStorage.getItem("user-token"));
      if (user) {
        setIsconnected(true);
      } else {
        setIsconnected(false);
      }
    }
  };
  useEffect(() => {
    checkUserToken();
  }, [isConnected]);

  const Logout = () => {
    if (localStorage.getItem("user-token")) {
      localStorage.clear();
      setIsconnected(false);
    }
  };

  return (
    <BrowserRouter>
      <div className="bg-white" style={{ height: "100vh" }}>
        {/* <Header Logout={Logout} user={isConnected} /> */}
        <Routes>
          <Route
            path="/"
            element={
              <ForceRedirect user={isConnected}>
                <Splash />
              </ForceRedirect>
            }
          />
          <Route
            path="/lake_garda"
            element={
              <ForceRedirect user={isConnected}>
                <Lake />
              </ForceRedirect>
            }
          />
          <Route
            path="/lake_garda/hotels"
            element={
              <ForceRedirect user={isConnected}>
                <Hotels />
              </ForceRedirect>
            }
          />
          <Route
            path="/lake_garda/activities"
            element={
              <ForceRedirect user={isConnected}>
                <Activities />
              </ForceRedirect>
            }
          />
          <Route
            path="/lake_garda/restaurants"
            element={
              <ForceRedirect user={isConnected}>
                <Lake />
              </ForceRedirect>
            }
          />
          <Route
            path="/lake_garda/map"
            element={
              <ForceRedirect user={isConnected}>
                <Lake />
              </ForceRedirect>
            }
          />
          <Route
            path="/transportation"
            element={
              <ForceRedirect user={isConnected}>
                <Transportation />
              </ForceRedirect>
            }
          />
          <Route
            path="/celebrate"
            element={
              <ForceRedirect user={isConnected}>
                <Celebrate />
              </ForceRedirect>
            }
          />
          <Route
            path="/wedding"
            element={
              <ForceRedirect user={isConnected}>
                <Wedding />
              </ForceRedirect>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute user={isConnected}>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/signin"
            element={
              <ForceRedirect user={isConnected}>
                <Signin />
              </ForceRedirect>
            }
          />
          <Route
            path="/signup"
            element={
              <ForceRedirect user={isConnected}>
                <Signup />
              </ForceRedirect>
            }
          />
          <Route
            path="/home"
            element={
              <ForceRedirect user={isConnected}>
                <Home />
              </ForceRedirect>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
