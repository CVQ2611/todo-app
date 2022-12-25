import classNames from "classnames/bind";
import styles from './todoList.module.css';
import { MdAddCircleOutline } from 'react-icons/md'
import Button from "../button";
import { useEffect, useState } from "react";
import { getData } from "../../services/getData";
import moment from "moment";

const cx = classNames.bind(styles);

function TodoList() {
    const [listTodo, setListTodo] = useState<any>([])
    useEffect(() => {
        const getDataTodo = async () => {
            const res = await getData()
            setListTodo(res.data);
        }
        getDataTodo()
    }, [])

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
                    {listTodo?.map((todo: any) => {
                        return (
                            <div className={cx('items')} key={todo.id}>
                                <input type={'checkbox'} defaultChecked={todo.completed} />
                                <p className={cx('work')}>{todo.name} create at {moment(todo.createdAt).format('hh:mm a')}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default TodoList;