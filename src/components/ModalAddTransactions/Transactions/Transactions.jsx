import React, { useCallback } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { isEmpty } from 'lodash';
// import { TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import s from './Transactions.module.css';
import ButtonSwitch from '../ButtonSwitch/ButtonSwitch';
import Buttons from '../Buttons/Buttons';
import UnstyledSelectCustomRenderValueIncome from '../SelectIncome/SelectIncome';
import UnstyledSelectCustomRenderValueExpense from '../SelectExpense/SelectExpense';
import LocalizedDatePicker from '../DatePicker/DatePicker';
import svg from '../../../images/modal-close-icon.svg';
import {
  operationsOperation,
  operationsAction,
} from '../../../redux/operations';


const operationSchema = Yup.object({
  amount: Yup.number('Enter your amount').required('Amount is required'),
  comments: Yup.string('Enter your comments for operation')
    .min(5, 'Your comments to short')
    .max(30, 'Your comments to long'),
  checked: Yup.bool(),
  category: Yup.string('Choise your category outlay').when('checked', {
    is: true,
    then: Yup.string().required('Category is required'),
  }),
});


///////////////////////////////////////

const Transactions = props => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      type: props.operationType || '',
      category: props.operationCategory || '',
      amount:
        props.operationType === 'outlay'
          ? Number(props.operationAmount?.toString().slice(1))
          : props.operationAmount || '',
      date: props.operationDate ? new Date(props.operationDate) : new Date(),
      comments: props.operationComments || '',
      checked: isChecked(props),
      selectError: '',
      operationId: props.operationId || '',
    },
    validationSchema: operationSchema,

    onSubmit: (values, { resetForm }) => {
      onFormSubmit(values, resetForm);
    },
  });

  function isChecked(props) {
    if (isEmpty(props) || props?.operationType === 'outlay') {
      return true;
    }

    return false;
  }

  const closeModal = useCallback(
    () => dispatch(operationsAction.closeModal()),
    [dispatch],
  );

  const closeChangeOperationModal = useCallback(
    () => dispatch(operationsAction.modalEditOperation()),
    [dispatch],
  );

  function onFormSubmit(values, resetForm) {
    let type = '';
    if (values.checked) {
      type = 'outlay';
    } else {
      type = 'income';
    }

    const dateSeconds = values.date.getMilliseconds();
    const dateMinutes = values.date.getMinutes();

    values.date.setMilliseconds(dateSeconds);
    values.date.setMinutes(dateMinutes);

    let newOperation = {
      type,
      amount: values.amount,
      date: Date.parse(values.date),
      comments: values.comments,
    };

    if (!isEmpty(props)) {
      if (values.category) {
        newOperation = { ...newOperation, category: values.category };

        dispatch(
          operationsOperation.changeOperation(newOperation, values.operationId),
        );

        resetForm();
        closeChangeOperationModal();
        return;
      }

      dispatch(
        operationsOperation.changeOperation(newOperation, values.operationId),
      );

      resetForm();
      closeChangeOperationModal();
      return;
    }

    if (values.category) {
      if (values.category.includes('Add')) {
        newOperation = {
          ...newOperation,
          category: values.category.slice(5, -1),
        };

        dispatch(operationsOperation.createOperation(newOperation));
        resetForm();
        closeModal();

        return;
      }

      newOperation = { ...newOperation, category: values.category };
    }

    dispatch(operationsOperation.createOperation(newOperation));

    resetForm();
    closeModal();
  }

  return (
    <>
      <button
            className={s.closeButton}
            type="button"
            onClick={closeModal}
            >
              <img src={svg} alt="" />
            </button>
      <div>
        <form className={s.form} onSubmit={formik.handleSubmit}>
          <h2 className={s.leader}>Add transaction</h2>

          <ButtonSwitch 
            name="checked"
            value={formik.values.checked}
            changeSwitch={formik.setFieldValue}
          />

          {formik.values.checked ? (
            <UnstyledSelectCustomRenderValueExpense/>
          ):(
            <UnstyledSelectCustomRenderValueIncome/>
          )}

          <LocalizedDatePicker />
          <input name="sumTransaction" placeholder="0.00" type="number" />
          <input name="commentTransaction" placeholder="Comment" type="text"/>
          <Buttons />
        </form>
      </div>
    </>
  );
}

export default Transactions;
