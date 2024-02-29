import {Typography} from '@mui/material';

import css from './Header.module.css';

import {GenreList, LogoCard, UserInfo} from '../../components';


import {useContext} from 'react';
import {ThemeContext} from '../../themes/theme-context';


const Header = () =>{
    const {theme} = useContext(ThemeContext);

return(
        <div className={css.header}>

            <div className={css.headerLogo}>
                <LogoCard />
            </div>

            <div className={css.headerMid}>
                    <div className={css.headerText}>
                            <Typography variant="h5" component="h2" color={theme.palette.primary.contrastText}>
                                MOVE MAZE
                            </Typography>
                    </div>
                    <div className={css.headerMenu}>
                        <GenreList />
                    </div>
            </div>

            <div className={css.headerProfile}>
                <UserInfo avatarUrl ={'images/move-maze-logo.png'} name ={'MOVE MAZE'} email ={'move_maze@mmh.com'}/>
            </div>
        </div>
);
}

export {Header};