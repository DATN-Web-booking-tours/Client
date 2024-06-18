import panelImg from "@/assets/panel.jpg";
import {
  // DatePicker,
  Button,
  Row,
  Col,
  Card,
  Divider,
  Tag,
  Spin,
} from "antd";
import {
  RightCircleOutlined,
  DollarTwoTone,
} from "@ant-design/icons";
import sunnyIcon from "@/assets/sunny.png";
import { Link } from "react-router-dom";
import rain from "@/assets/rain.png";
import { useEffect, useState } from "react";
import { GetTourHome } from "@/lib/api/tour-api";
import dayjs from "dayjs";
interface weatherType {
  date: string;
  wednesday: string;
  weather: string;
  temperature: string;
  iconWeather: string;
}
interface dataLocationType {
  id: string;
  img: string;
  location: string;
}

interface filePathItem {
  filePath: string;
  fileUrl: string;
}
export interface TourData {
  id: string;
  name: string;
  description: string;
  price: string;
  location: string;
  startDate: string;
  status: number;
  hotel: string;
  image: filePathItem;
}
export default function HomePage() {
  const [tourMoney, setTourMoney] = useState<TourData[]>();
  const [tourNormal, setTourNomarl] = useState<TourData[]>();
  const [loadingMoney, setLoadingMoney] = useState<boolean>(false);
  const [loadingNormal, setLoadingNormal] = useState<boolean>(false);
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
  useEffect(() => {
    setLoadingNormal(true)
    GetTourHome()
      .then((res) => {
        if (res.succeeded) {
          setTourNomarl(res.data)
          setLoadingNormal(false)
        }
      })
  }, [])
  useEffect(() => {
    setLoadingMoney(true)
    GetTourHome(true)
      .then((res) => {
        if (res.succeeded) {
          setTourMoney(res.data)
          setLoadingMoney(false)
        }
      })
  }, [])
  return (
    <>
      <div className="Panel">
        <img src={panelImg} alt="Img Introduction" className="Panel__img" />
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
            <Link to={"/tour"}>
              <Button
                type="primary"
                size="large"
                icon={<RightCircleOutlined />}
                style={{ backgroundColor: "#01b7f2" }}
              />
            </Link>
          </Col>
        </Row>
        <Spin spinning={loadingNormal}>
          <Row gutter={16}>
            {tourNormal?.map((data) => (
              <Col span={6} key={data?.id}>
                <Card
                  hoverable
                  bordered={true}
                  cover={
                    <img
                      alt="imgTour"
                      src={data?.image?.filePath}
                      className="listCard__item"
                    />
                  }
                  actions={[
                    <Link to={`/tour/${data?.id}`}>
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
                        {data.name}
                      </Tag>
                      <Tag color="#f50" style={{ textAlign: "end" }}>
                        VND {data?.price}
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
                      <div className="listCard__item-content"> {dayjs(data?.startDate).format('MMMM DD, YYYY')}</div>
                    </Col>
                    <Col span={12} style={{ textAlign: "end" }}>
                      <div className="listCard__item-content">
                        {data?.location}
                      </div>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
        </Spin>
        <Row className="listCard">
          <Col span={23} className="listCard__title">
            Top Tour Giá Rẻ
          </Col>
          <Col
            span={1}
            className="listCard__title"
            style={{ textAlign: "end" }}
          >
            <Link to={"/tour"}>
              <Button
                type="primary"
                size="large"
                icon={<RightCircleOutlined />}
                style={{ backgroundColor: "#01b7f2" }}
              />
            </Link>
          </Col>
        </Row>
        <Spin spinning={loadingMoney}>
          <Row gutter={16}>
            {tourMoney?.map((data) => (
              <Col span={6} key={data?.id}>
                <Card
                  hoverable
                  bordered={true}
                  cover={
                    <img
                      alt="imgTour"
                      src={data?.image?.filePath}
                      className="listCard__item"
                    />
                  }
                  actions={[
                    <Link to={`/tour/${data?.id}`}>
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
                        {data.name}
                      </Tag>
                      <Tag color="#f50" style={{ textAlign: "end" }}>
                        VND {data?.price}
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
                      <div className="listCard__item-content"> {dayjs(data?.startDate).format('MMMM DD, YYYY')}</div>
                    </Col>
                    <Col span={12} style={{ textAlign: "end" }}>
                      <div className="listCard__item-content">
                        {data?.location}
                      </div>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
        </Spin>
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
                  src={data?.img}
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
