import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function Read() {
    const[data,setData] = useState();
    const {id}= useParams;
  return (
    <div className='d-flex w-100 h-100 justify-content-center align-items-center bg-light'>
        <div className='w-50 border shadow rounded px-5 pt-5 pb-5 bg-white'>
            <h3>Details of Person</h3>
            <div className='mb-2'>
                <strong>ID: {data.id}</strong>
            </div>
            <div className='mb-2'>
                <strong>Name: {data.name}</strong>
            </div>
            <div className='mb-3'>
                <strong>City: {data.city}</strong>
            </div>
        </div>
        <Link class="btn btn-success" to={`/update/${id}`}>Update</Link>    
        <Link class="btn btn-danger text-white ms-3" to={'/'}>Back</Link>    
    </div>
  )
}
