import { Result } from "antd";
import Button from "../../components/button";

function ErrorPage() {
    return (
        <Result
            status="500"
            title="500"
            subTitle="Sorry, something went wrong."
            extra={<Button primary to={'/'}>Back Home</Button>}
        />
    )
}

export default ErrorPage;