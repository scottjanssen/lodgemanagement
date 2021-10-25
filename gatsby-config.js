module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "lodgemanagement",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyAMau1_A1IxUHrryDAwxrUfHPJnYxHA8a0",
          authDomain: "lodgemanagement-ccb57.firebaseapp.com",
          projectId: "lodgemanagement-ccb57",
          storageBucket: "lodgemanagement-ccb57.appspot.com",
          messagingSenderId: "646307036697",
          appId: "1:646307036697:web:533d956100d29ea677b488",
          measurementId: "G-9ZQEMN52VG"
        }
      }
    },
  ],
};
