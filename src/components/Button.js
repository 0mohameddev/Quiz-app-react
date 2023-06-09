import styled from 'styled-components'


export const Button = styled.button`
    border: 1px solid #fff;
    border-radius: 50px;
    padding: 15px 30px;
    text-decoration: none;
    color: #fff;
    background-color: rgba(37, 9, 66, 0.95);
    transition: 0.3s;
    font-size: 1em;
    cursor: pointer;
    outline: none;

    &:hover {
        color: white;
        background-color: #616A94;
    }
`;

export default Button
