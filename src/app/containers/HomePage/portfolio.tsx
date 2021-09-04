import React, {useState} from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { IsingleImage } from "../../../typings/singleImage";
import Portfolio from "../../components/portfolio";
import ModernBuilding1 from "../../../assets/images/modernBuilding.jpg";
import ModernBuilding2 from "../../../assets/images/modernBuilding2.jpg";
import ModernBuilding3 from "../../../assets/images/modernBuilding3.jpg";
import Carousel, {Dots, slidesToShowPlugin} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css"

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

    const [current, setCurrent] = useState(0);

    const testImage1: IsingleImage = {
        name: "Warsaw Skyscraper",
        description: "That is our first big project in Poland.",
        thumbnailSrc: ModernBuilding1
    };

    const testImage2: IsingleImage = {
        name: "Warsaw modern building",
        description: "Mixing functions is sustainable and brings economic and social success to a city.",
        thumbnailSrc: ModernBuilding2
    };

    const testImage3: IsingleImage = {
        name: "Cultural Beacons",
        description: "Cultural buildings customised to all circumstances.",
        thumbnailSrc: ModernBuilding3
    };

    const images = [
        <Portfolio {...testImage1}/>,
        <Portfolio {...testImage2}/>,
        <Portfolio {...testImage3}/>,
        <Portfolio {...testImage1}/>,
        <Portfolio {...testImage2}/>,
        <Portfolio {...testImage3}/>,
    ]

    return (<PortfolioContainer>
        <Title>Look at Our portfolio!</Title>
        <ImagesContainer>
            <Carousel 
                value={current} 
                onChange={setCurrent} 
                slides={images}
                plugins={[
                    "clickToChange",
                    {
                        resolve: slidesToShowPlugin,
                        options:{
                            numberOfSlides: 3,
                        }
                    }
                ]}
                breakpoints={{
                    640: {
                        plugins:[
                            {
                                resolve: slidesToShowPlugin,
                                options:{
                                    numberOfSlides: 1
                                }
                            },
                        ]
                    },
                    900: {
                        plugins:[
                            {
                                resolve: slidesToShowPlugin,
                                options:{
                                    numberOfSlides: 2
                                }
                            },
                        ]
                    },
                }}
            />
            <Dots value={current} onChange={setCurrent} number={images.length}/>
        </ImagesContainer>
    </PortfolioContainer>
    );
}

export default PortfolioSection