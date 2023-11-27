
import { Typography, Button, Form } from 'antd';


const { Title } = Typography;

function CreatePage() {


    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center' }}>
                <Title level={2} > Editor</Title>
            </div>

            <Form onSubmit=''>
                <div style={{ textAlign: 'center', margin: '2rem', }}>
                    <Button
                        size="large"
                        htmlType="submit"
                        className=""
                        onSubmit=''
                    >
                        Submit
                </Button>
                </div>
            </Form>
        </div>
    )
}

export default CreatePage