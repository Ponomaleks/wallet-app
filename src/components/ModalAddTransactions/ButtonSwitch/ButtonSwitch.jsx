import React from 'react';
import Switch from 'react-switch';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import s from './ButtonSwitch.module.css';

function ButtonSwitch({ value, changeSwitch }) {
    return (
        <div className={s.container}>
          <h3 className={!value ? s.incomeActive : s.incomeNoActive}>Income</h3>
          <label className={s.switchContainer}>
            <Switch
              type="checkbox"
              className={s.switch}
              onChange={status => {
                changeSwitch('checked', status);
                changeSwitch('category', '');
              }}
              checked={value}
              uncheckedHandleIcon={
                <AddCircleIcon
                  style={{ width: 56, height: 56 }}
                  className={s.buttonModalIncome}
                />
              }
              checkedHandleIcon={
                <RemoveCircleIcon
                  style={{ width: 56, height: 56 }}
                  className={s.buttonModalOutlay}
                />
              }
              height={40}
              width={80}
              handleDiameter={40}
              offHandleColor="#fff"
              onHandleColor="#fff"
              borderRadius={30}
              offColor="#fff"
              onColor="#fff"
            />
          </label>
          <h3 className={value ? s.outlayActive : s.outlayNoActive}>Outlay</h3>
        </div>
      );
}

export default ButtonSwitch;