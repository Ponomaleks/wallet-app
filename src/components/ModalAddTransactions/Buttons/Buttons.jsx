import s from './Buttons.module.css';
import { useDispatch } from 'react-redux';
import { operationsAction } from '../../../redux/operations';

const Buttons = ()=>{
    const dispatch = useDispatch();
    function closeModalAddTransaction() {
        dispatch(operationsAction.closeModal());
      }
    return (
        <div className={s.buttonsContainer}>
            <button
                type="button"
                className={[s.buttons, s.buttonAddTransaction].join(' ')}
                onClick={true}
            >
                <p>Add Transaction</p>
            </button>
        
            <button
            type="button"
            className={[s.buttons, s.buttonCancel].join(' ')}
            onClick={closeModalAddTransaction}
            >
            <p>Cancel</p>
            </button>
        </div>
    );
}

export default Buttons;