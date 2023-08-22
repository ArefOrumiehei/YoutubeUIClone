import { styled } from "styled-components";

import { Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import Comment from "./Comment";

const Container = styled.div ``

const NewComment = styled.div `
    display: flex;
    align-items: center;
    gap: 15px;
    margin-top: 15px;
`

const Input = styled.input `
    background-color: transparent;
    border: none;
    border-bottom: 1px solid ${({theme}) => theme.textSoft};
    font-size: 18px;
    caret-color: ${({theme}) => theme.soft};
    outline: none;
    padding: 5px;
    width: 100%;

    &:focus {
        border-bottom: 2px solid ${({theme}) => theme.text};
    }
`

function Comments() {
    return (
        <Container>
            <NewComment>
                <Avatar sx={{ bgcolor: deepOrange[500] }}>A</Avatar>
                <Input  placeholder="Add a new comment..." />
            </NewComment>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
        </Container>
    );
}

export default Comments;