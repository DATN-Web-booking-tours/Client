import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Outlet } from "react-router-dom";
import { FloatButton } from "antd";
import { MessageTwoTone } from "@ant-design/icons";
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
      <FloatButton
        shape="circle"
        type="primary"
        badge={{ count: 1 }}
        tooltip={<div>Chat Bot</div>}
        style={{ right: 94, bottom: 200 }}
        icon={<MessageTwoTone />}
      />
    </>
  );
}

export default App;
