import "./App.css";
import MainRoute from "./Routes/MainRoute";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { useMediaQuery } from "@chakra-ui/react";
import TabNavbar from "./Components/TabNavbar";
import MobNavbar from "./Components/MobNavbar";

function App() {
  const [isLargerThan960] = useMediaQuery("(min-width: 960px)");
  const [isLargerThan640] = useMediaQuery("(min-width: 640px)");

  return (
    <div className="App">
      {isLargerThan960 ? (
        <Navbar />
      ) : isLargerThan640 ? (
        <TabNavbar />
      ) : (
        <MobNavbar />
      )}
      <MainRoute />
      <Footer />
    </div>
  );
}

export default App;
