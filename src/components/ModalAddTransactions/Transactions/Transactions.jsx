/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect , useCallback } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import s from './Transactions.module.css';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ButtonSwitch from '../ButtonSwitch/ButtonSwitch';
import Box from '@mui/material/Box';
import { styled} from '@mui/system';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import svg from '../../../images/modal-close-icon.svg';
import DataPicker from '../DatePicker/DatePicker';
import {
    operationsOperation,
    operationsAction,
  } from '../../../redux/operations';

const KeyboardArrowDownSharp = styled(KeyboardArrowDownSharpIcon)`
width:40px;
height:30px;
`;


const Transactions = props => {
    const dispatch = useDispatch();

    const validationSchema = yup.object({
        amountTransaction: yup
            .number('Enter your amount')
            .min(1, 'Your comments to short')
            .required('Amount is required'),
        commentary: yup
            .string('Enter your comments for operation')
            .min(5, 'Your comments to short')
            .max(30, 'Your comments to long'),
    });


    const formik = useFormik({
        initialValues: {
        amountTransaction: props.operationAmount || '',
        commentary: props.operationCommentary || '',
        date: props.operationDate ? new Date(props.operationDate) : new Date(),
        category: props.operationCategory || '',
        typeTransaction: props.operationTypeTransaction || '',
        checked: true,
        year: props.operationYear || '',
        month: props.operationMonth || '',
        },
        validationSchema: validationSchema,
        onSubmit: (value, { resetForm }) => {
        value.month = value.date.getMonth()+1;
        value.year = value.date.getFullYear();
        value.date = value.date.toLocaleDateString();
        delete value.checked;
        dispatch(operationsOperation.createOperation(value));
        resetForm();
        closeModal();
        },
    });

    const closeModal = useCallback(
        () => dispatch(operationsAction.closeModal()),
        [dispatch],
      );

    useEffect(() => {
        if (formik.values.checked === true) {
            formik.setFieldValue('typeTransaction', "-");
        }else{
        formik.setFieldValue('typeTransaction', "+");
        }
      }, [formik.values]);

      
    return(
    <>
        <button className={s.closeButton} type="button" onClick={closeModal} >
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

                {formik.values.checked ? (
                    <Box sx={{ minWidth: 409 }}>
                        <FormControl variant="standard" sx={{mx:'65px', minWidth: 409 }}>
                        <InputLabel id="demo-simple-select-standard-label"
                            sx={{ml:'0px', mb:"2px"}}>Select a category</InputLabel>
                        <Select
                            IconComponent = {KeyboardArrowDownSharp}
                            labelId="demo-simple-select-standard-label"
                            name="category"
                            id="demo-simple-select-standard"
                            value={formik.values.category}
                            label="Category-expense"
                            onChange={formik.handleChange}
                            MenuProps={{
                                PaperProps: {
                                  sx: {
                                    "& .MuiMenuItem-root.Mui-selected": {
                                      color: "var(--costs)"
                                    },
                                    "& .MuiMenuItem-root:hover": {
                                        color: "var(--costs)",
                                        bgcolor:"white"
                                    },
                                    "& .MuiMenuItem-root.Mui-selected:hover": {
                                        color: "var(--costs)"
                                    },
                                    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.1)",
                                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                                    backdropFilter: "blur(50px)",
                                    borderRadius: "20px"
                                  }
                                }
                            }}
                        >   
                            <MenuItem value="Basic">Basic</MenuItem>
                            <MenuItem value="Food">Food</MenuItem>
                            <MenuItem value="Car">Car</MenuItem>
                            <MenuItem value="Development">Development</MenuItem>
                            <MenuItem value="Children">Children</MenuItem>
                            <MenuItem value="House">House</MenuItem>
                            <MenuItem value="Education">Education</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                        </Select>
                        </FormControl>
                    </Box>
                ) : (
                    <Box sx={{ minWidth: 409 }}>
                        <FormControl variant="standard" sx={{mx:'65px', minWidth: 409 }}>
                        <InputLabel id="demo-simple-select-standard-label" 
                            sx={{ml:'0px'}}>Select a category</InputLabel>
                        <Select
                            IconComponent = {KeyboardArrowDownSharp}
                            name="category"
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={formik.values.category}
                            label="Category-income"
                            onChange={formik.handleChange}
                            MenuProps={{
                                PaperProps: {
                                  sx: {
                                    "& .MuiMenuItem-root.Mui-selected": {
                                      color: "var(--green-color)"
                                    },
                                    "& .MuiMenuItem-root:hover": {
                                        color: "var(--green-color)",
                                        bgcolor:"white"
                                    },
                                    "& .MuiMenuItem-root.Mui-selected:hover": {
                                        color: "var(--green-color)"
                                    },
                                    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.1)",
                                    backgroundColor: "rgba(255, 255, 255, 0.4)",
                                    backdropFilter: "blur(20px)",
                                    borderRadius: "20px"
                                  }
                                }
                            }}
                        >
                            <MenuItem value="Regular income">Regular income</MenuItem>
                            <MenuItem value="Irregular income">Irregular income</MenuItem>
                        </Select>
                        </FormControl>
                    </Box>
                )}

                <div className={s.block}>
                    <TextField
                    id="amountTransaction"
                    name="amountTransaction"
                    type="number"
                    placeholder='0.00'
                    value={formik.values.amountTransaction}
                    onChange={formik.handleChange}
                    error={formik.touched.amountTransaction && Boolean(formik.errors.amountTransaction)}
                    helperText={formik.touched.amountTransaction && formik.errors.amountTransaction}
                    inputProps={{
                        style: {textAlign:"center"}
                      
                    }}
                    style ={{width: '66%'}}
                    />

                    <DataPicker
                    name="date"
                    value={formik.values.date}
                    onChange={formik.setFieldValue}
                    />
                </div>

                    <TextField
                    fullWidth
                    id="commentary"
                    name="commentary"
                    type="text"
                    autoComplete='off'
                    placeholder='Commentary'
                    value={formik.values.commentary}
                    onChange={formik.handleChange}
                    error={formik.touched.commentary && Boolean(formik.errors.commentary)}
                    helperText={formik.touched.commentary && formik.errors.commentary}
                    style ={{width: '76%', marginLeft:"65px", marginTop:"20px"}}
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
                    onClick={closeModal}
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