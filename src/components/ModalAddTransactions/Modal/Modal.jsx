import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import s from './Modal.module.css';
import AddIcon from '@material-ui/icons/Add';
import Transactions from '../Transactions'

import {
  operationsSelectors,
  operationsAction,
} from '../../../redux/operations';

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  -webkit-tap-highlight-color: transparent;
  background-color: none;
  onClick={closeModal};
  @media screen and (min-width: 320px) {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;


const Modal = () =>{
  const modal = useSelector(operationsSelectors.getModalValue);
  const dispatch = useDispatch();

  const closeModal = useCallback(
    () => dispatch(operationsAction.closeModal()),
    [dispatch],
  );

  const openModal = useCallback(
    () => dispatch(operationsAction.openModal()),
    [dispatch],
  );

  return (
    <>
      <button
        className={s.button}
        type="button"
        name="addOperation"
        onClick={openModal}
      >
        <AddIcon className={s.buttonIcon} fontSize="large" />
      </button>

      <StyledModal
        className={s.styledModal}
        open={modal}
        BackdropComponent={Backdrop}
        onClose={closeModal}
        closeAfterTransition
      >
        <Box className={s.box}>
          <Transactions/>
        </Box>
      </StyledModal>
    </>
  );
}

export default Modal;
