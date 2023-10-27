import '../css/Button.css'

export const Button = ({text, isClickButton, handleClick}) => {
  return (
    <button className={isClickButton ? 'click-button' : 'reset-button' }
    onClick={handleClick}>
      {text}
    </button>
  )
}