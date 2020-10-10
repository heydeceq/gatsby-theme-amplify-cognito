/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [{
    resolve: `gatsby-theme-amplify-cognito`,
    options: {
      region: '',
      userPoolId: 'us-east-2_FDpXgCgAc',
      userPoolWebClientId: '7cnimuhr4mmhhq9vgl5lfp4rf4'
      identityPoolId: 'us-east-2:4798a636-a31c-48f4-9111-597c31a392f3'
    },
  }]
}
