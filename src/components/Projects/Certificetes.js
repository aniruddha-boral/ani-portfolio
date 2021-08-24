import React from 'react';

import { BlogCard, CardInfo, GridContainer, HeaderThree, Hr, TitleContent, Img } from './ProjectsStyles';
import { Section, SectionTitle } from '../../styles/GlobalComponents';

import { certificates } from '../../constants/constants';

const Certificetes = () => (
  <Section nopadding id="Certificetes">
    
    <SectionTitle main>Certificetes</SectionTitle>
    <GridContainer>
      {certificates.map((p, i) => {
        return (
          <BlogCard key={i}>
          <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
           
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Certificetes;