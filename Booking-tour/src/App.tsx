import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <Header />
        </div>
      </div>
      <div className="container">
        <div className="row margin-header">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
