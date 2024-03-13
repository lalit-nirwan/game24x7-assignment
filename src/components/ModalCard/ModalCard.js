import React from 'react'
import './ModalCard.scss'
import GreenButton from '../GreenButton/GreenButton'

import { useState, useEffect } from 'react'

const ModalCard = (props) => {

  const [isVerifiable, setIsVerifiable] = useState(false);

  const [count, setCount] = useState(0);
  const [panNum, setPanNum] = useState('');

  const inputHandler = (e) => {
    let pan_value = e.target.value.toUpperCase();
    setPanNum(pan_value)
    setCount(pan_value.length)
  }

  useEffect(() => {
    if (count === 10) {
      setIsVerifiable(true)
    }
    else {
      setIsVerifiable(false)
    }
  }, [count])


  return (
    <div className='modal-card'>
      <div className='card_header'>
        <div className='card_header_left'>
          <img src="/lock_icon.png" alt="" className='lock_icon' />
          <div className='header_disclaimer'>
            <p className='pan_heading'><b>PAN Verification</b></p>
            <p className='disclaimer_grey_txt'>As per regulations, it is mandatory to verify your PAN details.</p>
          </div>
        </div>
        <button className='close_btn'><img src="/close_icon.png" alt="" onClick={props.closeHandler}/></button>
      </div>

      <div className='card_content'>
        <div>
          <img src="/pan_card_demo.png" alt="" className='pan_image' />
        </div>
        <div className='input_container'>
          <div>
            <div className="form-group">
              <label>Enter 10-digit PAN</label>
              <input id='pan_input' value={panNum} maxLength='10' type="text" className="form-control input-lg" onChange={inputHandler} />
            </div>
            <div className='input_count'>{count}/10</div>
          </div>
          <GreenButton isVerifiable={isVerifiable} btn_txt='VERIFY' />
        </div>
      </div>
    </div>
  )
}

export default ModalCard
