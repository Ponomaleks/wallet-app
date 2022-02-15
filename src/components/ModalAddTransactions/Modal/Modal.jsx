import { useState } from 'react';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import s from './Modal.module.css'
import ButtonSwitch from '../ButtonSwitch/ButtonSwitch'
import Buttons from '../Buttons/Buttons'
import AddIcon from '@material-ui/icons/Add';	
import svg from '../../../images/modal-close-icon.svg';



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
@media screen and (min-width: 768px) {
    background-color: rgba(0, 0, 0, 0.5);
}
`;

function Modal() {

    const [open, setOpen]= useState(false);
    const handleOpen = ()=>setOpen(true);
    const handleClose = () => setOpen(false);
    return (
    <>
        <button className={s.button} type="button" name="addOperation" onClick={handleOpen}>
            <AddIcon className={s.buttonIcon} fontSize="large" />
        </button>

        <StyledModal
            className={s.styledModal}
            open={open}
            onClose={handleClose}
            BackdropComponent={Backdrop}
        >
            <Box className={s.box}>
                <div>
                    <button className={s.closeButton} type="button" onClick={handleClose}>
                        <img src={svg} alt=""/>
                    </button>
                    <h2 className={s.leader}>Add transaction</h2>
                    <ButtonSwitch name="checked" value={true} changeSwitch={true}/>
                    <Buttons/>
                </div>
            </Box>
        </StyledModal>
    </>
    );
}

export default Modal;