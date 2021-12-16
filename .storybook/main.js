module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["../preset.js", "@storybook/addon-essentials"],
  plugins: [
    require("postcss-flexbugs-fixes"),
    require("autoprefixer")({
      flexbox: "no-2009",
    }),
  ],
};
