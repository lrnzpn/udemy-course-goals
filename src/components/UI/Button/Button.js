// import './Button.css';
// so the styles will be used in the component file only (no overlapping class names/classes)
import { styled } from 'styled-components';

// using CSS modules
// this here (styles) creates unique classes/versions
import styles from './Button.module.css';

// tagged template literal, special kind of method
const StyledButton = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;
  width: 100%; {/* for smaller screens */}

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }

  {/* media queries in styled components */}
  @media (min-width: 768px) {
    {/* for bigger screens or greater than 768px */}
    width: auto;
  }

`;

const Button = props => {
  return (
    // turns it into an object
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
