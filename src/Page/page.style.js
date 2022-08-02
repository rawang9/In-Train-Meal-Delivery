import styled from "styled-components";

    export const Wrapper = styled.div`
        width: 70%;
        margin: 0 auto;
        `;
    export const Details = styled.table`
        width: 100%;
        font-size: 2.2rem;
        font-weight: 400;
        border-collapse: collapse;
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
        letter-spacing: 1px;
        font-family: monospace;
        tbody {
        tr {
            td {
            border: 1px solid black;
            &:last-child {
                border: none;
            }
            }
        }
        }
        `;

    export const Name = styled.td`
        text-align: left;
        padding: 0px 0 2px 10px;
        width: 50%;
        `;




    export const Role = styled.td`
        text-align: left;
        padding: 0px 0 2px 10px;
        width: 40%;
        `;
    export const Button = styled.button`
        
        font-size: 2.3rem;
        font-weight: 600;
        font-family: monospace;
        text-transform: uppercase;
        color: #0d6efd;
        background-color: white;
        border: 3px solid #0d6efd;
        text-align: center;
        /* margin-left: 16rem; */
        outline: none;
        box-shadow: 2px 2px 5px rgb(13, 110, 253, 0.6);
        &:hover {
        color: white;
        background-color: #0d6efd;
        outline: none;
        cursor: pointer;
        }
        `;




    export const Updates = styled.div`
        width: 100%;
        `;

    export const Header = styled.div`
        width: 100%;
        background: rgb(110, 110, 110);
        background: linear-gradient(
        90deg,
        rgba(110, 110, 110, 1) 0%,
        rgba(61, 61, 61, 1) 50%,
        rgba(24, 23, 24, 1) 100%
        );
        color: white;
        text-align: center;
        font-size: 4rem;
        text-transform: uppercase;
        font-family: "Courier New", Courier, monospace;
        // padding: 1rem 0;
        margin-bottom: 1.5rem;
        `;
