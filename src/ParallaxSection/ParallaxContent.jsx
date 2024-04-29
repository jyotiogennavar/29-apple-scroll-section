import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import styled from "styled-components";

const ParallaxContent = () => {
  return (
    <div>
      <TextParallaxContent
        imgUrl="https://plus.unsplash.com/premium_photo-1661915320026-84ca2c96faa7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Karanataka"
        heading="HAMPI"
      >
        <HampiContent />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://plus.unsplash.com/premium_photo-1697729588485-6c238cf3ab2f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Maharashtra"
        heading="Ellora Caves"
      >
        <ElloraContent />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://cdn.britannica.com/19/251919-050-D3E64798/konark-sun-temple-orissa-india-unesco-heritage-site.jpg"
        subheading="Orissa"
        heading="Sun Temple Konark"
      >
        <SunTempleContent />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <ImageContainer>
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </ImageContainer>
      {children}
    </div>
  );
};

const ImageContainer = styled.div`
  height: 150vh;
  position: relative;
`;

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <Wrapper
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
    >
      <Container
        style={{
          opacity,
        }}
      ></Container>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  position: sticky;
  overflow: hidden;
  z-index: 0;
  border-radius: 3rem;
`;

const Container = styled(motion.div)`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <TextWrapper
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
    >
      <SubHeading>{subheading}</SubHeading>
      <Heading>{heading}</Heading>
    </TextWrapper>
  );
};

const TextWrapper = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: "Josefin Sans", sans-serif;
`;

const SubHeading = styled.h3`
  margin-bottom: 0.5rem;
  text-align: center; 
  font-size: 1.25rem; 

  @media (min-width: 768px) {
    margin-bottom: 1rem;
    font-size: 2rem; 
  }
`;

const Heading = styled.h2`
  text-align: center; 
  font-size: 2rem; 
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 6rem; 
  }
`;

const HampiContent = () => (
  <StyledContainer>
    <StyledHeading>The Ancient Marvel of Hampi</StyledHeading>
    <StyledContent>
      <StyledParagraph>
        Nestled in the heart of Karnataka, India, Hampi stands as a testament to
        the grandeur of the Vijayanagara Empire. This UNESCO World Heritage Site
        boasts a landscape adorned with impressive ruins, temples, and
        monolithic structures dating back to the 14th century.
      </StyledParagraph>
      <StyledParagraph>
        Visitors are transported to an era of rich history and architectural
        brilliance as they explore the sprawling remnants of this once vibrant
        city.
      </StyledParagraph>
      <StyledButton>
        Learn more <FiArrowUpRight style={{ display: "inline" }} />
      </StyledButton>
    </StyledContent>
  </StyledContainer>
);

const ElloraContent = () => (
  <StyledContainer>
    <StyledHeading>A Marvel of Rock-Cut Architecture</StyledHeading>
    <StyledContent>
      <StyledParagraph>
        The Ellora Caves, located near Aurangabad in Maharashtra, India, are a
        masterpiece of ancient Indian rock-cut architecture. Carved into the
        Charanandri hills, these caves represent a harmonious blend of Buddhist,
        Hindu, and Jain religious art spanning over five centuries, from the 6th
        to the 10th century AD.
      </StyledParagraph>
      <StyledParagraph>
        Visitors marvel at the intricately carved sculptures and stunning cave
        temples, making Ellora a UNESCO World Heritage Site and a cultural
        treasure.
      </StyledParagraph>
      <StyledButton>
        Learn more <FiArrowUpRight style={{ display: "inline" }} />
      </StyledButton>
    </StyledContent>
  </StyledContainer>
);

const SunTempleContent = () => (
  <StyledContainer>
    <StyledHeading>A Symbol of Architectural Grandeur</StyledHeading>
    <StyledContent>
      <StyledParagraph>
        The Konark Sun Temple, situated in Odisha, India, is a remarkable
        testament to ancient Indian architecture and devotion to the sun god,
        Surya. Built in the 13th century by King Narasimhadeva I of the Eastern
        Ganga dynasty, this UNESCO World Heritage Site is renowned for its
        intricate stone carvings depicting celestial beings, mythical creatures,
        and daily life scenes.
      </StyledParagraph>
      <StyledButton>
        Learn more <FiArrowUpRight style={{ display: "inline" }} />
      </StyledButton>
    </StyledContent>
  </StyledContainer>
);

const StyledContainer = styled.div`
  margin: 0 auto;
  
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 3rem 2rem 6rem;

  font-family: "Source Sans 3", sans-serif;

  @media (min-width: 768px) {
    grid-template-columns: repeat(12, 1fr);
  }
`;

const StyledHeading = styled.h2`
  grid-column: span 1;
  font-size: 1.875rem;
  font-weight: bold;

  @media (min-width: 768px) {
    grid-column: span 4;
    font-size: 2.25rem;
  }
`;

const StyledContent = styled.div`
  grid-column: span 1;

  @media (min-width: 768px) {
    grid-column: span 8;
  }
`;

const StyledParagraph = styled.p`
  margin-bottom: 1rem;
  font-size: 1.25rem;
  color: #718096;
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 1rem 2.25rem;
  font-size: 1.25rem;
  background-color: #4a5568;
  color: #ffffff;
  border: none;
  border-radius: 999px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2d3748;
  }

  @media (min-width: 768px) {
    width: auto;
  }
`;

export default ParallaxContent;
