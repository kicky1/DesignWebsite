import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";
import BuildingImg from "../../../assets/images/under_construction.svg";
import { useMediaQuery } from "react-responsive";


const TopSectionContainer = styled.div<{mobile?: any}>`
    min-height: 250px;
    margin-top: 5em;
    ${tw`
        w-full
        max-w-screen-2xl
        flex
        justify-between
        pl-6
        pr-6
        lg:pl-12
        lg:pr-12
    `};

    @media (min-width: ${SCREENS.sm}) {
        min-height: 500px;
    }
`;

const LeftContainer = styled.div`
    ${tw`
        w-1/2
        flex
        flex-col
    `}
`;

const RightContainer = styled.div`
    ${tw`
        w-1/2
        flex
        flex-col
        relative
        mt-20
    `}
`;

const Slogan = styled.h1`
    ${tw`
        font-bold
        text-2xl
        xl:text-6xl
        sm:text-3xl
        md:text-5xl
        md:font-extrabold
        text-black
        mb-8
        sm:leading-snug
        lg:leading-normal
        xl:leading-snug
    `};
`;

const Description = styled.p`
    ${tw`
        text-xs
        lg:text-sm
        xl:text-lg
        sm:max-h-full
        overflow-hidden
        max-h-12
        text-gray-800
    `};
`;


const StandaloneHome = styled.div`
  width: auto;
  height: 14em;
  right: -10em;
  top: -8em;
  position: absolute;
  img {
    width: auto;
    height: 100%;
    max-width: fit-content;
  }
  @media (min-width: ${SCREENS.sm}) {
    height: 16em;
    right: -6em;
    top: -6em;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 21em;
    right: -8em;
    top: -5em;
  }
  @media (min-width: ${SCREENS.xl}) {
    height: 30em;
    right: -13em;
    top: -9em;
  }
`;

function TopSection(){

    const isMobile = useMediaQuery({maxWidth: SCREENS.sm});


    if(isMobile)
        return <TopSectionContainer mobile>
            <LeftContainer>
                <Slogan>Get the best architectural designs With Us!</Slogan>
                    <Description>
                        Our company is a Polish company that deals with the sale of architectural design products. 
                        Our website is built on a system that uses specific tags to organize the products for your 
                        international exploration. You will find that our products are uniquely different and a must-have 
                        for private or commercial use
                    </Description>
            </LeftContainer>
            <RightContainer>
                <StandaloneHome>
                    <img src={BuildingImg}/>
                </StandaloneHome>
            </RightContainer>
        </TopSectionContainer>

    return <TopSectionContainer>
        <LeftContainer>
            <Slogan>Get the best architectural designs With Us!</Slogan>
                <Description>
                    Our company is a Polish company that deals with the sale of architectural design products. 
                    Our website is built on a system that uses specific tags to organize the products for your 
                    international exploration. You will find that our products are uniquely different and a must-have 
                    for private or commercial use
                </Description>
        </LeftContainer>
        <RightContainer>
            <StandaloneHome>
                <img src={BuildingImg}/>
            </StandaloneHome>
        </RightContainer>
    </TopSectionContainer>
}

export default TopSection