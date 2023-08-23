import { styled } from "styled-components";

import { Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { IconDotsVertical, IconThumbDown, IconThumbUp } from "@tabler/icons-react";

const Container = styled.div `
    display: flex;
    align-items: center;
    gap: 25px;
    margin: 25px 15px;

    & .more {
        display: none;
        color: ${({theme}) => theme.textSoft};
        cursor: pointer;
    }

    &:hover {
        & .more {
            display: block;
        } 
    }
`

const CommentHeader = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const CommentInfo = styled.div `
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 10px 0;

    & .username {
        color: ${({theme}) => theme.text};
        font-size: 16px;
        font-weight: 400;
        cursor: pointer;
    }

    & .date {
        color: ${({theme}) => theme.textSoft};
        font-size: 12px;
        cursor: pointer;
    }
`

const CommentFooter = styled.div `
    display: flex;
    gap: 10px;
    margin-top: 10px;
    color: ${({theme}) => theme.textSoft};
    
    & svg , span {
        border-radius: 20px;
        padding: 8px;
        &:hover {
            background-color: ${({theme}) => theme.bgLighter};
        }
    }
`

const CommentDetails = styled.div `

    & .commentText {
        color: ${({theme}) => theme.text};
        font-size: 16px;
    }
`



const Comment = () => {
    return (
        <Container>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>A</Avatar>
            <CommentDetails>
                <CommentHeader>
                    <CommentInfo>
                        <span className="username">@aref1381</span>
                        <span className="date">2 days ago</span>
                    </CommentInfo>
                    <IconDotsVertical className="more"/>
                </CommentHeader>
                <p className="commentText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia velit cum aperiam rem doloremque, maiores voluptates obcaecati fugit.</p>
                <CommentFooter>
                    <IconThumbUp size={40}/>
                    <IconThumbDown size={40}/>
                    <span>Reply</span>
                </CommentFooter>
            </CommentDetails>
        </Container>
    );
};

export default Comment;