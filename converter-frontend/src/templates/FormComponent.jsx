import React from 'react';
import { FaExchangeAlt } from 'react-icons/fa';

const FormComponent = ({ amount, ...otherProps }) => {
    const { from, to, handleAmount, handleFrom, handleTo, HandleSubmit } = otherProps;
    return (
        <form className='converter'>
            <div className="input-field">
                <label className='name'>Amount</label><br />
                <input 
                    type="number" 
                    placeholder="1.00"
                    className='form-control'
                    name="amount" 
                    onChange={handleAmount} 
                    value={amount} 
                    required 
                />
            </div>

            <div className="dropdown-from">
                <label className='name'>From</label><br />
                <select className='background' id="currency-from" required value={from} onChange={handleFrom} name="currency_from">
                    <option id="eur" value="EUR" selected>EUR</option>
                    <option id="usd" value="USD">USD</option>
                    <option id="chf" value="CHF">CHF</option>
                </select>
            </div>

            <div className="switch">
                <span className='switcher'><FaExchangeAlt /></span>
            </div>

            <div className="dropdown-to">
                <label className='name'>To</label><br />
                <select value={to} onChange={handleTo} id="currency-to" name="currency_to">
                    <option value="EUR">EUR</option>
                    <option value="USD" defaultValue='USD'>USD</option>
                    <option value="CHF">CHF</option>
                </select>
            </div>

            <button onClick={HandleSubmit} className="convert-button">Convert</button>
        
        </form>
    )
}

export default FormComponent;