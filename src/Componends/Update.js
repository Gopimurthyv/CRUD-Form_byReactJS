import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function Update() {
    const { id } = useParams();

    const [values,setValues] = useState({
        id: '',
        name: '',
        city: ''
    })

    useEffect(()=>{
        axios.get("http://localhost:1029/Person/" + id)
            .then(res => setValues(res.data))
            .catch(err => console.log(err));
    },[]); 

    const n = useNavigate();
    const handleSubmit=e=>{
        e.preventDefault();
        axios.put("http://localhost:1029/Person/" + id,values)
        .then(res=>{
           /*  alert("Data Updated Successfully ! ..") */
            n('/');
        })
    }
  return (
    <div className="d-flex justify-content-center align-items-center bs-body-color min-vh-100">
            <form className="text-center" onSubmit={handleSubmit}>
                <div className="mb-3 row">
                    <label htmlFor="personid" className="col-sm-4 col-form-label">Person ID</label>
                    <div className="col-sm-9">
                        <input type="number" className="form-control" name="personid" 
                        value={values.id} disabled/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="name" className="col-sm-4 col-form-label">Full Name</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" name="name"
                        value={values.name} onChange={(e)=>setValues({...values, name: e.target.value})}/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="city" className="col-sm-4 col-form-label">City</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" name="city"
                        value={values.city} onChange={(e)=>setValues({...values, city: e.target.value})}/>
                    </div>
                </div>
                <button type="submit" class="btn btn-success">Update</button>
                <Link  className="btn btn-danger text-white ms-3" to="/"> Back </Link> 
            </form>
        </div>
  )
}
