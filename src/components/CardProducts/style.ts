import styled from "styled-components"


export const Container = styled.div `
    max-width: 400px;
    width: 100%;
    background-color: #262949;
    margin: 15px 10px;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 1px 1px 5px black;
    display: flex;
    flex-direction: column;

    .image {
        img {
            width: 100%;
            border-radius: 5px;
        }
    }

    .info {
        padding: 0px 5px;

        .content {
            height: auto;
            font-family: "Kdam Thmor Pro", sans-serif;
    
            h2 {
                color: white;
                padding-top: 10px;
                font-size: 1.3rem;
            }
            p {
                color: gray;
                padding: 10px 0px;
                font-size: 1rem;
            }
        }
    }
    .category {
        padding: 0px 5px;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        
        p {
            background-color: #5D6AF5;
            padding: 8px;
            border-radius: 5px;
            transition: 0.7s;
            
            :hover {
                background-color: #858FFF;
            }
        }
        
    }


`