import React from 'react';
import { useState } from 'react';
import axios from '../axios';
import { useNavigate, Navigate } from 'react-router-dom';

const Admin = () => {
    const navigate = useNavigate();
    const [aun, setAun] = useState('false')
    const [imageUrl, setImageUrl] = useState('');
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const inputFileRef = React.useRef(null)

    const handleChangeFile = async (event) => {
        try {
            const formData = new FormData();
            const file = event.target.files[0];
            formData.append('image', file);
            const { data } = await axios.post('/admin/slider', formData);
            setImageUrl(data.url.substr(8));
            console.log(data.url.substr(8));
        } catch (error) {
            console.warn(error)
        }
    };

    const onSubmit = async () => {
        try {
            const fields = {
                title,
                text,
                imageUrl: `${process.env.REACT_APP_API_URL}/admin/slider${imageUrl}`,
            }
            const { data } = await axios.post('/admin/news', fields)
            const id = data._id
            navigate(`/news${id}`);

        } catch (error) {
            console.warn(error)
        }
    };

    return (
        <div className='container'>
            <fieldset className='fieldSetAdnim'>
                <legend className='legendAdnim'>Изменение содержани сайта</legend>
                <h1>Заголовок новости:</h1>
                <p><input type='text' className='textAreaT' placeholder='Заголовок' value={title} onChange={e => setTitle(e.target.value)}/></p>
                <h1>Содержание:</h1>
                <p><textarea  className='textAreaA' value={text} onChange={e => setText(e.target.value)}></textarea></p>
                <h1>Картинка новости:</h1>
                <p><input type='file' ref={inputFileRef} onChange={handleChangeFile}/></p>
                {imageUrl
                ?<img src={`${process.env.REACT_APP_API_URL}/admin/slider${imageUrl}`} className="adminImg"/>
                :console.log("ksdlkf")
                }
                <p>
                    <button className='createNews' onClick={onSubmit}>
                        Создать
                    </button>
                </p>
            </fieldset>
        </div>
    )
}

export default Admin