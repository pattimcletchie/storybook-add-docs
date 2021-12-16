import * as HeaderStories from "./Header.stories";

import { Page } from "./Page";
import React from "react";

export default {
  title: "Example/Page",
  component: Page,
  parameters: {
    docs: {
      container: (props) => <Page {...props} title="List" />,
    },
    myAddonParameter: "hello world",
  },
};

const Template = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
