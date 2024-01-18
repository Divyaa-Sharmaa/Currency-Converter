import React, { useEffect, useState } from 'react';
import './CC_History.css';
// import { useHistory } from 'react-router-dom'

export const CC_History=()=>{

    const [historyData, setHistoryData] = useState([]);

    useEffect(() => {
      // API call karne ka code yahan hoga
      fetch('http://10.168.31.109:8080/historyCurrencies/jjaishankar')
        .then((response) => response.json())
        .then((data) => {
          setHistoryData(data); // Fetch kiya hua data state mein save karna
        })
        .catch((error) => {
          console.error('Error fetching history: ', error);
        });
    }, []); // Empty array ensures useEffect runs only once on component mount
  
    return (
      <div className='history'>
        <h1>History Page</h1>
        <ul>
          {/* Yahan historyData state se data ko map karke display kar sakte hain */}
          {historyData.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
// }