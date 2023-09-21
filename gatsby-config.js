const dotenv = require("dotenv");
const validEnvironments = new Set(["dev", "nprd", "prd"]);
const path =
  process.env.ENVIRONMENT && validEnvironments.has(process.env.ENVIRONMENT)
    ? `.env.${process.env.ENVIRONMENT}`
    : ".env.dev";

dotenv.config({ path });

module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "emotion",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    }
  ]
};