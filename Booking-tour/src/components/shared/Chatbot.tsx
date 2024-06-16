import { Input, Col, Row } from 'antd'
import type { SearchProps } from 'antd/es/input/Search';
import {
    SendOutlined
} from "@ant-design/icons";
const Chatbot = () => {
    const { Search } = Input;
    const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);
    return (
        <div className="chatbot__container">
            <div className="chatbot__messages">
                <Row className="chatbot__item" justify={"start"}>
                    <Col className='item__message' style={{ backgroundColor: "rgb(123, 188, 176)" }}>Bạn có thể đặt câu hỏi cho tôi</Col>
                </Row>
                <Row className="chatbot__item" justify={"end"}>
                    <Col className='item__message'>Thời tiết hôm nay thế nào </Col>
                </Row>
                <Row className="chatbot__item" justify={"start"}>
                    <Col className='item__message' style={{ backgroundColor: "rgb(123, 188, 176)" }}>Bạn có thể đặt câu hỏi cho tôi</Col>
                </Row>
                <Row className="chatbot__item" justify={"end"}>
                    <Col className='item__message'>Thời tiết hôm nay thế nào </Col>
                </Row>
                <Row className="chatbot__item" justify={"start"}>
                    <Col className='item__message' style={{ backgroundColor: "rgb(123, 188, 176)" }}>Bạn có thể đặt câu hỏi cho tôi</Col>
                </Row>
                <Row className="chatbot__item" justify={"end"}>
                    <Col className='item__message'>Thời tiết hôm nay thế nào </Col>
                </Row>
                <Row className="chatbot__item" justify={"start"}>
                    <Col className='item__message' style={{ backgroundColor: "rgb(123, 188, 176)" }}>Bạn có thể đặt câu hỏi cho tôi</Col>
                </Row>
                <Row className="chatbot__item" justify={"end"}>
                    <Col className='item__message'>Thời tiết hôm nay thế nào </Col>
                </Row>

            </div>
            <div className="chatbot__input">
                <Search placeholder="Nhập nội dung câu hỏi" size="large" onSearch={onSearch} enterButton={<SendOutlined />} />
            </div>
        </div>
    )
}

export default Chatbot