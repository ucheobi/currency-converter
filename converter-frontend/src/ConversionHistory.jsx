import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getExchangeHistory } from './api';

import './App.css';
import Layout from './Layout';

const TableRows = ({history}) => {
    return (  
        history.map((item, index) => {
            const { date, from, to } = item;

            return (
                <tr key={index} className='conversion'>
                    <td className='value-date'>
                        <span>{ date }</span> 
                    </td>
                    <td className='value-from'>
                        <span>{ from }</span>
                    </td>
                    <td className='value-to'>
                        <span>{ to }</span>
                    </td>
                </tr>
            )
        })
        
    )
}

const ConversionHistory = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        getExchangeHistory()
            .then(item => {
                setData(item)
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <Layout>  
            <span><Link className='button-go-back' to="/exchange">&lt; Go back</Link></span>
            <table className='conversion-history'>
                <tr className='names'>
                    <th className='date'>Date</th>
                    <th className='from'>From</th>
                    <th className='to'>To</th>
                </tr>       
    
                <tbody>
                    <TableRows history={data} />
                </tbody>
            </table>
        </Layout>
    )
}

export default ConversionHistory;