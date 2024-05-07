// import { db } from '@/backend/api/firebase';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Button, Divider, Form, Input, Row, Select, message } from 'antd';
import dayjs from 'dayjs';
import { useState } from 'react';
import CustomModal from './customModal';
import addRequestDemo from '@/backend/api/addRequestDemo';


export default function AddCompanyInformation(
    {
        open,
        setOpen,
    }: {
        open: boolean,
        setOpen: any,
    }
) {
    const matches = useMediaQuery('(min-width:900px)');
    return (
        <>
            <CustomModal
                open={open}
                setOpen={setOpen}
                modalTitle='Fill Your Company Information'
                width={matches ? "50%" : "100%"}
            >
                <ModalContent setOpen={setOpen} />
            </CustomModal>
        </>
    );
}

function ModalContent(
    {
        setOpen,
    }: {
        setOpen: any,
    }
) {
    const [loading, setLoading] = useState<boolean>(false);
    const [form] = Form.useForm();

    const companySizeOpts = [
        {label:"Less than 10",value:"Less than 10"},
        {label:"Less than 50",value:"Less than 50"},
        {label:"Less than 100",value:"Less than 100"},
        {label:"Grater than 100",value:"Grater than 100"},
    ]
    const companySectorOpts = [
        {label:"Primary(raw Materials)",value:"Primary"},
        {label:"Secondary(manufacturing)",value:"Secondary"},
        {label:"Ternary(services)",value:"Ternary"},
        {label:"Quaternary(knowledge, economy, edtech, R&D)",value:"Quaternary"},
    ]

    const success = () => {
        message.success('Success.');
    };

    const error = () => {
        message.error('Something went wrong. Please Try Again.');
    };

    const formFailed = () => {
        message.error('Please Make Sure All Fields Are Filled');
    };

    const onFinish = () => {
        form.validateFields().then(async (values) => {
            setLoading(true);

            const keys: string[] = Object.keys(values);
            keys.forEach((key) => {
                if (values[key] === undefined) values[key] = null;
            });

            await addRequestDemo(values)
            .then((res:boolean)=>{
                if (res){
                    success();
                    setLoading(false);
                    setOpen(false);
                }else{
                    error();
                    setLoading(false);
                }
            })

            setLoading(false);
        }).catch((err) => {
            formFailed();
            setLoading(false);
            console.log("Validation Error: ", err);
        });
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
        formFailed();
    };

    return (
        <>
            <Divider
                style={{
                    marginTop: "1em",
                    marginBottom: "1em",
                }}
            />

            <Form
                form={form}
                labelCol={{ span: 8 }}
                autoComplete="off"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Timestamp"
                    name="timestamp"
                    rules={[{ required: true, message: "" }]}
                    initialValue={dayjs().format("MMMM DD, YYYY hh:mm A")}
                >
                    <Input readOnly />
                </Form.Item>

                <Form.Item
                    label="Company Name"
                    name="companyName"
                    rules={[{ required: true, message: "" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Company Representative Name"
                    name="companyRepresentativeName"
                    rules={[{ required: true, message: "" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: "" },{type:'email',message:'Invalid email address!'}]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Phone Number"
                    name="phoneNumber"
                    rules={[{ required: true, message: "" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Company Size"
                    name="companySize"
                    rules={[{ required: true, message: "" }]}
                >
                    <Select
                        style={{ width: "100%" }}
                        dropdownStyle={{ zIndex: 2000, }}
                        options={companySizeOpts}
                    />
                </Form.Item>

                <Form.Item
                    label="Company Sector"
                    name="companySector"
                    rules={[{ required: true, message: "" }]}
                >
                    <Select
                        style={{ width: "100%" }}
                        dropdownStyle={{ zIndex: 2000, }}
                        options={companySectorOpts}
                    />
                </Form.Item>

                <Form.Item
                    label="Expectation"
                    name="expectation"
                    rules={[{ required: true, message: "" }]}
                >
                    <Input.TextArea rows={3} />
                </Form.Item>

                <Row align={"middle"} justify={"center"}>
                    <Form.Item>
                        <Button
                            loading={loading}
                            htmlType='submit'
                        >
                            Submit
                        </Button>
                    </Form.Item>
                </Row>
            </Form>
        </>
    );
}
