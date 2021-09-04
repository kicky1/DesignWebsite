import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { IsingleImage } from "../../../typings/singleImage";

interface IPortfolioProps extends IsingleImage{}


const ImageContainer = styled.div`
    width: 16.5em;
    min-height: 22%.5em;
    max-height: 22.2em;
    box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
    ${tw`
    flex
    flex-col
    items-center
    p-3
    pb-4
    bg-white
    rounded-md
    m-1
    sm:m-3
    md:m-6
    `};
`;

const ImageThumbnail = styled.div`
    width: 100%auto;
    height: auto;

    img {
        width: 100%;
        height: 100%;
    }
`;

const ImageName = styled.h3`
    ${tw`
    text-base
    font-bold
    text-black
    mt-1
    mb-1
    `};
`;

const DecriptionContainer = styled.div`
    ${tw`
     w-full
     flex
     justify-between
     mt-3
    `
    };
`;


const Description = styled.h5`
    ${tw`
        text-black
        text-sm
        mr-3
    `
    };
`;

// const Separator = styled.div`
//     min-height: 1px;
//     min-width: 100%;
//     ${tw`
//         flex
//         bg-gray-300
//         mt-2
//         mb-2
//     `
//     };
// `;



function Portfolio(props: IPortfolioProps){

    const {name, thumbnailSrc, description} = props;

    return <ImageContainer>
        <ImageThumbnail>
            <img src={thumbnailSrc}/>
        </ImageThumbnail>
        <ImageName>{name}</ImageName>
        <DecriptionContainer>
            <Description>{description}</Description>
        </DecriptionContainer>
    </ImageContainer>

}

export default Portfolio