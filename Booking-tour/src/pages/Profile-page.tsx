import { Button, Col, DatePicker, Form, Input, Row, Select } from "antd";
import validationRulesInstance from "@/lib/validated/Rule";
import { Avatar } from "antd";
import { SkinFilled, SaveOutlined } from "@ant-design/icons";
interface Option {
  value: boolean;
  label: string;
}
export default function Profile() {
  const [form] = Form.useForm();
  const listGender: Option[] = [
    { value: true, label: "Nam" },
    { value: false, label: "Nữ" },
  ];
  return (
    <div className="container__profile">
      <div className="item__profile">
        <div className="item__profile-avt">
          <Avatar
            size={{ xs: 150, sm: 150, md: 150, lg: 150, xl: 150, xxl: 150 }}
            src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-1/368021133_1726419231151489_6853635133763153961_n.jpg?stp=dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXc4Y4B9SC2Fny3yA8N-CUBC9cMpZD2bwEL1wylkPZvD4bJYKXx2IP8953lqBULM1Rvddh6Q3aEhnBc6AwmJmM&_nc_ohc=GbGyntddSokQ7kNvgH72wpj&_nc_ht=scontent.fsgn2-3.fna&oh=00_AYBwycwtcZo1foqIxawptm7QEYZs546YxJAMHDh9Vw6lzw&oe=665C9498"
          />
        </div>
        <div className="item__profile-name">Trần Trung Hiếu</div>
        <div className="item__profile-role">
          <SkinFilled />
          <div className="item__profile-role-title">Customer</div>
        </div>
      </div>
      <Row className="item__detailprofile">
        <Col span={14} className="item__detailprofile-container">
          <div className="detailprofile__title">Thông Tin Cá Nhân</div>
          <Form
            name="information__form"
            autoComplete="off"
            layout="vertical"
            form={form}
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
                <Form.Item name="Gender" label="Giới tính">
                  <Select
                    placeholder="Chọn giới tính của bạn"
                    allowClear
                    size="large"
                    options={listGender}
                  />
                </Form.Item>
              </Col>
            </Row>
            <div className="form__action">
              <Button
                type="primary"
                size="large"
                icon={<SaveOutlined />}
                style={{ backgroundColor: "#01b7f2" }}
              >
                <span className="form__action-title">Lưu</span>
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
