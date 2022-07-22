import styled from "styled-components"


export const Container = styled.header `
    width: 100%;
    padding: 15px 0px;
    height: auto;
    background-color: #181818;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;

    .logo {
        width: 70px;
        height: 70px;
        
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .filter {
        max-width: 300px;
        width: 100%;
    }
`

