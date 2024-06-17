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
    message,
    Spin,
} from "antd";
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
import { useEffect, useState } from "react";
import ImgEmpty from "@/components/icon/iconEmpty";

import { Image, Upload } from 'antd';
import type { UploadProps } from 'antd';
import dayjs from "dayjs";
import { UploadImage } from "@/lib/api/image-api";
import { AddTour, GetAllTourByTourOwner } from "@/lib/api/tour-api";
interface OptionStateTour {
    value: number;
    label: string;
}
interface fileData {
    filePath: string;
    fileUrl: string;
}
interface DataType {
    id: string;
    name: string;
    price: number;
    location: string;
    status: number;
    hotel: string;
    startDate: string;
    endDate: string;
    image: fileData;
    createdAt?: string;
}
interface schedulesItem {
    startTime: string;
    Date: number;
    Description: string;
}
interface filePathItem {
    FilePath: string;
}
export interface TourData {
    name: string;
    description: string;
    price: string;
    location: string;
    startDate: string;
    endDate: string;
    lastRegisterDate: string;
    status: number;
    vehicle: string;
    hotel: string;
    schedules: schedulesItem[];
    images: filePathItem[];
}
type OnChange = NonNullable<TableProps<DataType>["onChange"]>;
const TourOwnerPage = () => {
    const { RangePicker } = DatePicker;
    const [formEdit] = Form.useForm();
    const [open, setOpen] = useState(false);
    const [loadingUploadFile, setLoadingUploadFile] = useState<boolean>(false)
    const [loadingData, setLoadingData] = useState<boolean>(false)
    const listStateTour: OptionStateTour[] = [
        { value: 0, label: "Đang Chuẩn Bị" },
        { value: 1, label: "Đang tiến hành" },
        { value: 2, label: "Đã kết thúc" },

    ];
    const handleFormSubmit = () => {
        console.log(filelistUrl);
        formEdit.validateFields().then((value) => {
            const updatedValues = {
                ...value,
                images: filelistUrl
            };
            if (updatedValues.endDate && dayjs.isDayjs(updatedValues.endDate)) {
                updatedValues.endDate = updatedValues.endDate.format("YYYY/MM/DD");
            }
            if (updatedValues.lastRegisterDate && dayjs.isDayjs(updatedValues.lastRegisterDate)) {
                updatedValues.lastRegisterDate = updatedValues.lastRegisterDate.format("YYYY/MM/DD");
            }
            if (updatedValues.startDate && dayjs.isDayjs(updatedValues.startDate)) {
                updatedValues.startDate = updatedValues.startDate.format("YYYY/MM/DD");
            }
            if (updatedValues.startDate && dayjs.isDayjs(updatedValues.startDate)) {
                updatedValues.startDate = updatedValues.startDate.format("YYYY/MM/DD");
            }
            if (updatedValues.schedules && Array.isArray(updatedValues.schedules)) {
                updatedValues.schedules = updatedValues.schedules.map((schedule: schedulesItem) => {
                    if (schedule.startTime && dayjs.isDayjs(schedule.startTime)) {
                        return {
                            ...schedule,
                            startTime: schedule.startTime.format("HH:mm:ss")
                        };
                    }
                    return schedule;
                });
            }
            console.log(updatedValues);
            AddTour(updatedValues)
                .then((res) => {
                    if (!res.succeeded) {
                        message.error('Thêm thất bại!');
                        setOpen(false)
                        setFileListUrl([])
                    }
                    else {
                        message.success('Thêm thành công!');
                        setOpen(false);
                        setFileListUrl([])
                    }
                })
        });
    };
    const showModal = () => {
        setOpen(true);
    };
    const handleCancel = () => {
        setOpen(false);
        setFileListUrl([])
    };
    const [dataSource, setDataSource] = useState<DataType[]>([]);
    const handleChange: OnChange = (pagination, filters, sorter) => {

    };
    const handleDelete = (id: string) => {
        const newData = dataSource.filter((item) => item.id !== id);
        setDataSource(newData);
    };

    const columns: TableColumnsType<DataType> = [
        {
            title: "Hình ảnh",
            dataIndex: "image",
            key: "image",
            render: (image: fileData) => (<Avatar
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                src={image?.filePath}
            />),
        },
        {
            title: "Tên Tour",
            dataIndex: "name",
            key: "name",
            ellipsis: true,
        },
        {
            title: "Địa điểm",
            dataIndex: "location",
            key: "location",
            ellipsis: true,
        },
        {
            title: "Trạng thái",
            dataIndex: "status",
            key: "status",
            render: (status: OptionStateTour) => (
                <Tag color="#FF5500">
                    {status.value}
                </Tag>),
            ellipsis: true,
        },
        {
            title: "Nghỉ ngơi",
            dataIndex: "hotel",
            key: "hotel",
            ellipsis: true,
        },
        {
            title: "Giá tiền",
            dataIndex: "price",
            key: "price",
            render: (price: number) => (
                <Tag color="#2DB7F5">
                    {price}
                </Tag>),
            ellipsis: true,
        },
        {
            title: "Ngày bắt đầu",
            dataIndex: "startDate",
            key: "startDate",
            ellipsis: true,
        },
        {
            title: "Ngày kết thúc",
            dataIndex: "endDate",
            key: "endDate",
            ellipsis: true,
        },
        {
            title: 'Hành động',
            dataIndex: 'action',
            render: (id: string) =>
                dataSource.length >= 1 ? (
                    <div className="action__table">
                        <Button icon={<EditFilled />} type="text" onClick={showModal}>
                        </Button>
                        <Popconfirm title="Xác nhận xóa!" onConfirm={() => handleDelete(id)}>
                            <Button icon={<DeleteFilled />} type="text">
                            </Button>
                        </Popconfirm>
                    </div>
                ) : null,
        },
    ];
    const [filelistUrl, setFileListUrl] = useState<filePathItem[]>([])

    const handleChangeUpload: UploadProps['onChange'] = ({ fileList: newFileList }) => {
        const file = newFileList.pop();
        setLoadingUploadFile(true)
        if (file && file.originFileObj) {
            UploadImage(file.originFileObj as File)
                .then((res) => {
                    if (res) {
                        setFileListUrl((prevUrls) => [
                            ...prevUrls,
                            { FilePath: res.fileUrl }
                        ]);
                        setLoadingUploadFile(false)
                        console.log(filelistUrl);
                    }
                })
        }
    }

    const uploadButton = (
        <button style={{ border: 0, background: 'none' }} type="button">
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </button>
    );
    useEffect(() => {
        setLoadingData(true)
        GetAllTourByTourOwner()
            .then((res) => {
                if (res.succeeded) {
                    setDataSource(res.data)
                    setLoadingData(false)
                }
            })
    }, [])
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
                        loading={loadingData}
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
                onOk={handleFormSubmit}
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
                    // initialValues={userProfile}
                    // onValuesChange={handleFormChange}
                    onFinish={handleFormSubmit}
                >
                    {loadingUploadFile ? (<Spin tip="Loading" size="large"></Spin>) : (
                        <>
                            {filelistUrl.length > 0 && (

                                <Row className="formEdit__item" gutter={[16, 0]}>
                                    <Col span={24} className="formEdit__item-image">
                                        <Form.Item
                                            label="Ảnh Tour"
                                            rules={[validationRulesInstance.requireForm]}
                                        >
                                            {filelistUrl?.map((data, key) => (
                                                <Image
                                                    key={key}
                                                    width={100}
                                                    height={100}
                                                    src={data.FilePath}
                                                />
                                            ))}
                                        </Form.Item>
                                    </Col>
                                </Row>
                            )}
                            <Row className="formEdit__item" gutter={[16, 0]}>
                                <Col span={24}>
                                    <Form.Item
                                        name="images"

                                        rules={[validationRulesInstance.requireForm]}
                                    >
                                        <Upload
                                            action={""}
                                            listType="picture-card"
                                            onChange={handleChangeUpload}
                                        >
                                            {filelistUrl.length >= 6 ? null : uploadButton}
                                        </Upload>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </>
                    )}

                    <Row className="formEdit__item" gutter={[16, 0]}>
                        <Col span={24}>
                            <Form.Item<TourData> name="description" label="Mô tả" rules={[validationRulesInstance.requireForm]}>
                                <Input.TextArea autoSize={{ minRows: 3, maxRows: 5 }} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row className="formEdit__item" gutter={[16, 0]}>
                        <Col span={24}>
                            <Form.Item<TourData>
                                name="location"
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
                            <Form.Item<TourData>
                                name="name"
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
                            <Form.Item<TourData>
                                name="hotel"
                                label="Nơi nghỉ ngơi"
                                rules={[validationRulesInstance.requireForm]}
                            >
                                <Input
                                    size="large"
                                    placeholder="Vui lòng nhập nơi nghỉ ngơi"
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row className="formEdit__item" gutter={[16, 0]}>
                        <Col span={12}>
                            <Form.Item<TourData>
                                name="status"
                                label="Trạng thái Tour"
                                rules={[validationRulesInstance.requireForm]}
                            >
                                <Select
                                    placeholder="Vui lòng nhập trạng thái của tour"
                                    size="large"
                                    defaultValue={0}
                                    options={listStateTour}
                                />

                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item<TourData>
                                name="lastRegisterDate"
                                label="Ngày cuối cùng đăng kí"
                                rules={[validationRulesInstance.requireForm]}
                            >
                                <DatePicker
                                    size="large"
                                    style={{ width: "100%" }}
                                    placeholder="YYYY/MM/DD"
                                    format="YYYY/MM/DD"
                                />
                            </Form.Item>
                        </Col>

                    </Row>
                    <Row className="formEdit__item" gutter={[16, 0]}>
                        <Col span={12}>
                            <Form.Item<TourData>
                                name="startDate"
                                label="Ngày bắt đầu"
                                rules={[validationRulesInstance.requireForm]}
                            >
                                <DatePicker
                                    size="large"
                                    style={{ width: "100%" }}
                                    placeholder="YYYY/MM/DD"
                                    format="YYYY/MM/DD"
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item<TourData>
                                name="endDate"
                                label="Ngày kết thúc"
                                rules={[validationRulesInstance.requireForm]}
                            >
                                <DatePicker
                                    size="large"
                                    style={{ width: "100%" }}
                                    placeholder="YYYY/MM/DD"
                                    format="YYYY/MM/DD"
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row className="formEdit__item" gutter={[16, 0]}>
                        <Col span={12}>
                            <Form.Item<TourData>
                                name="vehicle"
                                label="Phương tiện"
                                rules={[validationRulesInstance.requireForm]}
                            >
                                <Input
                                    size="large"
                                    placeholder="Vui lòng nhập phương tiện di chuyển"
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item<TourData>
                                name="price"
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
                                label="Chi tiết chuyến đi"
                                rules={[validationRulesInstance.requireForm]}
                            >
                                <Form.List name="schedules">
                                    {(fields, { add, remove }) => (
                                        <>
                                            {fields.map(({ key, name, ...restField }) => (
                                                <Row key={key} gutter={[16, 16]} style={{ marginBottom: "16px" }}>
                                                    <Col span={6}>
                                                        <Form.Item noStyle name={[name, 'Date']}  {...restField} rules={[validationRulesInstance.requireForm, validationRulesInstance.acceptNumbersOnly]}>
                                                            <Input size="large" placeholder="Vui lòng ngày" prefix={<span className="prefix__number-title">Ngày</span>} />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col span={6}>
                                                        <Form.Item noStyle name={[name, 'startTime']} rules={[validationRulesInstance.requireForm]}>
                                                            <TimePicker size="large" style={{ width: '100%' }} placeholder="Chọn thời gian" format={"HH:mm"} />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col span={6}>
                                                        <Form.Item noStyle name={[name, 'Description']} rules={[validationRulesInstance.requireForm]}>
                                                            <Input placeholder="Mô tả" size="large" />
                                                        </Form.Item>
                                                    </Col>
                                                    <CloseOutlined
                                                        onClick={() => {
                                                            remove(name);
                                                        }}
                                                    />
                                                </Row>
                                            ))}
                                            <Form.Item>
                                                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                                    Thêm thời gian chi tiết

                                                </Button>
                                            </Form.Item>
                                        </>
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