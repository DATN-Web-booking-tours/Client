import {
    Input,
    Form,
    Select,
    Button,
    DatePicker,
    Table,
    TableColumnsType,
    TableProps,
    Avatar,
    Tag,
    Popconfirm,
    Modal,
    Row,
    Col,
    Card,
    TimePicker,
    Statistic,
} from "antd";
import Img1 from "@/assets/1.jpg";
import Img2 from "@/assets/2.jpg";
import Img3 from "@/assets/3.jpg";
import Img4 from "@/assets/4.jpg";
import validationRulesInstance from "@/lib/validated/Rule";

import {
    EnvironmentFilled,
    CalendarFilled,
    SearchOutlined,
    DeleteFilled,
    EditFilled,
    PlusOutlined,
    CloseOutlined,
    UserOutlined,
    DollarOutlined,
    SendOutlined
} from "@ant-design/icons";
import { useState } from "react";
import ImgEmpty from "@/components/icon/iconEmpty";

import { Image, Upload } from 'antd';
import type { GetProp, UploadFile, UploadProps } from 'antd';
interface OptionType {
    label: string;
    value: string;
}
interface DataType {
    key: string;
    avt: string;
    TourName: string;
    location: string;
    status: string;
    service: string;
    price: string;
    startDate: string;
    endDate: string;
}
type OnChange = NonNullable<TableProps<DataType>["onChange"]>;
type Filters = Parameters<OnChange>[1];
type GetSingle<T> = T extends (infer U)[] ? U : never;
type Sorts = GetSingle<Parameters<OnChange>[2]>;
type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];
const getBase64 = (file: FileType): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });
const TourOwnerPage = () => {

    const { RangePicker } = DatePicker;
    const [formEdit] = Form.useForm();
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };
    const handleCancel = () => {
        setOpen(false);
    };
    const [dataSource, setDataSource] = useState<DataType[]>([
        {
            key: "1",
            avt: "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2000684219858/VinWonders-Nha-Trang-Tickets--80b15ee9-1b00-482d-a01d-566adef9bc25.jpeg?_src=imagekit&tr=dpr-2,c-at_max,h-569,q-60,w-320",
            TourName: "Tour Du Lịch Hà Nội",

            location: "Hà Nội",
            status: "Đã Bắt đầu",
            service: "Hotel",
            price: "20.000.000 VNĐ",
            startDate: "20 Oct 2023",
            endDate: "25 Oct 2023",
        },
        {
            key: "2",
            avt: "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2000684219858/VinWonders-Nha-Trang-Tickets--80b15ee9-1b00-482d-a01d-566adef9bc25.jpeg?_src=imagekit&tr=dpr-2,c-at_max,h-569,q-60,w-320",
            TourName: "Tour Du Lịch Hồ Chí Minh",

            location: "Hồ Chí Minh",
            status: "Chưa Bắt đầu",
            service: "Flight",
            price: "15.000.000 VNĐ",
            startDate: "10 Nov 2023",
            endDate: "15 Nov 2023",
        },
        {
            key: "3",
            avt: "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2000684219858/VinWonders-Nha-Trang-Tickets--80b15ee9-1b00-482d-a01d-566adef9bc25.jpeg?_src=imagekit&tr=dpr-2,c-at_max,h-569,q-60,w-320",
            TourName: "Tour Du Lịch Đà Nẵng",

            location: "Đà Nẵng",
            status: "Đã Kết thúc",
            service: "Hotel",
            price: "12.000.000 VNĐ",
            startDate: "05 Oct 2023",
            endDate: "10 Oct 2023",
        },
        {
            key: "4",
            avt: "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2000684219858/VinWonders-Nha-Trang-Tickets--80b15ee9-1b00-482d-a01d-566adef9bc25.jpeg?_src=imagekit&tr=dpr-2,c-at_max,h-569,q-60,w-320",
            TourName: "Tour Du Lịch Huế",

            location: "Huế",
            status: "Đang diễn ra",
            service: "Guide",
            price: "18.000.000 VNĐ",
            startDate: "01 Dec 2023",
            endDate: "06 Dec 2023",
        },
        {
            key: "5",
            avt: "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2000684219858/VinWonders-Nha-Trang-Tickets--80b15ee9-1b00-482d-a01d-566adef9bc25.jpeg?_src=imagekit&tr=dpr-2,c-at_max,h-569,q-60,w-320",
            TourName: "Tour Du Lịch Hội An",

            location: "Hội An",
            status: "Chưa Bắt đầu",
            service: "Hotel",
            price: "22.000.000 VNĐ",
            startDate: "15 Jan 2024",
            endDate: "20 Jan 2024",
        },
        {
            key: "6",
            avt: "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2000684219858/VinWonders-Nha-Trang-Tickets--80b15ee9-1b00-482d-a01d-566adef9bc25.jpeg?_src=imagekit&tr=dpr-2,c-at_max,h-569,q-60,w-320",
            TourName: "Tour Du Lịch Sa Pa",

            location: "Sa Pa",
            status: "Đã Kết thúc",
            service: "Flight",
            price: "25.000.000 VNĐ",
            startDate: "20 Feb 2024",
            endDate: "25 Feb 2024",
        },
        {
            key: "7",
            avt: "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2000684219858/VinWonders-Nha-Trang-Tickets--80b15ee9-1b00-482d-a01d-566adef9bc25.jpeg?_src=imagekit&tr=dpr-2,c-at_max,h-569,q-60,w-320",
            TourName: "Tour Du Lịch Nha Trang",

            location: "Nha Trang",
            status: "Đang diễn ra",
            service: "Hotel",
            price: "30.000.000 VNĐ",
            startDate: "10 Mar 2024",
            endDate: "15 Mar 2024",
        },
        {
            key: "8",
            avt: "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2000684219858/VinWonders-Nha-Trang-Tickets--80b15ee9-1b00-482d-a01d-566adef9bc25.jpeg?_src=imagekit&tr=dpr-2,c-at_max,h-569,q-60,w-320",
            TourName: "Tour Du Lịch Phú Quốc",

            location: "Phú Quốc",
            status: "Chưa Bắt đầu",
            service: "Guide",
            price: "28.000.000 VNĐ",
            startDate: "25 Mar 2024",
            endDate: "30 Mar 2024",
        },
        {
            key: "9",
            avt: "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2000684219858/VinWonders-Nha-Trang-Tickets--80b15ee9-1b00-482d-a01d-566adef9bc25.jpeg?_src=imagekit&tr=dpr-2,c-at_max,h-569,q-60,w-320",
            TourName: "Tour Du Lịch Cần Thơ",

            location: "Cần Thơ",
            status: "Đã Kết thúc",
            service: "Flight",
            price: "20.000.000 VNĐ",
            startDate: "05 Apr 2024",
            endDate: "10 Apr 2024",
        },
        {
            key: "10",
            avt: "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2000684219858/VinWonders-Nha-Trang-Tickets--80b15ee9-1b00-482d-a01d-566adef9bc25.jpeg?_src=imagekit&tr=dpr-2,c-at_max,h-569,q-60,w-320",
            TourName: "Tour Du Lịch Quảng Ninh",

            location: "Quảng Ninh",
            status: "Đang diễn ra",
            service: "Hotel",
            price: "24.000.000 VNĐ",
            startDate: "15 Apr 2024",
            endDate: "20 Apr 2024",
        },
        {
            key: "11",
            avt: "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2000684219858/VinWonders-Nha-Trang-Tickets--80b15ee9-1b00-482d-a01d-566adef9bc25.jpeg?_src=imagekit&tr=dpr-2,c-at_max,h-569,q-60,w-320",
            TourName: "Tour Du Lịch Bình Thuận",

            location: "Bình Thuận",
            status: "Chưa Bắt đầu",
            service: "Guide",
            price: "4.000.000 VNĐ",
            startDate: "01 May 2024",
            endDate: "06 May 2024",
        },
    ]);
    const [sortedInfo, setSortedInfo] = useState<Sorts>({});
    const [filteredInfo, setFilteredInfo] = useState<Filters>({});
    const handleChange: OnChange = (pagination, filters, sorter) => {
        setFilteredInfo(filters);
        setSortedInfo(sorter as Sorts);
        console.log(pagination);
        console.log(filteredInfo);
    };
    const activity: OptionType[] = [
        { label: "Tham quan", value: "Visit" },
        { label: "Leo núi", value: "RockClimbing" },
        { label: "Cắm trại", value: "Camping" },
        { label: "Nghỉ dưỡng", value: "GoOnHoliday" },
    ];
    const handleDelete = (key: React.Key) => {
        const newData = dataSource.filter((item) => item.key !== key);
        setDataSource(newData);
    };

    const columns: TableColumnsType<DataType> = [
        {
            title: "Hình ảnh",
            dataIndex: "avt",
            key: "avt",
            render: (img: string) => (<Avatar
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                src={img}
            />),
        },
        {
            title: "Tên Tour",
            dataIndex: "TourName",
            key: "TourName",
            onFilter: (value, record) => record.TourName.includes(value as string),
            sorter: (a, b) => a.TourName.localeCompare(b.TourName, 'vi', { sensitivity: 'base' }),
            sortOrder: sortedInfo.columnKey === "TourName" ? sortedInfo.order : null,
            ellipsis: true,
        },
        {
            title: "Địa điểm",
            dataIndex: "location",
            key: "location",
            onFilter: (value, record) => record.location.includes(value as string),
            sorter: (a, b) => a.location.localeCompare(b.location, 'vi', { sensitivity: 'base' }),
            sortOrder: sortedInfo.columnKey === "location" ? sortedInfo.order : null,
            ellipsis: true,
        },
        {
            title: "Trạng thái",
            dataIndex: "status",
            key: "status",
            render: (status: string) => (
                <Tag color="#FF5500">
                    {status}
                </Tag>),
            onFilter: (value, record) => record.status.includes(value as string),
            sorter: (a, b) => a.status.localeCompare(b.status, 'vi', { sensitivity: 'base' }),
            sortOrder: sortedInfo.columnKey === "status" ? sortedInfo.order : null,
            ellipsis: true,
        },
        {
            title: "Nghỉ ngơi",
            dataIndex: "service",
            key: "service",
            onFilter: (value, record) => record.service.includes(value as string),
            sorter: (a, b) => a.service.localeCompare(b.service, 'vi', { sensitivity: 'base' }),
            sortOrder: sortedInfo.columnKey === "service" ? sortedInfo.order : null,
            ellipsis: true,
        },
        {
            title: "Giá tiền",
            dataIndex: "price",
            key: "price",
            render: (price: string) => (
                <Tag color="#2DB7F5">
                    {price}
                </Tag>),
            onFilter: (value, record) => record.price.includes(value as string),
            sorter: (a, b) => {
                const numberA = parseInt(a.price.replace(/[^0-9]/g, ''), 10);
                const numberB = parseInt(b.price.replace(/[^0-9]/g, ''), 10);
                return numberA - numberB;
            },
            sortOrder: sortedInfo.columnKey === "price" ? sortedInfo.order : null,
            ellipsis: true,
        },
        {
            title: "Ngày bắt đầu",
            dataIndex: "startDate",
            key: "startDate",
            onFilter: (value, record) => record.startDate.includes(value as string),
            sorter: (a, b) => {
                const dateA = new Date(a.startDate).getTime();
                const dateB = new Date(b.startDate).getTime();
                return dateA - dateB;
            },
            sortOrder: sortedInfo.columnKey === "startDate" ? sortedInfo.order : null,
            ellipsis: true,
        },
        {
            title: "Ngày kết thúc",
            dataIndex: "endDate",
            key: "endDate",
            onFilter: (value, record) => record.endDate.includes(value as string),
            sorter: (a, b) => {
                const dateA = new Date(a.endDate).getTime();
                const dateB = new Date(b.endDate).getTime();
                return dateA - dateB;
            },
            sortOrder: sortedInfo.columnKey === "endDate" ? sortedInfo.order : null,
            ellipsis: true,
        },
        {
            title: 'Hành động',
            dataIndex: 'action',
            render: (_, record) =>
                dataSource.length >= 1 ? (
                    <div className="action__table">
                        <Button icon={<EditFilled />} type="text" onClick={showModal}>
                        </Button>
                        <Popconfirm title="Xác nhận xóa!" onConfirm={() => handleDelete(record.key)}>
                            <Button icon={<DeleteFilled />} type="text">
                            </Button>
                        </Popconfirm>
                    </div>
                ) : null,
        },
    ];
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [fileList, setFileList] = useState<UploadFile[]>([
        {
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: Img1,
        },
        {
            uid: '-2',
            name: 'image.png',
            status: 'done',
            url: Img2,
        },
        {
            uid: '-3',
            name: 'image.png',
            status: 'done',
            url: Img3,
        },
        {
            uid: '-4',
            name: 'image.png',
            status: 'done',
            url: Img4,
        },
    ]);

    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as FileType);
        }

        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
    };

    const handleChangeUpload: UploadProps['onChange'] = ({ fileList: newFileList }) =>
        setFileList(newFileList);

    const uploadButton = (
        <button style={{ border: 0, background: 'none' }} type="button">
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </button>
    );

    return (
        <div className="tourOwner__container">
            <Form
                name="searchForm"
                autoComplete="off"
                className="searchTour__form"
                layout="vertical"
            >
                <Row className="statistic__owner" >
                    <Col span={6} className="statistic__owner-item">
                        <Card >
                            <Statistic
                                title="Doanh thu"
                                value={1232323}
                                valueStyle={{ color: '#3f8600' }}
                                prefix={<DollarOutlined />}
                                suffix="VNĐ"
                            />
                        </Card>
                    </Col>
                    <Col span={6} className="statistic__owner-item">
                        <Card>
                            <Statistic
                                title="Số Tour đã tạo"
                                value={124}
                                valueStyle={{ color: '#cf1322' }}
                                prefix={<SendOutlined />}
                                suffix="Tour"
                            />
                        </Card>
                    </Col>
                    <Col span={6} className="statistic__owner-item">
                        <Card >
                            <Statistic
                                title="Số Tour đã kết thúc"
                                value={32}
                                valueStyle={{ color: '#cf1322' }}
                                prefix={<SendOutlined />}
                                suffix="Tour"
                            />
                        </Card>
                    </Col>
                    <Col span={6} className="statistic__owner-item">
                        <Card>
                            <Statistic
                                title="Số người tham gia"
                                value={300}
                                valueStyle={{ color: '#01B7F2' }}
                                prefix={<UserOutlined />}
                                suffix="Người"
                            />
                        </Card>
                    </Col>
                </Row>
                <div className="search__form-owner">
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
                    <Form.Item noStyle name="search">
                        <Button
                            type="primary"
                            size="large"
                            icon={<SearchOutlined />}
                            style={{ backgroundColor: "#01b7f2" }}
                        >
                            Tìm kiếm
                        </Button>
                    </Form.Item>
                    <Form.Item noStyle name="add">
                        <Button
                            type="primary"
                            size="large"
                            icon={<PlusOutlined />}
                            style={{ backgroundColor: "#7BBCB0" }}
                            onClick={showModal}
                        >
                            Thêm Tour
                        </Button>
                    </Form.Item>
                </div>
                <div className="data__tour">
                    <Table
                        columns={columns}
                        dataSource={dataSource}
                        onChange={handleChange}
                        pagination={{
                            showSizeChanger: true,
                        }}
                        locale={{
                            emptyText: () => (
                                <div className="emptyBlank">
                                    <ImgEmpty></ImgEmpty>
                                    <span className="emptyBlank__title">
                                        There are no records to display.
                                    </span>
                                </div>
                            ),
                        }}
                    />
                </div>
            </Form>
            <Modal
                title="Thông Tin Chi Tiết"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                okText="Lưu Thông Tin"
                cancelText="Trở về"
                width={"80%"}

            >
                <Form
                    name="editForm"
                    autoComplete="off"
                    className="editTour__form"
                    layout="vertical"
                    form={formEdit}
                >
                    <Row className="formEdit__item" gutter={[16, 0]}>
                        <Col span={24}>
                            <Form.Item
                                name="upload"
                                label="Upload"
                                valuePropName="fileList"
                                noStyle
                            >
                                <Upload
                                    action="http://localhost:5173/tourowner"
                                    listType="picture-card"
                                    fileList={fileList}
                                    onPreview={handlePreview}
                                    onChange={handleChangeUpload}
                                >
                                    {fileList.length >= 6 ? null : uploadButton}
                                </Upload>
                                {previewImage && (
                                    <Image
                                        wrapperStyle={{ display: 'none' }}
                                        preview={{
                                            visible: previewOpen,
                                            onVisibleChange: (visible) => setPreviewOpen(visible),
                                            afterOpenChange: (visible) => !visible && setPreviewImage(''),
                                        }}
                                        src={previewImage}
                                    />
                                )}
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row className="formEdit__item" gutter={[16, 0]}>
                        <Col span={24}>
                            <Form.Item name="description" label="Mô tả" rules={[validationRulesInstance.requireForm]}>
                                <Input.TextArea autoSize={{ minRows: 3, maxRows: 5 }} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row className="formEdit__item" gutter={[16, 0]}>
                        <Col span={12}>
                            <Form.Item
                                name="NameTour"
                                label="Tên Tour"
                                rules={[validationRulesInstance.requireForm]}
                            >
                                <Input
                                    size="large"
                                    placeholder="Vui lòng nhập tên của tour"
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="LocationTour"
                                label="Địa điểm"
                                rules={[validationRulesInstance.requireForm]}
                            >
                                <Input
                                    size="large"
                                    placeholder="Vui lòng nhập địa điểm"
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row className="formEdit__item" gutter={[16, 0]}>
                        <Col span={12}>
                            <Form.Item
                                name="statusTour"
                                label="Trạng thái Tour"
                                rules={[validationRulesInstance.requireForm]}
                            >
                                <Input
                                    size="large"
                                    disabled
                                    placeholder="Vui lòng nhập trạng thái của tour"
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="serviceTour"
                                label="Dịch vụ"
                                rules={[validationRulesInstance.requireForm]}
                            >
                                <Input
                                    size="large"
                                    placeholder="Vui lòng nhập loại hình nghỉ ngơi"
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row className="formEdit__item" gutter={[16, 0]}>
                        <Col span={12}>
                            <Form.Item name="timeTour" label="Thời gian" rules={[validationRulesInstance.requireForm]}>
                                <RangePicker style={{ width: "100%" }} size="large" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="typeTour"
                                label="Loại hình du lịch"
                                rules={[validationRulesInstance.requireForm]}
                            >
                                <Input
                                    size="large"
                                    placeholder="Vui lòng nhập loại hình du lịch"
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row className="formEdit__item" gutter={[16, 0]}>
                        <Col span={12}>
                            <Form.Item
                                name="NameOwner"
                                label="Họ Và Tên Chủ Tour"
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
                                name="PhoneOwner"
                                label="Điện Thoại Chủ Tour"
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
                    <Row className="formEdit__item" gutter={[16, 0]}>
                        <Col span={12}>
                            <Form.Item
                                name="EmailOwner"
                                label="Email"
                                rules={[
                                    validationRulesInstance.requireForm,
                                    validationRulesInstance.emailValidation
                                ]}
                            >
                                <Input
                                    size="large"
                                    placeholder="Vui lòng nhập email"
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="Price"
                                label="Giá tiền"
                                rules={[validationRulesInstance.requireForm, validationRulesInstance.acceptNumbersOnly]}
                            >
                                <Input size="large" placeholder="Vui lòng nhập giá tiền" prefix={<span className="prefix__number-title">VNĐ</span>} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row className="formEdit__item" gutter={[16, 0]}>
                        <Col span={24}>
                            <Form.Item
                                name="itemsTour"
                                label="Chi tiết chuyến đi"
                                rules={[validationRulesInstance.requireForm]}
                            >
                                <Form.List name="items" prefixCls="abc" rules={[
                                    {
                                        validator: async (_, items) => {
                                            if (!items || items.length < 1) {
                                                return Promise.reject(new Error('At least one item is required'));
                                            }
                                        },
                                    },
                                ]}>
                                    {(fields, { add, remove }) => (
                                        <div style={{ display: 'flex', rowGap: 16, flexDirection: 'column' }}>
                                            {fields.map((field) => (
                                                <Card
                                                    size="small"
                                                    title={`Ngày ${field.name + 1}`}
                                                    key={field.key}
                                                    extra={
                                                        <CloseOutlined
                                                            onClick={() => {
                                                                remove(field.name);
                                                            }}
                                                        />
                                                    }
                                                >
                                                    <Form.Item label="Thời gian" name={[field.name, 'name']}>
                                                        <Input defaultValue={`Ngày ${field.name + 1}`} disabled />
                                                    </Form.Item>
                                                    {/* Nest Form.List */}
                                                    <Form.Item label="Chi tiết">
                                                        <Form.List name={[field.name, 'list']}>
                                                            {(subFields, subOpt) => (
                                                                <div style={{ display: 'flex', flexDirection: 'column', rowGap: 16 }}>
                                                                    {subFields.map((subField) => (
                                                                        <Row key={subField.key} gutter={[16, 0]}>
                                                                            <Col span={6}>
                                                                                <Form.Item noStyle name={[subField.name, 'timedetail']} rules={[validationRulesInstance.requireForm]}>
                                                                                    <TimePicker style={{ width: '100%' }} placeholder="Chọn thời gian" />
                                                                                </Form.Item>
                                                                            </Col>
                                                                            <Col span={6}>
                                                                                <Form.Item noStyle name={[subField.name, 'descriptionTime']} rules={[validationRulesInstance.requireForm]}>
                                                                                    <Input placeholder="Mô tả" />
                                                                                </Form.Item>
                                                                            </Col>
                                                                            <CloseOutlined
                                                                                onClick={() => {
                                                                                    subOpt.remove(subField.name);
                                                                                }}
                                                                            />
                                                                        </Row>
                                                                    ))}
                                                                    <Button type="dashed" onClick={() => subOpt.add()} block>
                                                                        + Thêm thời gian cụ thể
                                                                    </Button>
                                                                </div>
                                                            )}
                                                        </Form.List>
                                                    </Form.Item>
                                                </Card>
                                            ))}

                                            <Button type="dashed" onClick={() => add()} block>
                                                + Thêm ngày
                                            </Button>
                                        </div>
                                    )}
                                </Form.List>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </div>
    )
}

export default TourOwnerPage