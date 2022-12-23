import classNames from "classnames/bind";
import moment from "moment";
import InfoUser from "../infoUser";
import TodoList from "../todoList";
import styles from "./dashboardContainer.module.css";

const cx = classNames.bind(styles);

function DashboardContainer() {
    const date = new Date()
    const hours = date.getHours();
    return (
        <div className={cx('wrapper')}>
            <InfoUser />
            <div className={cx('content')}>
                <div className={cx('clock')}>{moment(date).format("hh:mm a")}</div>
                <p className={cx('good-time')}>
                    {hours < 12 ? 'Good morning' :
                        hours > 18 ? 'Good EverNing' :
                            'Good Afternoon'}
                </p>
                <TodoList />
            </div>
        </div>
    )
}

export default DashboardContainer;