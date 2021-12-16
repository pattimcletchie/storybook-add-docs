import { addons, types } from '@storybook/addons';

import { ADDON_ID, PANEL_ID, TOOL_ID } from '../constants';
import { Panel } from '../Panel';
import { Tab } from '../Tab';
import { Tool } from '../Tool';

// Register the addon
addons.register(ADDON_ID, () => {
  // Register the tool
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: "My addon",
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: Tool,
  });

  // Register the panel
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: "My addon",
    match: ({ viewMode }) => viewMode === "story",
    render: Panel,
  });

  // Register the tab
  addons.add(PANEL_ID, {
    type: types.TAB,
    title: "Figma",
    //👇 Checks the current route for the story
    route: ({ storyId }) => `/figma/${storyId}`,
    //👇 Shows the Tab UI element in myaddon view mode
    match: ({ viewMode }) => viewMode === "figma",
    render: Tab,
  });
});
