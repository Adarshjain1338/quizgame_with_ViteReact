import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function QuizCategoryType() {
    const navigate = useNavigate();

    function navigator(){
        // navigate('/Quizgame');
    }

  return (
    <button className='btn btn-outline-primary' onClick={navigator}>navigate me</button>
  )
}
