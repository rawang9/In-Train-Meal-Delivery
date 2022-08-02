import styled from "styled-components";


export const Wrapper = styled.div`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    width: 100%;
    margin: 0 auto;
    height: 65vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
`


export const Field = styled.div`
    width: 25%;
    font-size: 1em;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    border: 1px solid #333;
    margin-left: 1rem;
    padding: 4rem 2rem 5rem 3rem;
    border-radius: 18px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.4);
    &:last-child {
        padding: 4rem 2rem 5.5rem 3rem;
    }
`

export const Input = styled.input`
    width: 10rem;
    height: 2rem;
    margin-right: 5px;
`
export const Button = styled.button`
    padding: 0.6rem rem 0.6rem 2rem;
    height: 1.5rem;
    font-size: 1rem;
    text-transform: uppercase;
    color: #fff;
    background-color: #0D6EFD;
    border: none;
    &:hover {
        background-color: #1E90FF;
        cursor: pointer;
    }
`

export const Text = styled.p`
    margin-top: 5rem;
    font-size: 22px;
    a {
        text-decoration: none;
    }
`

export const Heading = styled.h2`
    margin: 0;
    font-size: 2em;
    text-transform: uppercase;
    color: #0D6EFD;
`