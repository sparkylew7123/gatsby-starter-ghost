const path = require(`path`);

const config = require(`./src/utils/siteConfig`);
const generateRSSFeed = require(`./src/utils/rss/generate-feed`);

let ghostConfig;

try {
    ghostConfig = require(`./.ghost`);
} catch (e) {
    ghostConfig = {
        production: {
            apiUrl: process.env.GHOST_API_URL,
            contentApiKey: process.env.GHOST_CONTENT_API_KEY,
        },
    };
} finally {
    const { apiUrl, contentApiKey } =
        process.env.NODE_ENV === `development`
            ? ghostConfig.development
            : ghostConfig.production;

    if (!apiUrl || !contentApiKey || contentApiKey.match(/<key>/)) {
        throw new Error(
            `GHOST_API_URL and GHOST_CONTENT_API_KEY are required to build. Check the README.`
        ); // eslint-disable-line
    }
}

if (
    process.env.NODE_ENV === `production` &&
    config.siteUrl === `http://localhost:8000` &&
    !process.env.SITEURL
) {
    throw new Error(
        `siteUrl can't be localhost and needs to be configured in siteConfig. Check the README.`
    ); // eslint-disable-line
}

const {
    NODE_ENV,
    URL: NETLIFY_SITE_URL = "https://www.letsreview.co.uk",
    DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
    CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === "production";
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;
/**
 * This is the place where you can tell Gatsby which plugins to use
 * and set them up the way you want.
 *
 * Further info 👉🏼 https://www.gatsbyjs.org/docs/gatsby-config/
 *
 */

module.exports = {
    siteMetadata: {
        siteUrl: process.env.SITEURL || config.siteUrl,
    },
    trailingSlash: "always",
    plugins: [
        /**
         *  Content Plugins
         */

        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: path.join(__dirname, `src`, `pages`),
                name: `pages`,
            },
        },

        // Setup for optimised images.
        // See https://www.gatsbyjs.org/packages/gatsby-image/

        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: path.join(__dirname, `src`, `images`),
                name: `images`,
            },
        },
        {
            resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
            options: {
                devMode: true,
            },
        },
        {
            resolve: `gatsby-plugin-google-adsense`,
            options: {
                publisherId: `ca-pub-1904394451326149`,
            },
        },
        `gatsby-plugin-graphql-codegen`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-source-ghost`,
            options:
                process.env.NODE_ENV === `development`
                    ? ghostConfig.development
                    : ghostConfig.production,
            apiUrl: `https://source.letsreview.co.uk`,
            contentApiKey: `e140cbcfdb6c1eaf4aa467129d`,
            version: `v5.0`, // Ghost API version, optional, defaults to "v5.0".
            // Pass in "v4.0" if your Ghost install is not on 5.0 yet!
        },
        /**
         *  Utility Plugins
         */
        {
            resolve: `gatsby-plugin-ghost-manifest`,
            options: {
                short_name: config.shortTitle,
                start_url: `/`,
                background_color: config.backgroundColor,
                theme_color: config.themeColor,
                display: `minimal-ui`,
                icon: `static/${config.siteIcon}`,
                legacy: true,
                query: `
                    {
                        allGhostSettings {
                            edges {
                                node {
                                    title
                                    description
                                }
                            }
                        }
                    }
                `,
            },
        },
        {
            resolve: "gatsby-plugin-robots-txt",
            options: {
                resolveEnv: () => NETLIFY_ENV,
                env: {
                    production: {
                        policy: [{ userAgent: "*", allow: "/" }],
                        sitemap: "https://letsreview.co.uk/sitemap.xml",
                        host: "https://letsreview.co.uk",
                    },
                    "branch-deploy": {
                        policy: [{ userAgent: "*", disallow: ["/"] }],
                        sitemap: null,
                        host: null,
                    },
                    "deploy-preview": {
                        policy: [{ userAgent: "*", disallow: ["/"] }],
                        sitemap: null,
                        host: null,
                    },
                },
            },
        },
        {
            resolve: `gatsby-plugin-feed`,
            options: {
                query: `
                    {
                        allGhostSettings {
                            edges {
                                node {
                                    title
                                    description
                                }
                            }
                        }
                    }
                `,
                feeds: [generateRSSFeed(config)],
            },
        },
        `gatsby-plugin-catch-links`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-offline`,
        `gatsby-plugin-netlify`,
    ],
};

