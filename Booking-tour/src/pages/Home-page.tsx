import panelImg from "@/assets/panel.jpg";
import {
  // DatePicker,
  Button,
  Row,
  Col,
  Card,
  Divider,
  Tag,
} from "antd";
import {
  RightCircleOutlined,
  DollarTwoTone,
} from "@ant-design/icons";
import sunnyIcon from "@/assets/sunny.png";
import { Link } from "react-router-dom";
import rain from "@/assets/rain.png";
interface weatherType {
  date: string;
  wednesday: string;
  weather: string;
  temperature: string;
  iconWeather: string;
}
// interface OptionType {
//   label: string;
//   value: string;
// }
interface dataTourType {
  activity: string;
  date: string;
  price: string;
  location: string;
  img: string;
}
interface dataLocationType {
  id: string;
  img: string;
  location: string;
}
export default function HomePage() {
  // const { RangePicker } = DatePicker;
  // const activity: OptionType[] = [
  //   { label: "Tham quan", value: "Visit" },
  //   { label: "Leo núi", value: "RockClimbing" },
  //   { label: "Cắm trại", value: "Camping" },
  //   { label: "Nghỉ dưỡng", value: "GoOnHoliday" },
  // ];
  const weather: weatherType[] = [
    {
      date: "Mar 6",
      wednesday: "Mon",
      weather: "Sunny",
      temperature: "20℃",
      iconWeather: sunnyIcon,
    },
    {
      date: "Mar 7",
      wednesday: "Tue",
      weather: "Sunny",
      temperature: "12℃",
      iconWeather: sunnyIcon,
    },
    {
      date: "Mar 8",
      wednesday: "Wed",
      weather: "Rainy",
      temperature: "16℃",
      iconWeather: rain,
    },
    {
      date: "Mar 9",
      wednesday: "Thu",
      weather: "Rainy",
      temperature: "10℃",
      iconWeather: rain,
    },
    {
      date: "Mar 10",
      wednesday: "Fri",
      weather: "Sunny",
      temperature: "25℃",
      iconWeather: sunnyIcon,
    },
    {
      date: "Mar 11",
      wednesday: "Sat",
      weather: "Rainy",
      temperature: "10℃",
      iconWeather: rain,
    },
    {
      date: "Mar 12",
      wednesday: "Sun",
      weather: "Sunny",
      temperature: "30℃",
      iconWeather: sunnyIcon,
    },
  ];
  const tourBestData: dataTourType[] = [
    {
      activity: "Tham Quan",
      date: "July 05,2024",
      price: "500,000",
      location: "Hồ Chí Minh",
      img: "https://ik.imagekit.io/tvlk/image/imageResource/2019/03/13/1552466374013-a57dacdbc92a9c508c1dbc4c4ceeb5cd.jpeg?tr=dpr-2,q-75,w-320",
    },
    {
      activity: "Leo núi",
      date: "Jun 21,2024",
      price: "1,200,000",
      location: "Nha Trang",
      img: "https://ik.imagekit.io/tvlk/image/imageResource/2021/11/25/1637851600794-f02453e5e7d6bc0533503519b44bd817.png?tr=dpr-2,q-75,w-320",
    },
    {
      activity: "Nghỉ dưỡng",
      date: "May 20,2024",
      price: "300,000",
      location: "Đà Nẵng",
      img: "https://ik.imagekit.io/tvlk/image/imageResource/2021/11/25/1637851894841-e5d7f8e7abc30ff0f1f07f6d7a64eac1.png?tr=dpr-2,q-75,w-320",
    },
    {
      activity: "Cắm trại",
      date: "Oct 10,2024",
      price: "700,000",
      location: "Hà Nội",
      img: "https://ik.imagekit.io/tvlk/image/imageResource/2021/11/25/1637851505067-e5745050cc951e5c9c11b01c1d0ff920.png?tr=dpr-2,q-75,w-320",
    },
  ];
  const tourMoneyData: dataTourType[] = [
    {
      activity: "Tham Quan",
      date: "July 05,2024",
      price: "500,000",
      location: "Hồ Chí Minh",
      img: "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/7369264504118/The-Amazing-Bay-Water-Park-Tickets-55729c6b-9ac2-42b2-b286-47eed560d9fa.png?_src=imagekit&tr=dpr-2,c-at_max,h-569,q-60,w-320",
    },
    {
      activity: "Leo núi",
      date: "Jun 21,2024",
      price: "1,200,000",
      location: "Nha Trang",
      img: "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2000908873691/Sun-World-Ha-Long-Tickets-84caf9b9-5f23-4418-81b9-225d20debb84.jpeg?_src=imagekit&tr=dpr-2,c-at_max,h-569,q-60,w-320",
    },
    {
      activity: "Nghỉ dưỡng",
      date: "May 20,2024",
      price: "300,000",
      location: "Đà Nẵng",
      img: "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2000684219858/VinWonders-Nha-Trang-Tickets--80b15ee9-1b00-482d-a01d-566adef9bc25.jpeg?_src=imagekit&tr=dpr-2,c-at_max,h-569,q-60,w-320",
    },
    {
      activity: "Cắm trại",
      date: "Oct 10,2024",
      price: "700,000",
      location: "Hà Nội",
      img: "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2000908871772/Sun-World-Ba-Na-Hills-in-Da-Nang--ce8d864c-da07-4dc0-91db-f320fa9fbbeb.jpeg?_src=imagekit&tr=dpr-2,c-at_max,h-569,q-60,w-320",
    },
  ];
  const locationInfo: dataLocationType[] = [
    {
      id: "102",
      location: "Singapore",
      img: "https://ik.imagekit.io/tvlk/image/imageResource/2023/06/14/1686721871064-7ac6a0d59dc14ece2ed479906fad2ffa.png?tr=dpr-3,q-75,w-427",
    },
    {
      id: "103",
      location: "Korea",
      img: "https://ik.imagekit.io/tvlk/image/imageResource/2023/06/01/1685626793768-ea048e16aff039145ae995a58a35cffd.png?tr=dpr-3,q-75,w-427",
    },
    {
      id: "104",
      location: "Việt Nam",
      img: "https://ik.imagekit.io/tvlk/image/imageResource/2023/06/14/1686721846090-11842460c2322df4b0a4f0201f6782d7.png?tr=dpr-3,q-75,w-427",
    },
    {
      id: "105",
      location: "ThaiLand",
      img: "https://ik.imagekit.io/tvlk/image/imageResource/2023/05/29/1685328965749-d622f5f8496a6dc11d9b1aca65c6d58e.png?tr=dpr-3,q-75,w-427",
    },
    {
      id: "106",
      location: "Malaysia",
      img: "https://ik.imagekit.io/tvlk/image/imageResource/2023/05/29/1685329328194-3d7df8cb31d4a3bf69f10209ba8402ec.png?tr=dpr-3,q-75,w-427",
    },
    {
      id: "107",

      location: "Indonesia",
      img: "https://ik.imagekit.io/tvlk/image/imageResource/2023/06/01/1685626590562-f7fc1564035ab9e353099a96c659b5c1.png?tr=dpr-3,q-75,w-427",
    },
    {
      id: "108",

      location: "Đà Nẵng",
      img: "https://ik.imagekit.io/tvlk/image/imageResource/2021/11/25/1637851894841-e5d7f8e7abc30ff0f1f07f6d7a64eac1.png?tr=dpr-2,q-75,w-320",
    },
    {
      id: "109",
      location: "Hà Nội",
      img: "https://ik.imagekit.io/tvlk/image/imageResource/2021/11/25/1637851505067-e5745050cc951e5c9c11b01c1d0ff920.png?tr=dpr-2,q-75,w-320",
    },
  ];
  return (
    <>
      <div className="Panel">
        <img src={panelImg} alt="Img Introduction" className="Panel__img" />
        {/* <div className="search">
          <div className="search__title">TÌM KIẾM CHUYẾN ĐI THÍCH HỢP</div>
          <Form name="SearchForm" autoComplete="off" className="search__form">
            <Form.Item noStyle name="location">
              <Input
                size="large"
                placeholder="Nhập địa điểm du lịch"
                prefix={<EnvironmentFilled />}
                style={{
                  borderColor: "#79747E",
                  maxWidth: "250px",
                  minWidth: "200px",
                }}
              />
            </Form.Item>
            <Form.Item noStyle name="duration">
              <RangePicker
                suffixIcon={<CalendarFilled style={{ color: "#112211" }} />}
                style={{
                  borderColor: "#79747E",
                  maxWidth: "300px",
                  minWidth: "200px",
                }}
              />
            </Form.Item>
            <Form.Item noStyle name="activity">
              <Select
                size="large"
                allowClear
                options={activity}
                placeholder="Chọn loại hình du lịch"
                className="select__form"
                style={{
                  maxWidth: "300px",
                  minWidth: "200px",
                }}
              />
            </Form.Item>
            <Form.Item noStyle name="activity">
              <Button
                type="primary"
                size="large"
                icon={<SearchOutlined />}
                style={{ backgroundColor: "#01b7f2" }}
              >
                Tìm kiếm
              </Button>
            </Form.Item>
          </Form>
        </div> */}
      </div>
      <div className="homeContent">
        <Row className="listCard">
          <Col span={23} className="listCard__title">
            Tour Thịnh Hành
          </Col>
          <Col
            span={1}
            className="listCard__title"
            style={{ textAlign: "end" }}
          >
            <Button
              type="primary"
              size="large"
              icon={<RightCircleOutlined />}
              style={{ backgroundColor: "#01b7f2" }}
            />
          </Col>
        </Row>
        <Row gutter={16}>
          {tourBestData.map((data, key) => (
            <Col span={6} key={key}>
              <Card
                hoverable
                bordered={true}
                cover={
                  <img
                    alt="imgTour"
                    src={data.img}
                    className="listCard__item"
                  />
                }
                actions={[
                  <Link to={`/tour/${123}`}>
                    <Button
                      type="primary"
                      size="large"
                      icon={<DollarTwoTone />}
                      style={{ backgroundColor: "#01b7f2" }}
                    >
                      Xem thông tin
                    </Button>
                  </Link>,
                ]}
              >
                <Row>
                  <Col span={24}>
                    <Tag color="#2db7f5" className="listCard__item-activity">
                      Tham Quan
                    </Tag>
                    <Tag color="#f50" style={{ textAlign: "end" }}>
                      VND {data.price}
                    </Tag>
                    <Divider style={{ margin: "5px 0px" }}></Divider>
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <div className="listCard__item-info">Ngày</div>
                  </Col>
                  <Col span={12} style={{ textAlign: "end" }}>
                    <div className="listCard__item-info">Địa điểm</div>
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <div className="listCard__item-content">{data.date}</div>
                  </Col>
                  <Col span={12} style={{ textAlign: "end" }}>
                    <div className="listCard__item-content">
                      {data.location}
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className="listCard">
          <Col span={23} className="listCard__title">
            Top Tour Giá Rẻ
          </Col>
          <Col
            span={1}
            className="listCard__title"
            style={{ textAlign: "end" }}
          >
            <Button
              type="primary"
              size="large"
              icon={<RightCircleOutlined />}
              style={{ backgroundColor: "#01b7f2" }}
            />
          </Col>
        </Row>
        <Row gutter={16}>
          {tourMoneyData.map((data, key) => (
            <Col span={6} key={key}>
              <Card
                hoverable
                bordered={true}
                cover={
                  <img
                    alt="imgTour"
                    src={data.img}
                    className="listCard__item"
                  />
                }
                actions={[
                  <Link to={`/tour/${123}`}>
                    <Button
                      type="primary"
                      size="large"
                      icon={<DollarTwoTone />}
                      style={{ backgroundColor: "#01b7f2" }}
                    >
                      Xem thông tin
                    </Button>
                  </Link>,
                ]}
              >
                <Row>
                  <Col span={24}>
                    <Tag color="#2db7f5" className="listCard__item-activity">
                      Tham Quan
                    </Tag>
                    <Tag color="#f50" style={{ textAlign: "end" }}>
                      VND {data.price}
                    </Tag>
                    <Divider style={{ margin: "5px 0px" }}></Divider>
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <div className="listCard__item-info">Ngày</div>
                  </Col>
                  <Col span={12} style={{ textAlign: "end" }}>
                    <div className="listCard__item-info">Địa điểm</div>
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <div className="listCard__item-content">{data.date}</div>
                  </Col>
                  <Col span={12} style={{ textAlign: "end" }}>
                    <div className="listCard__item-content">
                      {data.location}
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className="listCard">
          <Col span={24} className="listCard__title">
            Thông Tin Về Địa Điểm
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          {locationInfo.map((data, key) => (
            <Col span={6} className="listCard__link" key={key}>
              <Link to={`/home/${data.id}`}>
                <img
                  src={data.img}
                  alt="imgLocation"
                  className="listCard__item"
                  style={{
                    borderRadius: 8,
                  }}
                />
              </Link>
              <div className="listCard__location">{data.location}</div>
            </Col>
          ))}
        </Row>
        <Row className="listCard">
          <Col span={24} className="listCard__title">
            Thời Tiết Đà Nẵng
          </Col>
        </Row>
        <Row className="listCard__weather">
          {weather.map((data, key) => (
            <Col span={3} className="listCard__weather-item" key={key}>
              <Row className="weather__text-primary">{data.wednesday}</Row>
              <Row className="weather__text-secondary">{data.date}</Row>
              <Row>
                <img src={data.iconWeather} alt="" />
              </Row>
              <Row className="weather__text-primary">{data.weather}</Row>
              <Row className="weather__text-secondary">{data.temperature}</Row>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}
