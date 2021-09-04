import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { isPropertySignature } from "typescript";
import { SCREENS } from "../../components/responsive";

const WrapperContainer = styled.div`

    ${tw`
        w-full
        max-w-screen-2xl
        flex
        place-content-around
        pl-6
        pr-6
        lg:pl-12
        lg:pr-12
        bg-black
    `};
`;

const Slogan = styled.h1`
    ${tw`
        font-bold
        text-xl
        xl:text-4xl
        sm:text-3xl
        md:text-4xl
        md:font-extrabold
        text-white
        mt-7
        mb-7
        sm:leading-snug
        lg:leading-normal
        xl:leading-snug
    `};

    @media (min-width: ${SCREENS.sm}) {
            ${tw`
                mt-14
                mb-14
                text-2xl
            `}
        }
`;

type WrapProps = {
    slogan: string,
}

function BetweenWrap(props:WrapProps){
    return <WrapperContainer>
        <Slogan>
            {/* From single-family homes to public buildings in 47 countries */}
            {props.slogan}
        </Slogan>
    </WrapperContainer>
}

export default BetweenWrap