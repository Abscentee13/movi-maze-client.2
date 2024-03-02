import css from './MainMenu.module.css';

import { useContext } from 'react';
import { menuItems } from './menuItem';


import { Button, Icon } from '../../components';
import { LanguageContext } from "../../language/language-context";
import {Link} from "react-router-dom";

const MainMenu = () => {

    const language = useContext(LanguageContext);

    return (
        <div>
            <div className={css.mainMenuBlock}>
                {menuItems.map(menuItem => (
                    <Link to={menuItem.link}>
                        <Button key={menuItem.id} style={{ marginRight: '20px' }}>
                            <Icon name="inbox" />
                            <span> {menuItem.label[language.language]} </span>
                        </Button>
                    </Link>
                ))}
            </div>

        </div>
    );
}

export {MainMenu};