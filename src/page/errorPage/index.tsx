import { Result } from "antd";
import Button from "../../components/button";

function ErrorPage() {
    return (
        <Result
            status="500"
            title="500"
            subTitle="Coming Soon!."
            extra={<Button primary to={'/'}>Back Home</Button>}
        />
    )
}

export default ErrorPage;