// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "gridsome-tailwindui",
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        purgeConfig: {
          // Specify the paths to all of the template files in your project
          content: ["./src/**/*.html", "./src/**/*.vue"],

          // Include any special characters you're using in this regular expression
          defaultExtractor: (content) =>
            content.match(/[\w-/.:]+(?<!:)/g) || [],
        },
      },
    },
  ],
};
