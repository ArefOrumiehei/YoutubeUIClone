import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div `
    width: 300px;
    margin: 7px 0px;
    `

const Image = styled.img `
    width: 100%;
    height: 202px; // From youtube
    background-color: #999;
    border-radius: 10px;
`

const Details = styled.div `
    display: flex;
    gap: 12px;
    margin-top: 16px;

    & img {
        width: 35px;
        height: 35px;
        border-radius: 50%;        
    }
`

const Texts = styled.div `

    & h1 {
        font-size: 16px;
        font-weight: 500;
        color: ${({theme}) => theme.text};
    }

    & h2 {
        font-size: 14px;
        color: ${({theme}) => theme.textSoft};
        margin: 8px 0;

        &:hover {
            cursor: pointer;
            color: #e9e9e9;
        }
    }

    & span {
        font-size: 14px;
        color: ${({theme}) => theme.textSoft};
    }
`

const Card = () => {
    return (
        <Link to='video/test' style={{textDecoration : "none"}}>
            <Container>
                <Image src="https://i.ytimg.com/vi/CMLD0Lp0JBg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCHesjFLSCFoNmmKddRi1sXf-RfFw"/>
                <Details>
                    <img src="https://yt3.googleusercontent.com/2kw8s66dhLUegJ3XrqZSkZMfp77CRhCfYm1NurDwDB2L9sT_-CaoUix_iWjoE_t66b07JzoR=s176-c-k-c0x00ffffff-no-rj"/>
                    <Texts>
                        <h1>Artemis I Launch to the Moon (Official NASA Broadcast) - Nov. 16, 2022</h1>
                        <h2>NASA</h2>
                        <span>10M views • Streamed 9 months ago</span>
                    </Texts>
                </Details>
            </Container>
        </Link>
    );
};

export default Card;