import styled from "styled-components";

function generateColor(color) {
  const colors = {
    primary: 'rgb(115, 103, 240)',
    success: 'rgb(40, 199, 111)',
    danger: 'rgb(234, 84, 85)',
    default: 'rgb(115, 103, 240)'
  }
  return colors[color] || colors['default']
}

export const FormGroup = styled.div`

  input,
  select,
  textarea {
    
  }

  input::placeholder,
  select::placeholder {
    color: transparent;
  }

   
  @media screen and (max-width: 599px) {
     
  }
`

export const Button = styled.button`
   
  &:hover {

  }
`;

export const Badge = styled.span`
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;

  background-color: ${props => generateColor(props.color)};
  color: #fff;
`
