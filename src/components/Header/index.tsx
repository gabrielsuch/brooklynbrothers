import {Container} from "./style"

import Input from "../Input/index"


const Header = () => {

    return (
        <Container>
            <div className="logo">
                <img src="https://scontent.fbfh9-1.fna.fbcdn.net/v/t31.18172-8/17493232_755403257953164_7091316591229093347_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=973b4a&_nc_ohc=e_i2kaVbIY8AX95ml6i&_nc_ht=scontent.fbfh9-1.fna&oh=00_AT8-q6lbQhVKlCUW-wUjgyMUwGb9Z7lPrFZCS8suHpSjXQ&oe=6300D8A4" alt="The Brooklyn Brothers Logo" />
            </div>
            <div className="filter">
                <Input type="text" placeholder="Insira sua Categoria"/>
            </div>
        </Container>
    )
}


export default Header