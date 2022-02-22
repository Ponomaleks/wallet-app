import React from 'react';
import s from './UserMenu.module.css';
import defaultAvatar from '../../../images/icon.png';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import authSelectors from '../../../redux/auth/auth-selectors';
import LogoutModal from '../ModalLogout/ModalLogout';

const useStyles = makeStyles(theme => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  input: {
    display: 'none',
  },
}));

const UserMenu = () => {
  const name = useSelector(authSelectors.getUsername);

  const classes = useStyles();

  return (
    <div className={s.header_container}>
      <div className={s.img_container}>
        <Avatar
          src={defaultAvatar}
          alt="Remy Sharp"
          className={classes.small}
        />
      </div>
      <span className={s.user_name_text}>{name}</span>
      <LogoutModal />
    </div>
  );
};

export default UserMenu;
