import { useState,useEffect } from 'react'
import BarChart from './BarChart'

const Container = () => {
    const [data,setData]=useState([]);
    const fetchData= ()=>{
        fetch('data.json').then(res=>res.json()).then(data=>setData(data));
        
        }
    useEffect(()=>{
    fetchData();
    },[]);  
  
  
return (
    <div className='container'>
        <p className='container-title'>Spending - Last 7 Days</p>
        <BarChart data={data}/>
    <hr className="h-divider"/>
        <div className='footer'>
           <div className='piece'> 
            <p className='total-label'>Total this month</p>
            <p className='total'>$478.33</p>
           </div>
           <div className='piece right-percent'>
           <p className='percent'>+2.4%</p>
            <p className='total-label'>from last month</p>
           </div>

        </div>
    </div>
  )
}

export default Container
