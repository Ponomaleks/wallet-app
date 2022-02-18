import React from 'react';
import Switch from 'react-switch';
import s from './ButtonSwitch.module.css';
import plus from '../../../images/plus-icon.svg';
import minus from '../../../images/minus-icon.svg';

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
                <div className={s.buttonModalIncome }>
                  <img className={s.buttonModalIncome_svg} src={plus} alt=""/>
                </div>
              }
              checkedHandleIcon={
                <div className={s.buttonModalOutlay}>
                  <img className={s.buttonModalOutlay_svg} src={minus} alt=""/>
                </div>
              }
              border="none"
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
          <h3 className={value ? s.outlayActive : s.outlayNoActive}>Expense</h3>
        </div>
      );
}

export default ButtonSwitch;