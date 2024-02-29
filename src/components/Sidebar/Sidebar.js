import React, {useEffect, useState} from 'react';
import css from './Sidebar.module.css';
import axios from "axios"; // Вам може знадобитися відповідний імпорт для вашого CSS модуля
import config from '../../config';







const Sidebar = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        console.log("klient")
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`${config.apiBaseUrl}/api/users/get`);
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);


    return (
        <div className={css.sidebar}>
            <div className={css.sidebarItem}>Пункт меню 1</div>
            <div className={css.sidebarItem}>Пункт меню 2</div>
            {/* Додайте інші пункти меню за потребою */}
        </div>
    );
};

export { Sidebar };
