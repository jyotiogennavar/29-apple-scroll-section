import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import styled from "styled-components";

const ParallaxContent = () => {
  return (
    <div>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Collaborate"
        heading="Built for all of us."
      >
        <ExampleContent />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Quality"
        heading="Never compromise."
      >
        <ExampleContent />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Modern"
        heading="Dress for the best."
      >
        <ExampleContent />
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
  )

}

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
font-family: 'Inter', sans-serif;
`;

const SubHeading = styled.h3`
  margin-bottom: 0.5rem; /* mb-2 */
  text-align: center; /* text-center */
  font-size: 1.25rem; /* text-xl */
  
  @media (min-width: 768px) {
    margin-bottom: 1rem; /* md:mb-4 */
    font-size: 1.5rem; /* md:text-3xl */
  }
`;

const Heading = styled.h2`
  text-align: center; /* text-center */
  font-size: 2rem; /* text-4xl */
  font-weight: bold; /* font-bold */
  
  @media (min-width: 768px) {
    font-size: 4.375rem; /* md:text-7xl */
  }
`;

const ExampleContent = () => (
  <StyledContainer>
    <StyledHeading>
      Additional content explaining the above card here
    </StyledHeading>
    <StyledContent>
      <StyledParagraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
        blanditiis soluta eius quam modi aliquam quaerat odit deleniti minima
        maiores voluptate est ut saepe accusantium maxime doloremque nulla
        consectetur possimus.
      </StyledParagraph>
      <StyledParagraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        reiciendis blanditiis aliquam aut fugit sint.
      </StyledParagraph>
      <StyledButton>
        Learn more <FiArrowUpRight style={{display: "inline"}} />
      </StyledButton>
    </StyledContent>
  </StyledContainer>
);

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 5xl;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 3rem 2rem 6rem;

  font-family: 'Inter', sans-serif;
  
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
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 1rem 2.25rem;
  font-size: 1.25rem;
  background-color: #4a5568;
  color: #ffffff;
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
