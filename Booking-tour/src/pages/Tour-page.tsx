import {
  Input,
  Form,
  Select,
  Button,
  DatePicker,
  Row,
  Col,
  Checkbox,
  InputNumber,
  List,
  Tag,
} from "antd";
import {
  EnvironmentFilled,
  CalendarFilled,
  SearchOutlined,
  DollarTwoTone,
  HomeFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
interface OptionType {
  label: string;
  value: string;
}
interface dataTourType {
  activity: string;
  date: string;
  price: string;
  location: string;
  img: string;
  typeRest: string;
  description: string;
}
const TourPage = () => {
  const { RangePicker } = DatePicker;
  const activity: OptionType[] = [
    { label: "Tham quan", value: "Visit" },
    { label: "Leo núi", value: "RockClimbing" },
    { label: "Cắm trại", value: "Camping" },
    { label: "Nghỉ dưỡng", value: "GoOnHoliday" },
  ];
  const rest: OptionType[] = [
    { label: "Khách sạn", value: "Hotel" },
    { label: "Homestay", value: "Homestay" },
    { label: "Resort", value: "Resort" },
    { label: "Villa", value: "Villa" },
  ];
  const tourBestData: dataTourType[] = [
    {
      typeRest: "Hotel",
      description:
        "Tour du lịch Hà Nội mang đến trải nghiệm tuyệt vời với những danh thắng lịch sử, văn hóa độc đáo như Hồ Gươm, Lăng Bác, Phố cổ và ẩm thực phong phú. Khám phá vẻ đẹp cổ kính và hiện đại của thủ đô Việt Nam",
      activity: "Tham Quan",
      date: "July 05,2024",
      price: "500,000",
      location: "Hồ Chí Minh",
      img: "https://ik.imagekit.io/tvlk/image/imageResource/2019/03/13/1552466374013-a57dacdbc92a9c508c1dbc4c4ceeb5cd.jpeg?tr=dpr-2,q-75,w-320",
    },
    {
      typeRest: "Lều",
      description:
        "Tour du lịch Hà Nội mang đến trải nghiệm tuyệt vời với những danh thắng lịch sử, văn hóa độc đáo như Hồ Gươm, Lăng Bác, Phố cổ và ẩm thực phong phú. Khám phá vẻ đẹp cổ kính và hiện đại của thủ đô Việt Nam",
      activity: "Leo núi",
      date: "Jun 21,2024",
      price: "1,200,000",
      location: "Nha Trang",
      img: "https://ik.imagekit.io/tvlk/image/imageResource/2021/11/25/1637851600794-f02453e5e7d6bc0533503519b44bd817.png?tr=dpr-2,q-75,w-320",
    },
    {
      typeRest: "Resort",
      description:
        "Tour du lịch Hà Nội mang đến trải nghiệm tuyệt vời với những danh thắng lịch sử, văn hóa độc đáo như Hồ Gươm, Lăng Bác, Phố cổ và ẩm thực phong phú. Khám phá vẻ đẹp cổ kính và hiện đại của thủ đô Việt Nam",
      activity: "Nghỉ dưỡng",
      date: "May 20,2024",
      price: "300,000",
      location: "Đà Nẵng",
      img: "https://ik.imagekit.io/tvlk/image/imageResource/2021/11/25/1637851894841-e5d7f8e7abc30ff0f1f07f6d7a64eac1.png?tr=dpr-2,q-75,w-320",
    },
    {
      typeRest: "Hotel",
      description:
        "Tour du lịch Hà Nội mang đến trải nghiệm tuyệt vời với những danh thắng lịch sử, văn hóa độc đáo như Hồ Gươm, Lăng Bác, Phố cổ và ẩm thực phong phú. Khám phá vẻ đẹp cổ kính và hiện đại của thủ đô Việt Nam",
      activity: "Cắm trại",
      date: "Oct 10,2024",
      price: "700,000",
      location: "Hà Nội",
      img: "https://ik.imagekit.io/tvlk/image/imageResource/2021/11/25/1637851505067-e5745050cc951e5c9c11b01c1d0ff920.png?tr=dpr-2,q-75,w-320",
    },
  ];
  return (
    <div className="searchTour">
      <Form
        name="SearchForm"
        autoComplete="off"
        className="searchTour__form"
        layout="vertical"
      >
        <div className="search__form">
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
              size="large"
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
        </div>
        <Row className="search__filter">
          <Col span={6}>
            <Form.Item name="activityGroup" label="Loại hình">
              <Checkbox.Group>
                <Row gutter={[0, 12]}>
                  {activity.map((data, key) => (
                    <Col span={24} key={key}>
                      <Checkbox value={data.value}>{data.label}</Checkbox>
                    </Col>
                  ))}
                </Row>
              </Checkbox.Group>
            </Form.Item>
            <Form.Item name="Budget" label="Giá tối đa">
              <InputNumber<number>
                style={{ width: "70%" }}
                formatter={(value) =>
                  `VND ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={(value) => {
                  const numericValue = value?.replace(/[^\d]/g, "");
                  return numericValue ? parseInt(numericValue, 10) : 0;
                }}
              />
            </Form.Item>
            <Form.Item name="typeRest" label="Loại hình nghỉ ngơi">
              <Checkbox.Group>
                <Row gutter={[0, 12]}>
                  {rest.map((data, key) => (
                    <Col span={24} key={key}>
                      <Checkbox value={data.value}>{data.label}</Checkbox>
                    </Col>
                  ))}
                </Row>
              </Checkbox.Group>
            </Form.Item>
          </Col>
          <Col span={18}>
            <List
              itemLayout="vertical"
              bordered
              size="large"
              pagination={{
                pageSize: 3,
              }}
              dataSource={tourBestData}
              renderItem={(item, key) => (
                <List.Item
                  key={key}
                  extra={
                    <div>
                      <div className="containerRow__itemTour">
                        <Row>
                          <Col className="item__tourInfo" span={24}>
                            <Tag color="#f50" style={{ marginRight: 0 }}>
                              VND {item.price}
                            </Tag>
                          </Col>
                        </Row>
                        <Row>
                          <Col className="item__tourInfo text__tour" span={24}>
                            <EnvironmentFilled /> {item.location}
                          </Col>
                        </Row>
                        <Row>
                          <Col className="item__tourInfo text__tour" span={24}>
                            <HomeFilled /> {item.typeRest}
                          </Col>
                        </Row>
                      </div>
                      <Link to={`/tour/${123}`}>
                        <Button
                          type="primary"
                          size="large"
                          icon={<DollarTwoTone />}
                          style={{ backgroundColor: "#01b7f2" }}
                        >
                          Xem thông tin
                        </Button>
                      </Link>
                    </div>
                  }
                >
                  <List.Item.Meta
                    avatar={
                      <img
                        width={150}
                        alt="logo"
                        style={{ borderRadius: "16px" }}
                        src={item.img}
                      />
                    }
                    title={
                      <Link
                        to={"id"}
                        style={{
                          fontSize: "20px",
                          fontWeight: 500,
                          color: "#000000",
                        }}
                      >
                        {item.activity}
                      </Link>
                    }
                    description={item.description}
                  />
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default TourPage;
