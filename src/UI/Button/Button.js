import styled from './Button.module.css';

const Button = props => {
    return <button disabled={props.disabled} onClick={props.clickHandler} className={styled.button}>{props.children}{props.value}</button>;
}

export default Button;