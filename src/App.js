import "./styles.css";
import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import styled from "styled-components";

export default function App() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  //   const x = useMotionValue(0);
  // const input = [-200, 0, 200];
  // const output = [0, 1, 0];
  // const opacity = useTransform(x, input, output);

  // return <motion.div drag="x" style={{ x, opacity }} />

  return (
    <div className="App">
      <TripleSection>
        <SectionWrapper ref={ref}>
          <Section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.99 }}
          ></Section>
        </SectionWrapper>
        <SectionWrapper ref={ref}>
          <Section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.99 }}
            className="second"
          ></Section>
        </SectionWrapper>
      </TripleSection>
    </div>
  );
}

const TripleSection = styled.div`
  height: 600vh;
  background-color: aliceblue;
`;

const SectionWrapper = styled.div`
  height: 200vh;
  border: 1px solid grey;
`;

const Section = styled(motion.div)`
  position: sticky;
  top: 7px;
  height: 100vh;
  margin-top: -500px;
  background-color: burlywood;
`;
