import { styled } from "styled-components";

import { IconSearch, IconUserCircle } from "@tabler/icons-react";

const Container = styled.div `
    position: sticky;
    top: 0;
    background-color: ${({theme}) => theme.bgLighter};
    height: 60px;
`

const Wrapper = styled.div `
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    padding: 0 20px;
    position: relative;
`

const Search = styled.div `
    position: absolute;
    right: 0;
    left: 0;
    margin: auto;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;

    & .icon {
        cursor: pointer;
        color: ${({theme}) => theme.textSoft};
    }
`

const Input = styled.input `
    width: 100%;
    font-size: 16px;
    border: none;
    background-color: transparent;
    caret-color: ${({theme}) => theme.textSoft};

    &:focus {
        outline: none;
    }
`

const Button = styled.button `
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    border-radius: 3px;
    color: #3ea6ff;
    font-weight: 500;
    cursor: pointer;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Search>
                    <Input placeholder="Search"/>
                    <IconSearch className="icon"/>
                </Search>
                <Button><IconUserCircle/> Log in</Button>
            </Wrapper>
        </Container>
    );
};

export default Navbar;