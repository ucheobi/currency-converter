import React, { useState } from "react";
import FormComponent from "./templates/FormComponent";
import './App.css';
import { getExchangeRate } from "./api";
import Layout from "./Layout";
import { Link } from "react-router-dom";

const Converter = () => {

    const [data, setData] = useState({
        result: {
            from: '1 EUR =',
            to: '1.12392 USD'
        },
        amount: 1.00,
        from: 'EUR',
        to: 'USD',
        success: false,
        error: ''
    });

    const { amount, from, to, result } = data;

    const handleAmountChange = event => {
        event.persist();
        setData(data => ({
            ...data, 
            error: false,
            amount: event.target.value
        }));
    }

    const handleFromChange = event => {
        event.persist();
        setData(data => ({
            ...data, 
            error: false,
            from: event.target.value
        }));
    }

    const handleToChange = event => {
        event.persist();
        setData(data => ({
            ...data, 
            error: false,
            to: event.target.value
        }));
    }
    
    const handleSubmit = event => {
        event.preventDefault();
   
        getExchangeRate({...data})
            .then(values => {
                setData(data => ({
                    ...data, 
                    error: false,
                    result: values,
                    success: true
                }));
            })
            .catch(err => console.log(err))
    }

    return (
        <Layout>
            <div className="converter-container">
                <span className="headline">Convert currencies in real-time.</span>
                <div className='converters'>
                    <FormComponent
                        amount={amount} 
                        from={from}
                        to={to} 
                        handleAmount={handleAmountChange} 
                        handleFrom={handleFromChange}
                        handleTo={handleToChange} 
                        HandleSubmit={handleSubmit} 
                    />
                   
                    <Link className="button-view-history" to="/exchange/history">View conversion history &gt;</Link>
                </div>
                <span className='background-upper-half'></span>

                <div className='result'>
                    <p className='result-from'>{result.from}</p>
                    <p className='result-to'>{result.to}</p>
                </div>
            </div>
        </Layout>
    )
}

export default Converter;