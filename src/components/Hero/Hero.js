import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        my personal portfolio
      </SectionTitle>
      <SectionText>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium consectetur aut sint provident tempore iure sequi nam repellat! Ad, explicabo. Tempora, officiis eligendi veritatis exercitationem necessitatibus ipsum enim nulla molestias!
      </SectionText>
      <Button>Learn more</Button>
    </LeftSection>
  </Section>
);

export default Hero;