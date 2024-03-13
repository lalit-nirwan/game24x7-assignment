import './GreenButton.scss'

const GreenButton = (props) => {


  return (
    <button disabled={!props.isVerifiable} className={`green_btn ${props.isVerifiable ? 'enabled_green' : 'disabled_grey'}`} onClick={()=> {console.log('clicked')}}>
      {props.btn_txt}
    </button>
  )
}

export default GreenButton
