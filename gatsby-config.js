/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
	siteMetadata: {
		title: 'Matt Krepp',
		siteUrl: 'https://mattkrepp.com',
	},
	plugins: [ 
		{
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
		'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -96, // Header height
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /src\/assets\/images\/svgs/
        }
      }
    },
    `gatsby-plugin-gatsby-cloud`,
	],
};
