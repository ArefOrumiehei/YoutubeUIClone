import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { styled } from "styled-components";


const Container = styled.div `
    width: ${(props) => props.type !== 'sm' && '300px'};
    margin: ${(props) => props.type === 'sm' ? '10px 0' : '7px 0'};
    display: ${(props) => props.type === 'sm' && 'flex'};
    gap: 10px;
    overflow: hidden;


    @media screen and (min-width : 400px) and (max-width : 768px) {
        width: 80vw;
    }
`

const Image = styled.img `
    width: 100%;
    height: ${(props) => props.type === 'sm' ? '94px' : '202px'};
    background-color: #999;
    border-radius: 10px;
    flex: 1;
    object-fit: cover;
`

const Details = styled.div `
    display: flex;
    gap: 12px;
    margin-top: ${(props) => props.type !== 'sm' && '16px'};
    flex: 1;

    & img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        display: ${(props) => props.type === 'sm' ? 'none' : 'block'};
    }
`

const Texts = styled.div `

    & h1 {
        font-size: ${(props) => props.type === 'sm' ? '14px' : '16px'};
        font-weight: 500;
        color: ${({theme}) => theme.text};
        width: ${(props) => props.type === 'sm' && '30%'};
        white-space: ${(props) => props.type === 'sm' && 'nowrap'};
        word-break: break-all;
        line-height: ${(props) => props.type === 'sm' && '1.2rem'};
        overflow: ${(props) => props.type === 'sm' && 'hidden'};
        text-overflow: ${(props) => props.type === 'sm' && 'ellipsis'}; 

        @media screen and (max-width : 768px) {
            width: 80%;
        }

        @media screen and (max-width : 400px) {
            font-size: 12px;
        }
    }

    & h2 {
        font-size: ${(props) => props.type === 'sm' ? '12px' : '14px'};
        color: ${({theme}) => theme.textSoft};
        margin: 8px 0;

        @media screen and (max-width : 400px) {
            font-size: 10px;
        }

        &:hover {
            cursor: pointer;
            color: #e9e9e9;
        }
    }

    & span {
        font-size: ${(props) => props.type === 'sm' ? '12px' : '14px'};
        color: ${({theme}) => theme.textSoft};

        @media screen and (max-width : 400px) {
            font-size: 10px;
        }
    }
`

const Card = ({type}) => {
    return (
        <Link to='video/test' style={{textDecoration : "none"}}>
            <Container type={type}>
                <Image type={type} src="https://i.ytimg.com/vi/CMLD0Lp0JBg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCHesjFLSCFoNmmKddRi1sXf-RfFw"/>
                <Details type={type}>
                    <img src="https://yt3.googleusercontent.com/2kw8s66dhLUegJ3XrqZSkZMfp77CRhCfYm1NurDwDB2L9sT_-CaoUix_iWjoE_t66b07JzoR=s176-c-k-c0x00ffffff-no-rj"/>
                    <Texts type={type}>
                        <h1>Artemis I Launch to the Moon (Official NASA Broadcast) - Nov. 16, 2022</h1>
                        <h2>NASA</h2>
                        <span>10M views • Streamed 9 months ago</span>
                    </Texts>
                </Details>
            </Container>
        </Link>
    );
};

Card.propTypes = {
    type : PropTypes.string
}

export default Card;