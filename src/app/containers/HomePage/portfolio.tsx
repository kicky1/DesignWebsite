import React from "react";
import styled from "styled-components";
import tw from "twin.macro";


const PortfolioContainer = styled.div`
    ${tw`
        w-full
        max-w-screen-xl
        flex
        flex-col
        items-center
        justify-between
        pl-4
        pr-4
        md:pl-0
        md:pr-0
        mb-10
    
    `};
`;

const Title = styled.h2`
    ${tw`
        text-3xl
        lg:text-5xl
        text-black
        font-extrabold
    `};
`;

const ImagesContainer = styled.div`
    ${tw`
        w-full
        flex
        flex-wrap
        justify-center
        mt-7
        md:mt-10
    `};
`;


function PortfolioSection() {
    return <PortfolioContainer>
        <Title>Look at Our portfolio!</Title>
        <ImagesContainer>

        </ImagesContainer>
    </PortfolioContainer>
}

export default PortfolioSection