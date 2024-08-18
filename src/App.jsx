import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ColorBar from "./Main/ColorBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <ColorBar />
      <div className="pt-[150px] flex-grow overflow-y-auto px-4">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
