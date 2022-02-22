import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import s from './Transactions.module.css';
import ButtonSwitch from '../ButtonSwitch/ButtonSwitch';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import svg from '../../../images/modal-close-icon.svg';

import DataPicker from '../DatePicker/DatePicker';




const Transactions = props => {
    

    const validationSchema = yup.object({
        amount: yup
            .number('Enter your amount')
            .required('Amount is required'),
        commentary: yup
            .string('Enter your comments for operation')
            .min(5, 'Your comments to short')
            .max(30, 'Your comments to long'),
    });

/////////////////////////////////////////////////////////////
    const formik = useFormik({
        initialValues: {
        amount: ' ',
        commentary: ' ',
        date: props.operationDate ? new Date(props.operationDate) : new Date(),
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
        console.log(values);
        alert(JSON.stringify(values, null, 2));
        console.log(values);
        },
    });
    
    return(
    <>
        <button className={s.closeButton} type="button" onClick={console.log("ok")}>
        <img src={svg} alt="" />
        </button>
        <div>
            <form onSubmit={formik.handleSubmit}>
                <h2 className={s.leader}>Add transaction</h2>
                <ButtonSwitch
                name="checked"
                value={formik.values.checked}
                changeSwitch={formik.setFieldValue}
                />
                <TextField
                fullWidth
                id="amount"
                name="amount"
                type="number"
                label="Amount"
                value={formik.values.amount}
                onChange={formik.handleChange}
                error={formik.touched.amount && Boolean(formik.errors.amount)}
                helperText={formik.touched.amount && formik.errors.amount}
                />

                <DataPicker
                name="date"
                value={formik.values.date}
                onChange={formik.setFieldValue}
                />

                <TextField
                fullWidth
                id="commentary"
                name="commentary"
                type="text"
                label="Commentary"
                value={formik.values.commentary}
                onChange={formik.handleChange}
                error={formik.touched.commentary && Boolean(formik.errors.commentary)}
                helperText={formik.touched.commentary && formik.errors.commentary}
                />
                <div className={s.buttonsContainer}>
                <button
                    type="submit"
                    className={[s.buttons, s.buttonAddTransaction].join(' ')}
                >
                    <p>Add Transaction</p>
                </button>

                <button
                    type="button"
                    className={[s.buttons, s.buttonCancel].join(' ')}
                    onClick={console.log("ok")}
                >
                    <p>Cancel</p>
                </button>
                </div>
            </form>
        </div>
    </>
    );

}

export default Transactions;