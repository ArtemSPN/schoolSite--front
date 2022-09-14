import React from 'react';
import { useState } from 'react';
import axios from '../axios';
import { useNavigate, Navigate } from 'react-router-dom';

const AdminA = () => {
    const navigate = useNavigate();
    const [log, setLog] = useState("");
    const [pas, setPas] = useState("");

    const onCheck = async () => {
        try {
            const fields = {
                pas,
            }
            console.log(fields)
            const { data } = await axios.post('/login', fields)
            console.log(data);
            if(data.auth) {
                navigate(`/admin`);
            }

        } catch (error) {
            console.warn(error)
        }
    };


  return (
    <div className='container'>
        <div className="register">
            <div className="reg_wrap">
                <fieldset className="reg_con">
                    <legend className="reg_title">Вход</legend>
                    <div className="reg_input">
                        <p className='reg_txt'>Логин:</p>
                        <p><input type='text' className='reg_in' value={log} onChange={e => setLog(e.target.value)}/></p>
                        <p className='reg_txt'>Пароль:</p>
                        <p><input type='password' className='reg_in' value={pas} onChange={e => setPas(e.target.value)}/></p>
                        <p className='reg_btn_w'><button className='reg_btn' onClick={onCheck}>Войти</button></p>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
  )
}

export default AdminA