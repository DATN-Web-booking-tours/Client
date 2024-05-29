import logoWeb from "@/assets/LogoWeb.png";
import { Col, Row, Form, Input, DatePicker, Select, Button } from "antd";
import validationRulesInstance from "@/components/validated/Rule";
import { SendOutlined } from "@ant-design/icons";

interface Option {
  value: string;
  label: string;
}
const SignUp = () => {
  const [formSignup] = Form.useForm();
  const listGender: Option[] = [
    { value: "Customer", label: "Khách hàng" },
    { value: "Tourowner", label: "Chủ tour" },
  ];
  return <div className="loginPage">
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
        <Form
          name="information__form"
          autoComplete="off"
          layout="vertical"
          form={formSignup}
        >
          <Row gutter={[16, 0]}>
            <Col span={12}>
              <Form.Item
                name="Name"
                label="Họ Và Tên"
                rules={[validationRulesInstance.requireForm]}
              >
                <Input
                  size="large"
                  placeholder="Vui lòng nhập họ và tên của bạn"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="Phone"
                label="Điện Thoại"
                rules={[
                  validationRulesInstance.requireForm,
                  validationRulesInstance.phoneValidate,
                ]}
              >
                <Input
                  size="large"
                  placeholder="Vui lòng nhập số điện thoại"
                  prefix={<span className="prefix__number-title">+84</span>}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[16, 0]}>
            <Col span={12}>
              <Form.Item
                name="Email"
                label="Email"
                rules={[
                  validationRulesInstance.requireForm,
                  validationRulesInstance.emailValidation,
                ]}
              >
                <Input
                  size="large"
                  placeholder="Vui lòng nhập email của bạn"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="Address"
                label="Địa chỉ"
                rules={[validationRulesInstance.requireForm]}
              >
                <Input size="large" placeholder="Vui lòng nhập địa chỉ" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[16, 0]}>
            <Col span={12}>
              <Form.Item
                name="Birthday"
                label="Ngày Sinh"
                rules={[validationRulesInstance.requireForm]}
              >
                <DatePicker
                  size="large"
                  style={{ width: "100%" }}
                  placeholder="mm/dd/yyyy"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="Role" label="Role"
                rules={[validationRulesInstance.requireForm]}

              >
                <Select
                  placeholder="Chọn Role của bạn"
                  allowClear
                  size="large"

                  options={listGender}
                />
              </Form.Item>
            </Col>
          </Row>
          <div className="form__action" style={{ justifyContent: "end", display: "flex" }}>
            <Button
              type="primary"
              size="large"
              icon={<SendOutlined />}
              style={{ backgroundColor: "#01b7f2" }}
            >
              <span className="form__action-title">Đăng ký</span>
            </Button>
          </div>
        </Form>
      </Col>
    </Row>
  </div>
};

export default SignUp;
