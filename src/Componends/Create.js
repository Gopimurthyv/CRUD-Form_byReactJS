import React, { useState } from 'react'
/* import { LinkContainer } from 'react-router-bootstrap' */
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";

export default function Create() {
    const [values,setValues] = useState({
        id: '',
        name: '',
        city: ''
    })
    const n = useNavigate();
    const handleSubmit=e=>{
        e.preventDefault();
        axios.post("http://localhost:1029/Person",values)
        .then(res=>{
            n('/')
        })
    }
    return (
        <div className="d-flex justify-content-center align-items-center bs-body-color min-vh-100">
            <form className="text-center" onSubmit={handleSubmit}>
                <div className="mb-3 row">
                    <label for="personid" className="col-sm-4 col-form-label">Person ID</label>
                    <div className="col-sm-9">
                        <input type="number" className="form-control" id="personid" 
                        onChange={(e)=>setValues({...values, id: e.target.value})} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="name" className="col-sm-4 col-form-label">Full Name</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" id="name"
                        onChange={(e)=>setValues({...values, name: e.target.value})}/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="name" className="col-sm-4 col-form-label">City</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" id="name"
                        onChange={(e)=>setValues({...values, city: e.target.value})}/>
                    </div>
                </div>
                <button type="submit" class="btn btn-success">Submit</button>
                <Link  class="btn btn-danger text-white ms-3" to="/"> Back </Link> 
            </form>
        </div>
    )
}