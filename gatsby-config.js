module.exports = {
  siteMetadata: {
    title: `React State of Mind`,
    name: `Eric S Bishard`,
    siteUrl: `https://reactstateofmind.com`,
    description: `React State of Mind is a blog and portfolio site for Eric Bishard (@httpJunkie)`,
    hero: {
      heading: `A React State of Mind`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/httpjunkie`
      },
      {
        name: `github`,
        url: `https://github.com/httpjunkie`
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/eric-b/`
      },
      {
        name: `stackoverflow`,
        url: `https://stackoverflow.com/users/2623804/eric-bishard`
      },
      {
        name: `medium`,
        url: `https://medium.com/@httpjunkie`
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
    resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Rubik Mono One`,
            variants: [`400`],
            subsets: [`latin`]
          },
          {
            family: `Rubik`,
            variants: [`400`,`500`,`700`],
            subsets: [`latin`]
          }
        ]
      }
    },
  ],
};
