// import { useParams } from "react-router-dom";
import Img1 from "@/assets/1.jpg";
import Img2 from "@/assets/2.jpg";
import Img3 from "@/assets/3.jpg";
import Img4 from "@/assets/4.jpg";
import Img5 from "@/assets/5.jpg";
import Img6 from "@/assets/6.jpg";
import {
  EnvironmentFilled,
} from "@ant-design/icons";
import { Col, Divider, Row } from "antd";
interface imgType {
  img: string;
}
const LocationInfoPage = () => {
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
    },
    {
      img: Img2
    },
    {
      img: Img3
    },
  ]
  //   const { id } = useParams();
  //   console.log(id);
  return <div className="TourDetail__container">
    <Row className="TourDetail__title">
      <Col span={24}><span className="TourDetail__title-item">Thành phố Hội An</span></Col>
    </Row>
    <Row className="TourDetail__location">
      <Col span={24} style={{ display: "flex", gap: "4px" }}>
        <div className="TourDetail__location-item">
          <EnvironmentFilled />
          <span className="item-title">Hội An</span>
        </div>
      </Col>
    </Row>
    <Row className="TourDetail__item" gutter={[30, 30]}>
      <Col span={24}>
        <Row className="item__listImg" gutter={[8, 8]}>
          {listImg.map((data, key) => (
            <Col span={6} key={key}>
              <img src={data.img} alt="ImgTour" className="item__img-tour" />
            </Col>
          ))}
        </Row>
        <Row className="item__description">
          Mô tả Thành Phố
        </Row>
        <Row className="item__detail">
          See the highlights of London via 2 classic modes of transport on this half-day adventure. First, you will enjoy great views of Westminster Abbey, the Houses of Parliament, and the London Eye, as you meander through the historic streets on board a vintage double decker bus.
          Continue to see St. Paul's Cathedral, Sir Christopher Wren's architectural masterpiece, where Admirals Nelson and Wellington are buried, and Princess Diana and Prince Charles got married. Continue to the Tower of London, built nearly 1,000 years ago during the reign of William the Conqueror.
          Home to the Crown Jewels, the Tower is protected by the famous Beefeaters, and the imposing palace has been used as a fortress and a prison throughout its history. Your guide will take you to Traitors Gate, where prisoners entered the Tower for the last time.
          Next, take a short trip along the River Thames, passing Shakespeare's Globe, Cleopatra's Needle, and London Bridge, before arriving at Westminster Pier. Rejoin the bus and head for Buckingham Palace. Make your way to the perfect spot to watch the world famous Changing of the Guard ceremony as the soldiers, dressed in their fabulous tunics and busbies, march to military music.
        </Row>
        <Divider />
      </Col>
    </Row>
  </div>
};
export default LocationInfoPage;
