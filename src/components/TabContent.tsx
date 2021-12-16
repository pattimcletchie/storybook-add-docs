import React from 'react';

import { Link, Source, Title } from '@storybook/components';
import { styled } from '@storybook/theming';

const TabWrapper = styled.div(({ theme }) => ({
  background: theme.background.content,
  padding: "4rem 20px",
  minHeight: "100vh",
  boxSizing: "border-box",
}));

const TabInner = styled.div({
  maxWidth: 768,
  marginLeft: "auto",
  marginRight: "auto",
});

const Container = styled.div({
  display: "block",
});

interface TabContentProps {
  content: JSX.Element | string;
}

export const TabContent: React.FC<TabContentProps> = ({ content }) => (
  <TabWrapper>
    <TabInner>
      <Container>{content}</Container>
    </TabInner>
  </TabWrapper>
);
