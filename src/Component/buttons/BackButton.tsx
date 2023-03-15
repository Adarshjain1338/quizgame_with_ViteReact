import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BackButton() {
    const navigate = useNavigate();
    function backPageOpen(){
		navigate(-1);
	
    }
  return (
    <button className='btn btn-secondary w-25' type='button' onClick={backPageOpen}>Back</button>
  )
}
