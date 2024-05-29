import { GoogleLogin } from "@react-oauth/google";
import logoWeb from "@/assets/LogoWeb.png";
import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  //   const onFinish = (values: FormLoginType) => {
  //     console.log("Received values of form: ", values);
  //   };

  //   const handleCallBackResponse = (response) => {
  //     console.log(response.credentials);
  //   };
  //   useEffect(() => {
  //     google.accounts.id.initialize({
  //       clientID:
  //         "74177461559-lo3iv873kif2fr5tbc67vdnqk7on02j9.apps.googleusercontent.com",
  //       callback: handleCallBackResponse,
  //     });
  //     google.accounts.id.render(document.getElementById("signin"), {
  //       theme: "outline",
  //       size: "large",
  //     });
  //   }, []);
  return (
    <div className="loginPage">
      <Row className="loginBox">
        <Col span={12} className="loginBox_listImage">
          <img
            width={"100%"}
            style={{ objectFit: "cover" }}
            src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/pages/boy-with-rocket-light.png"
            alt="imgLogin"
          />
        </Col>
        <Col
          span={12}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Row className="login__title">Welcome Back!</Row>
          <Row>
            <img
              src={logoWeb}
              alt="imgLogin"
              style={{ paddingBottom: "24px" }}
            />
          </Row>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
              navigate("/home");
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default SignIn;
