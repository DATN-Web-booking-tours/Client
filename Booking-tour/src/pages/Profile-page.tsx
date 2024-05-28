import { Col, Form, Row } from "antd";

import { Avatar } from "antd";
import { SkinFilled } from "@ant-design/icons";
export default function Profile() {
  return (
    <div className="container__profile">
      <div className="item__profile">
        <div className="item__profile-avt">
          <Avatar
            size={{ xxl: 150 }}
            src="https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-1/368021133_1726419231151489_6853635133763153961_n.jpg?stp=dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXc4Y4B9SC2Fny3yA8N-CUBC9cMpZD2bwEL1wylkPZvD4bJYKXx2IP8953lqBULM1Rvddh6Q3aEhnBc6AwmJmM&_nc_ohc=2TbyPE6bCIYQ7kNvgGAiqV2&_nc_ht=scontent.fhan5-6.fna&oh=00_AYCyzV7DJENOA-KhT7qPe7v7x1OJxdyiBJx1wnv4llY-RA&oe=66563558"
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
          <Form></Form>
        </Col>
      </Row>
    </div>
  );
}
