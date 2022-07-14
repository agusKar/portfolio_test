import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa nobis dignissimos ipsum a doloribus neque, aperiam, cumque assumenda harum quisquam similique nemo sed quam vel saepe autem temporibus, obcaecati voluptate.</SectionText>
    <List>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>FrontEnd</ListTitle>
          <ListParagraph>Lorem ipsum dolor sit amet consectetur adipisicing elit.</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>FrontEnd</ListTitle>
          <ListParagraph>Lorem ipsum dolor sit amet consectetur adipisicing elit.</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>FrontEnd</ListTitle>
          <ListParagraph>Lorem ipsum dolor sit amet consectetur adipisicing elit.</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
