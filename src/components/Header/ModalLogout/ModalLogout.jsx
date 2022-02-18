import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import s from './ModalLogout.module.css';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../../redux/auth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const LogoutModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={handleOpen}
        className={s.btnLogout}
        name="addOperation"
        type="button"
      >
        <ExitToAppIcon className={s.icon_btn_logout} />
        <span className={s.title_exit}>Logout</span>
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure that you want logout?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography>
          <div className={s.buttonsContainer}>
            <button
              type="button"
              className={[s.buttons, s.buttonAddTransaction].join(' ')}
              onClick={() => dispatch(authOperations.logout())}
            >
              <p>LOGOUT</p>
            </button>

            <button
              type="button"
              className={[s.buttons, s.buttonCancel].join(' ')}
              onClick={handleClose}
            >
              <p>CANCEL</p>
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
export default LogoutModal;
