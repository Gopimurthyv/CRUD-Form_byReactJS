import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { FaPenToSquare, FaTrashCan} from 'react-icons/fa6';
import './ComStyle.css';

export default function Home() {
    const [data,setData] = useState();
    const n = useNavigate();

    const getData = async () => {
        try {
            const res = await axios.get("http://localhost:1029/Person");
            setData(res.data);
        } catch (error) {
            console.error("Error fetching news data:", error);
        }
    };
    useEffect(()=>{
        getData();
    },[])
    const handleDelete = id => {
        axios.delete(`http://localhost:1029/Person/${id}`)
        .then(res => {
            alert('Deleted Successfully');
            window.location.reload();
            n('/');
        })
    }
    return (
        <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100 '>
            <h1>Crud Form Model</h1>
            
            <div className='w-75 border shadow p-3 mb-5 bg-body-tertiary rounded p-4 white'>
                <div className='d-flex justify-content-end'>
                    <Link to="/create"><button className='btn btn-success'>Add New Data<span class="badge text-bg-secondary ms-3">+</span></button></Link>  
                </div><br/>
                <table className='table table-striped table-hover'>
                    <thead className='text-bg-primary p-3'>
                        <th>Id</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {data && data.map((item, i)=>(
                            <tr key={i} >
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.city}</td>
                                <td>
                                    <Link to={`/update/${item.id}`}><FaPenToSquare className='edit'/></Link>
                                    <span onClick={()=>handleDelete(item.id)}><FaTrashCan className='delete ms-5'/></span>
                                </td>
                            </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
