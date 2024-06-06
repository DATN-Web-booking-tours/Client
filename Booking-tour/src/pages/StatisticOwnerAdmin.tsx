import {
    Input,
    Form,
    Button,
    DatePicker,
    Table,
    TableColumnsType,
    TableProps,
    Avatar,
    Popconfirm,
    Modal,
    Row,
    Col,
    Card,
    Statistic,
    Select,
    Tag,
} from "antd";
import {
    EnvironmentFilled,
    SearchOutlined,
    DeleteFilled,
    EyeOutlined,
    SkinFilled,
    UserOutlined,
    CheckOutlined
} from "@ant-design/icons";
import { useState } from "react";
import ImgEmpty from "@/components/icon/iconEmpty";

interface DataType {
    key: string;
    avt: string;
    name: string;
    phone: string;
    email: string;
    location: string;
    birthday: string;
    gender: string;
    status: string;
}
interface OptionType {
    label: string;
    value: string;
}
type OnChange = NonNullable<TableProps<DataType>["onChange"]>;
type Filters = Parameters<OnChange>[1];
type GetSingle<T> = T extends (infer U)[] ? U : never;
type Sorts = GetSingle<Parameters<OnChange>[2]>;

const StatisticOwnerAdmin = () => {
    const [formEdit] = Form.useForm();
    const [open, setOpen] = useState(false);
    const statusUser: OptionType[] = [
        { label: "Đang chờ duyệt", value: "Approved" },
        { label: "Đã duyệt", value: "Waiting" },
    ];
    const [dataSource, setDataSource] = useState<DataType[]>([
        {
            key: "1",

            avt: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-1/368021133_1726419231151489_6853635133763153961_n.jpg?stp=dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXc4Y4B9SC2Fny3yA8N-CUBC9cMpZD2bwEL1wylkPZvD4bJYKXx2IP8953lqBULM1Rvddh6Q3aEhnBc6AwmJmM&_nc_ohc=GbGyntddSokQ7kNvgH72wpj&_nc_ht=scontent.fsgn2-3.fna&oh=00_AYBwycwtcZo1foqIxawptm7QEYZs546YxJAMHDh9Vw6lzw&oe=665C9498",
            name: "Trần Trung Hiếu",
            phone: "92839212",
            email: "hieupro987074@gmail.com",
            location: "Quảng Trị",
            birthday: "20 Oct 2023",
            gender: "Nam",
            status: "Đã Duyệt",

        },
        {
            key: "2",

            avt: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-1/368021133_1726419231151489_6853635133763153961_n.jpg?stp=dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXc4Y4B9SC2Fny3yA8N-CUBC9cMpZD2bwEL1wylkPZvD4bJYKXx2IP8953lqBULM1Rvddh6Q3aEhnBc6AwmJmM&_nc_ohc=GbGyntddSokQ7kNvgH72wpj&_nc_ht=scontent.fsgn2-3.fna&oh=00_AYBwycwtcZo1foqIxawptm7QEYZs546YxJAMHDh9Vw6lzw&oe=665C9498",
            name: "Nguyễn Văn An",
            phone: "12345678",
            email: "an.nguyen@gmail.com",
            location: "Hà Nội",
            birthday: "15 Aug 1995",
            gender: "Nam",
            status: "Đã Duyệt",
        },
        {
            key: "3",

            avt: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-1/368021133_1726419231151489_6853635133763153961_n.jpg?stp=dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXc4Y4B9SC2Fny3yA8N-CUBC9cMpZD2bwEL1wylkPZvD4bJYKXx2IP8953lqBULM1Rvddh6Q3aEhnBc6AwmJmM&_nc_ohc=GbGyntddSokQ7kNvgH72wpj&_nc_ht=scontent.fsgn2-3.fna&oh=00_AYBwycwtcZo1foqIxawptm7QEYZs546YxJAMHDh9Vw6lzw&oe=665C9498",
            name: "Lê Thị Mai",
            phone: "87654321",
            email: "mai.le@gmail.com",
            location: "Đà Nẵng",
            birthday: "30 Dec 1992",
            gender: "Nam",
            status: "Đã Duyệt",
        },
        {
            key: "4",

            avt: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-1/368021133_1726419231151489_6853635133763153961_n.jpg?stp=dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXc4Y4B9SC2Fny3yA8N-CUBC9cMpZD2bwEL1wylkPZvD4bJYKXx2IP8953lqBULM1Rvddh6Q3aEhnBc6AwmJmM&_nc_ohc=GbGyntddSokQ7kNvgH72wpj&_nc_ht=scontent.fsgn2-3.fna&oh=00_AYBwycwtcZo1foqIxawptm7QEYZs546YxJAMHDh9Vw6lzw&oe=665C9498",
            name: "Phạm Thị Hoa",
            phone: "11223344",
            email: "hoa.pham@gmail.com",
            location: "Hải Phòng",
            birthday: "01 Mar 1985",
            gender: "Nam",
            status: "Đã Duyệt",
        },
        {
            key: "5",

            avt: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-1/368021133_1726419231151489_6853635133763153961_n.jpg?stp=dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXc4Y4B9SC2Fny3yA8N-CUBC9cMpZD2bwEL1wylkPZvD4bJYKXx2IP8953lqBULM1Rvddh6Q3aEhnBc6AwmJmM&_nc_ohc=GbGyntddSokQ7kNvgH72wpj&_nc_ht=scontent.fsgn2-3.fna&oh=00_AYBwycwtcZo1foqIxawptm7QEYZs546YxJAMHDh9Vw6lzw&oe=665C9498",
            name: "Trần Văn Bình",
            phone: "55667788",
            email: "binh.tran@gmail.com",
            location: "Nghệ An",
            birthday: "20 Apr 1990",
            gender: "Nữ",
            status: "Đã Duyệt",
        },
        {
            key: "6",

            avt: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-1/368021133_1726419231151489_6853635133763153961_n.jpg?stp=dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXc4Y4B9SC2Fny3yA8N-CUBC9cMpZD2bwEL1wylkPZvD4bJYKXx2IP8953lqBULM1Rvddh6Q3aEhnBc6AwmJmM&_nc_ohc=GbGyntddSokQ7kNvgH72wpj&_nc_ht=scontent.fsgn2-3.fna&oh=00_AYBwycwtcZo1foqIxawptm7QEYZs546YxJAMHDh9Vw6lzw&oe=665C9498",
            name: "Nguyễn Thị Hạnh",
            phone: "66778899",
            email: "hanh.nguyen@gmail.com",
            location: "Nha Trang",
            birthday: "14 Nov 1988",
            gender: "Nam",
            status: "Đã Duyệt",
        },
        {
            key: "7",

            avt: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-1/368021133_1726419231151489_6853635133763153961_n.jpg?stp=dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXc4Y4B9SC2Fny3yA8N-CUBC9cMpZD2bwEL1wylkPZvD4bJYKXx2IP8953lqBULM1Rvddh6Q3aEhnBc6AwmJmM&_nc_ohc=GbGyntddSokQ7kNvgH72wpj&_nc_ht=scontent.fsgn2-3.fna&oh=00_AYBwycwtcZo1foqIxawptm7QEYZs546YxJAMHDh9Vw6lzw&oe=665C9498",
            name: "Hoàng Văn Nam",
            phone: "99887766",
            email: "nam.hoang@gmail.com",
            location: "Hồ Chí Minh",
            birthday: "22 Feb 1978",
            gender: "Nữ",
            status: "Đang chờ duyệt",
        },
        {
            key: "8",

            avt: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-1/368021133_1726419231151489_6853635133763153961_n.jpg?stp=dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXc4Y4B9SC2Fny3yA8N-CUBC9cMpZD2bwEL1wylkPZvD4bJYKXx2IP8953lqBULM1Rvddh6Q3aEhnBc6AwmJmM&_nc_ohc=GbGyntddSokQ7kNvgH72wpj&_nc_ht=scontent.fsgn2-3.fna&oh=00_AYBwycwtcZo1foqIxawptm7QEYZs546YxJAMHDh9Vw6lzw&oe=665C9498",
            name: "Đỗ Thị Lan",
            phone: "33445566",
            email: "lan.do@gmail.com",
            location: "Cần Thơ",
            birthday: "11 Jul 2000",
            gender: "Nữ",
            status: "Đang chờ duyệt",
        },
        {
            key: "9",

            avt: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-1/368021133_1726419231151489_6853635133763153961_n.jpg?stp=dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXc4Y4B9SC2Fny3yA8N-CUBC9cMpZD2bwEL1wylkPZvD4bJYKXx2IP8953lqBULM1Rvddh6Q3aEhnBc6AwmJmM&_nc_ohc=GbGyntddSokQ7kNvgH72wpj&_nc_ht=scontent.fsgn2-3.fna&oh=00_AYBwycwtcZo1foqIxawptm7QEYZs546YxJAMHDh9Vw6lzw&oe=665C9498",
            name: "Trương Văn Tâm",
            phone: "22113344",
            email: "tam.truong@gmail.com",
            location: "Bắc Ninh",
            birthday: "18 Sep 1983",
            gender: "Nam",
            status: "Đang chờ duyệt",
        },
        {
            key: "10",

            avt: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-1/368021133_1726419231151489_6853635133763153961_n.jpg?stp=dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXc4Y4B9SC2Fny3yA8N-CUBC9cMpZD2bwEL1wylkPZvD4bJYKXx2IP8953lqBULM1Rvddh6Q3aEhnBc6AwmJmM&_nc_ohc=GbGyntddSokQ7kNvgH72wpj&_nc_ht=scontent.fsgn2-3.fna&oh=00_AYBwycwtcZo1foqIxawptm7QEYZs546YxJAMHDh9Vw6lzw&oe=665C9498",
            name: "Bùi Thị Minh",
            phone: "77889900",
            email: "minh.bui@gmail.com",
            location: "Huế",
            birthday: "29 Jan 1996",
            gender: "Nữ",
            status: "Đang chờ duyệt",
        },
        {
            key: "11",

            avt: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-1/368021133_1726419231151489_6853635133763153961_n.jpg?stp=dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXc4Y4B9SC2Fny3yA8N-CUBC9cMpZD2bwEL1wylkPZvD4bJYKXx2IP8953lqBULM1Rvddh6Q3aEhnBc6AwmJmM&_nc_ohc=GbGyntddSokQ7kNvgH72wpj&_nc_ht=scontent.fsgn2-3.fna&oh=00_AYBwycwtcZo1foqIxawptm7QEYZs546YxJAMHDh9Vw6lzw&oe=665C9498",
            name: "Vũ Thị Hà",
            phone: "44332211",
            email: "ha.vu@gmail.com",
            location: "Quảng Nam",
            birthday: "17 Jun 1989",
            gender: "Nữ",
            status: "Đang chờ duyệt",
        }
    ]);
    const [sortedInfo, setSortedInfo] = useState<Sorts>({});
    const [filteredInfo, setFilteredInfo] = useState<Filters>({});
    const showModal = () => {
        setOpen(true);
    };
    const handleCancel = () => {
        setOpen(false);
    };

    const handleChange: OnChange = (pagination, filters, sorter) => {
        setFilteredInfo(filters);
        setSortedInfo(sorter as Sorts);
        console.log(pagination);
        console.log(filteredInfo);
    };
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
            title: "Họ và tên",
            dataIndex: "name",
            key: "name",
            onFilter: (value, record) => record.name.includes(value as string),
            sorter: (a, b) => a.name.localeCompare(b.name, 'vi', { sensitivity: 'base' }),
            sortOrder: sortedInfo.columnKey === "name" ? sortedInfo.order : null,
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
            title: "Email",
            dataIndex: "email",
            key: "email",
            onFilter: (value, record) => record.email.includes(value as string),
            sorter: (a, b) => a.email.localeCompare(b.email, 'vi', { sensitivity: 'base' }),
            sortOrder: sortedInfo.columnKey === "email" ? sortedInfo.order : null,
            ellipsis: true,
        },
        {
            title: "Số điện thoại",
            dataIndex: "phone",
            key: "phone",
            onFilter: (value, record) => record.phone.includes(value as string),
            sorter: (a, b) => a.phone.localeCompare(b.phone, 'vi', { sensitivity: 'base' }),
            sortOrder: sortedInfo.columnKey === "phone" ? sortedInfo.order : null,
            ellipsis: true,
        },
        {
            title: "Ngày sinh",
            dataIndex: "birthday",
            key: "birthday",
            onFilter: (value, record) => record.birthday.includes(value as string),
            sorter: (a, b) => {
                const dateA = new Date(a.birthday).getTime();
                const dateB = new Date(b.birthday).getTime();
                return dateA - dateB;
            },
            sortOrder: sortedInfo.columnKey === "birthday" ? sortedInfo.order : null,
            ellipsis: true,
        },
        {
            title: 'Hành động',
            dataIndex: 'action',
            render: (_, record) =>
                dataSource.length >= 1 ? (
                    <div className="action__table">
                        <Button icon={<EyeOutlined />} type="text" onClick={showModal}>
                        </Button>
                        <Popconfirm title="Xác nhận xóa!" onConfirm={() => handleDelete(record.key)}>
                            <Button icon={<DeleteFilled />} type="text">
                            </Button>
                        </Popconfirm>
                        {record.status === "Đang chờ duyệt" && (

                            <Popconfirm title="Xác nhận cấp phép!">
                                <Button icon={<CheckOutlined />} type="text">
                                </Button>
                            </Popconfirm>

                        )}
                    </div>
                ) : null,
        },
    ];

    return (
        <div className="statisticAdmin__container">
            <Form
                name="searchForm"
                autoComplete="off"
                className="search__form"
                layout="vertical"
            >
                <Row className="statistic__admin" justify={"center"}>
                    <Col span={6} className="statistic__admin-item">
                        <Card>
                            <Statistic
                                title="Tổng số Tour Owner"
                                value={300}
                                valueStyle={{ color: '#01B7F2' }}
                                prefix={<UserOutlined />}
                                suffix="Người"
                            />
                        </Card>
                    </Col>
                    <Col span={6} className="statistic__admin-item">
                        <Card>
                            <Statistic
                                title="Số Tour Owner Được cấp phép"
                                value={300}
                                valueStyle={{ color: '#3f8600' }}
                                prefix={<UserOutlined />}
                                suffix="Người"
                            />
                        </Card>
                    </Col>
                    <Col span={6} className="statistic__admin-item">
                        <Card>
                            <Statistic
                                title="Số Tour Owner chờ phê duyệt"
                                value={300}
                                valueStyle={{ color: '#cf1322' }}
                                prefix={<UserOutlined />}
                                suffix="Người"
                            />
                        </Card>
                    </Col>
                </Row>
                <div className="search__form-admin">
                    <Form.Item noStyle name="nameCustomer">
                        <Input
                            size="large"
                            placeholder="Nhập tên Tour Owner"
                            prefix={<EnvironmentFilled />}
                            style={{
                                borderColor: "#79747E",
                                maxWidth: "250px",
                                minWidth: "200px",
                            }}
                        />
                    </Form.Item>
                    <Form.Item noStyle name="status">
                        <Select
                            size="large"
                            allowClear
                            options={statusUser}
                            placeholder="Chọn theo trạng thái"
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
                </div>
                <div className="data__statistic">
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
                onCancel={handleCancel}
                footer={null}
                cancelText="Trở về"
                width={"50%"}
                className="modal__container"
            >
                <div className="user__profile">
                    <div className="user__profile-avt">
                        <Avatar
                            size={{ xs: 150, sm: 150, md: 150, lg: 150, xl: 150, xxl: 150 }}
                            src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-1/368021133_1726419231151489_6853635133763153961_n.jpg?stp=dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXc4Y4B9SC2Fny3yA8N-CUBC9cMpZD2bwEL1wylkPZvD4bJYKXx2IP8953lqBULM1Rvddh6Q3aEhnBc6AwmJmM&_nc_ohc=GbGyntddSokQ7kNvgH72wpj&_nc_ht=scontent.fsgn2-3.fna&oh=00_AYBwycwtcZo1foqIxawptm7QEYZs546YxJAMHDh9Vw6lzw&oe=665C9498"
                        />
                    </div>
                    <div className="user__profile-name">Trần Trung Hiếu</div>
                    <div className="user__profile-role">
                        <SkinFilled />
                        <div className="user__profile-role-title">Tour Owner</div>
                    </div>
                </div>

                <Row className="user__detailprofile">
                    <Col span={24}>
                        <Form
                            name="information__form"
                            autoComplete="off"
                            layout="vertical"
                            form={formEdit}
                        >
                            <Row gutter={[16, 0]}>
                                <Col span={12}>
                                    <Form.Item
                                        name="Name"
                                        label="Họ Và Tên"
                                    >
                                        <Input
                                            size="large"
                                            disabled
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        name="Phone"
                                        label="Điện Thoại"
                                    >
                                        <Input
                                            disabled
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
                                    >
                                        <Input
                                            disabled
                                            size="large"
                                            placeholder="Vui lòng nhập email của bạn"
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        name="Address"
                                        label="Địa chỉ"
                                    >
                                        <Input disabled size="large" placeholder="Vui lòng nhập địa chỉ" />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={[16, 0]}>
                                <Col span={12}>
                                    <Form.Item
                                        name="Birthday"
                                        label="Ngày Sinh"
                                    >
                                        <DatePicker
                                            disabled
                                            size="large"
                                            style={{ width: "100%" }}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        name="Gender"
                                        label="Giới tính"
                                    >
                                        <Input
                                            disabled
                                            size="large"
                                        />
                                    </Form.Item>
                                </Col>

                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Modal>
        </div>
    )
}

export default StatisticOwnerAdmin