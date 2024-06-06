import { Col, Row, Form, Divider, Input, DatePicker, InputNumber, Button, Timeline, List, Avatar } from "antd";
import Img1 from "@/assets/1.jpg";
import Img2 from "@/assets/2.jpg";
import Img3 from "@/assets/3.jpg";
import Img4 from "@/assets/4.jpg";
import Img5 from "@/assets/5.jpg";
import Img6 from "@/assets/6.jpg";
import { RedirectVNPay } from "@/lib/api/payment-api";
import {
  EnvironmentFilled,
  DollarOutlined,
  CommentOutlined,
  WhatsAppOutlined,
  MailOutlined,
  UserOutlined,
  HomeOutlined
} from "@ant-design/icons";
import validationRulesInstance from "@/lib/validated/Rule";
import dayjs from "dayjs";

interface imgType {
  img: string;
}
interface commentType {
  name: string;
  title: string;
}
const TourDetailPage = () => {
  const listImg: imgType[] = [
    {
      img: Img1
    },
    {
      img: Img2
    },
    {
      img: Img3
    },
    {
      img: Img4
    },
    {
      img: Img5
    },
    {
      img: Img6
    }
  ]
  const [formCheckOut] = Form.useForm();
  const data: commentType[] = [
    {
      name: "Trần Trung Hiếu",
      title: 'Tour đi thích lắm ạ!',
    },
    {
      name: "Phạm Khắc Luận",
      title: 'Tour đi rất ổn, sẽ ủng hộ lâu dài',
    },
    {
      name: "Lê Văn Hào",
      title: 'Hướng dẫn viên nhiệt tình',
    },
  ];

  const handleBooking = async (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.preventDefault();
    await RedirectVNPay()
      .then(url => {
        console.log(url);
        localStorage.setItem('GoWebapp_PaymentUrl', url);
        window.open(url, '_blank')
      })
  }
  return <div className="TourDetail__container">
    <Row className="TourDetail__title">
      <Col span={16}><span className="TourDetail__title-item">Tour Du Lịch Hội An</span></Col>
    </Row>
    <Row className="TourDetail__location">
      <Col span={16} style={{ display: "flex", gap: "4px" }}>
        <div className="TourDetail__location-item">
          <EnvironmentFilled />
          <span className="item-title">Hội An</span>
        </div>
        <div className="item-separator"></div>
        <div className="item-countPeople">320 người đã tham gia</div>
      </Col>
    </Row>
    <Row className="TourDetail__item" gutter={[30, 30]}>
      <Col span={16}>
        <Row className="item__listImg" gutter={[8, 8]}>
          {listImg.map((data, key) => (
            <Col span={8} key={key}>
              <img src={data.img} alt="ImgTour" className="item__img-tour" />
            </Col>
          ))}
        </Row>
        <Row className="item__description">
          Mô tả chuyến đi
        </Row>
        <Row className="item__detail">
          See the highlights of London via 2 classic modes of transport on this half-day adventure. First, you will enjoy great views of Westminster Abbey, the Houses of Parliament, and the London Eye, as you meander through the historic streets on board a vintage double decker bus.
          Continue to see St. Paul's Cathedral, Sir Christopher Wren's architectural masterpiece, where Admirals Nelson and Wellington are buried, and Princess Diana and Prince Charles got married. Continue to the Tower of London, built nearly 1,000 years ago during the reign of William the Conqueror.
          Home to the Crown Jewels, the Tower is protected by the famous Beefeaters, and the imposing palace has been used as a fortress and a prison throughout its history. Your guide will take you to Traitors Gate, where prisoners entered the Tower for the last time.
          Next, take a short trip along the River Thames, passing Shakespeare's Globe, Cleopatra's Needle, and London Bridge, before arriving at Westminster Pier. Rejoin the bus and head for Buckingham Palace. Make your way to the perfect spot to watch the world famous Changing of the Guard ceremony as the soldiers, dressed in their fabulous tunics and busbies, march to military music.
        </Row>
        <Divider></Divider>
        <Row className="item__description">
          Chi tiết chuyến đi
        </Row>
        <Row className="item__timeline">
          <Col span={16}>
            <Timeline
              className="timeline"
              items={[
                {
                  dot: <> <div className="timeline__dot">Ngày 1</div></>,
                  children: (
                    <div className="timeline__list">
                      <div className="timeline__item">6h00: Xuất phát</div>
                      <div className="timeline__item">7h00: Cầu Rồng</div>
                      <div className="timeline__item">10h00: Hội an</div>
                    </div>
                  )
                },
                {
                  dot: <> <div className="timeline__dot">Ngày 2</div></>,
                  children: (
                    <div className="timeline__list">
                      <div className="timeline__item">6h00: Xuất phát</div>
                      <div className="timeline__item">7h00: Cầu Rồng</div>
                      <div className="timeline__item">10h00: Hội an</div>
                    </div>
                  )
                },
                {
                  dot: <> <div className="timeline__dot">Ngày 3</div></>,
                  children: (
                    <div className="timeline__list">
                      <div className="timeline__item">6h00: Xuất phát</div>
                      <div className="timeline__item">7h00: Cầu Rồng</div>
                      <div className="timeline__item">10h00: Hội an</div>
                    </div>
                  )
                },
                {
                  dot: <> <div className="timeline__dot">Ngày 4</div></>,
                  children: (
                    <div className="timeline__list">
                      <div className="timeline__item">6h00: Xuất phát</div>
                      <div className="timeline__item">7h00: Cầu Rồng</div>
                      <div className="timeline__item">10h00: Hội an</div>
                    </div>
                  )
                },
              ]}
            />
          </Col>
          <Col span={8} className="timeline__info">
            <div className="TourDetail__location-item">
              <WhatsAppOutlined />
              <span className="item-title">+84 23827123</span>
            </div>
            <div className="TourDetail__location-item">
              <MailOutlined />
              <span className="item-title">hieu@gmail.com</span>
            </div>
            <div className="TourDetail__location-item">
              <UserOutlined />
              <span className="item-title">Trần Trung Hiếu</span>
            </div>
            <div className="TourDetail__location-item">
              <HomeOutlined />
              <span className="item-title">Hotel</span>
            </div>
          </Col>
        </Row>
        <Divider></Divider>
        <Row className="item__description">
          Đánh giá
        </Row>
        <Row className="item__comment">
          <Col span={24}>
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-1/368021133_1726419231151489_6853635133763153961_n.jpg?stp=dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXc4Y4B9SC2Fny3yA8N-CUBC9cMpZD2bwEL1wylkPZvD4bJYKXx2IP8953lqBULM1Rvddh6Q3aEhnBc6AwmJmM&_nc_ohc=GbGyntddSokQ7kNvgH72wpj&_nc_ht=scontent.fsgn2-3.fna&oh=00_AYBwycwtcZo1foqIxawptm7QEYZs546YxJAMHDh9Vw6lzw&oe=665C9498" />}
                    title={<a href="https://ant.design">{item.name}</a>}
                    description={item.title}
                  />
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </Col>
      <Col span={8} className="TourDetail__item-form">
        <Form
          name="information__form"
          className="form__checkout"
          autoComplete="off"
          layout="vertical"
          form={formCheckOut}>
          <div className="checkout__title">Thông Tin Vé</div>
          <Divider style={{ margin: "12px 0px" }} />
          <Row>
            <Col span={24}>
              <Form.Item
                name="StartDate"
                label="Ngày bắt đầu"
              >
                <DatePicker
                  disabled
                  defaultValue={dayjs('01/01/2024', "MM/DD/YYYY")}
                  size="large"
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                name="EndDate"
                label="Ngày kết thúc"
              >
                <DatePicker
                  disabled
                  defaultValue={dayjs('01/01/2024', "MM/DD/YYYY")}
                  size="large"
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
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
          </Row>
          <Row>
            <Col span={24}>
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
          <Row>
            <Col span={24}>
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
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                name="Count"
                label="Số Lượng người tham gia"
                rules={[
                  validationRulesInstance.requireForm,
                ]}
              >
                <InputNumber size="large" min={1} max={10} defaultValue={1} style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </Row>
          <Divider style={{ margin: "0px 0px 12px 0px" }} />
          <div className="checkout__subPrice">
            <div className="checkout__subPrice-title">Đơn giá</div>
            <div className="checkout__subPrice-price">VNĐ 1.000.000</div>
          </div>
          <div className="checkout__Price">
            <div className="checkout__Price-title">Tổng hóa đơn</div>
            <div className="checkout__Price-price">VNĐ 3.000.000</div>
          </div>
          <Divider style={{ margin: "12px 0px" }} />
          <div className="form__checkout-action">
            <Button
              type="primary"
              size="large"
              icon={<DollarOutlined />}
              style={{ backgroundColor: "#01b7f2", width: "100%" }}
              onClick={(e) => handleBooking(e)}
            >
              <span className="form__action-title">Thanh Toán</span>
            </Button>
            <Button
              type="primary"
              size="large"
              icon={<CommentOutlined />}
              style={{ backgroundColor: "#7BBCB0", width: "100%" }}
            >
              <span className="form__action-title">Liên hệ Chủ Tour</span>
            </Button>
          </div>
        </Form>
      </Col>
    </Row>
  </div>
};

export default TourDetailPage;
