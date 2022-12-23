import classNames from "classnames/bind";
import styles from './todoList.module.css';
import { MdAddCircleOutline } from 'react-icons/md'
import Button from "../button";

const cx = classNames.bind(styles);

function TodoList() {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('header')}>Tasks List</p>
            <div className={cx('box-todo')}>
                <div className={cx('box-header')}>
                    <p className={cx('box-name')}>Tasks List</p>
                    <Button icon to={'/add'}>
                        <MdAddCircleOutline />
                    </Button>
                </div>
                <div className={cx('box-content')}>
                    <div className={cx('items')}>
                        <input type={'checkbox'} />
                        <p className={cx('work')}> hellloo</p>
                    </div>
                    <div className={cx('items')}>
                        <input type={'checkbox'} />
                        <p className={cx('work')}> hellloo</p>
                    </div>
                    <div className={cx('items')}>
                        <input type={'checkbox'} />
                        <p className={cx('work')}> hellloo</p>
                    </div>
                    <div className={cx('items')}>
                        <input type={'checkbox'} />
                        <p className={cx('work')}> hellloo</p>
                    </div>
                    <div className={cx('items')}>
                        <input type={'checkbox'} />
                        <p className={cx('work')}> hellloo</p>
                    </div>
                    <div className={cx('items')}>
                        <input type={'checkbox'} />
                        <p className={cx('work')}> hellloo</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoList;