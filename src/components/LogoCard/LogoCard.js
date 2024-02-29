import React, {useContext} from 'react';

import css from './LogoCard.module.css';

import {AvatarImage, LanguageSwitcher, ThemeSelection} from '../../components';
import {Typography} from "@mui/material";
import {ThemeContext} from "../../themes/theme-context";

const LogoCard = () => {
    const {theme} = useContext(ThemeContext);

    return(
        <div className={css.logoCard}>
            <AvatarImage avatarUrl = {'images/move-maze-logo.png'} />
            <div className={css.logoCardText}>
                <Typography  component={theme.components.MuiTypography.defaultProps.variantMapping.subtitle1} color={theme.palette.primary.contrastText}>
                    <br/>
                    грай-рушай
                </Typography>
            </div>
            <div className={css.settingItem}>
                <ThemeSelection />
            </div>
            <div className={css.settingItem}>
                <LanguageSwitcher />
            </div>
        </div>
    );
};

export {LogoCard};