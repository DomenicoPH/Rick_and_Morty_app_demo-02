import '../assets/styles/components/_Button.scss'


const Button = (props) => {

    let buttonStyles;

    switch(props.type){
        case 'type-1':
            buttonStyles = 'button-type-1';
            break;
        case 'type-2':
            buttonStyles = 'button-type-2';
            break;
        case 'type-3':
            buttonStyles = 'button-type-3';
            break;
        case 'type-4':
            buttonStyles = 'button-type-4';
            break;
        case 'type-nav':
            buttonStyles = 'button-type-nav';
            break;
        default:
            buttonStyles = 'button-default';
    }

    return(
        <button className={`button ${buttonStyles}`} onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export default Button;