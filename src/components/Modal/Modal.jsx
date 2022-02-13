import { useState } from 'react';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import s from './Modal.module.css'
import { Button } from '@mui/material';
	
import svg from '../../images/modal-close-icon.svg';

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
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

function Modal() {
    const [open, setOpen]= useState(false);
    const handleToggle = ()=>{
    setOpen(true);
    }
    const handleClose = () => setOpen(false);
    return (
    <>
        <button type="button" onClick={handleToggle}>
            Open modal
        </button>
        <StyledModal
            open={open}
            onClose={handleClose}
            BackdropComponent={Backdrop}
        >
            <Box className={s.box}>
                <div>
                    <button className={s.closeButton} type="button" onClick={handleClose}>
                        <img src={svg} alt=""/>
                    </button>
                    <h2>Text in a modal</h2>
                        <div className={s.radio}>
                            <input className={s.radioInput} type="radio" value="option1" name="myRadio" id="myRadio1"></input>
                            <label className={s.radioLabel} for="myRadio1">op</label>
                            <input className={s.radioInput} type="radio" value="option2" name="myRadio" id="myRadio2"></input>
                            <label className={s.radioLabel} for="myRadio2">op</label>
                        </div>
                    <p>Aliquid amet deserunt earum!</p>
                </div>
            </Box>
        </StyledModal>
    </>
    );
}

export default Modal;