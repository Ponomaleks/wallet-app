import s from './Buttons.module.css';

const Buttons = ()=>{
    return (
    <>
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
        onClick={false}
        >
        <p>Cancel</p>
        </button>
    </div>
    </>
    );
}

export default Buttons;