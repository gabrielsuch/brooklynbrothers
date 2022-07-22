import styled from "styled-components"


export const Container = styled.div `
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .missingResults {
        h1 {
            text-align: center;
            color: white;

            span {
                color: gray;
            }
        }
    }
`