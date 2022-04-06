import styled from 'styled-components';



export const Header = styled.header`
    display:flex;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    button{
    display: flex;
    align-items: center;
    background-color: #4BA397;
    padding: 5px 10px;
    border-radius: 15px;
    border: none;
    color: white;
    font-size: 1.2em;
    font-weight: bold;
    cursor: pointer;
    transition: 300ms ease;
    :hover {
        background-color: #4BA360;
        box-shadow: 2px 2px 6px gray;
        
    };
}
    .logo {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .verde {
        color: #4BA397;
        
    }

`
