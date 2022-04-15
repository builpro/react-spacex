//Template config options
const themeConfig = {
  app: {
    appName: 'React SpaceX',
    appLogoImage: require('@src/assets/images/logo/spacex-logo-white.png').default,
    appLogoImageAlt: require('@src/assets/images/logo/spacex-logo-black.png').default,
    user: {
      name: 'Javier Buil',
      company: 'buil.pro',
      jobTitle: 'Senior Software Engineer',
      email: 'javier@buil.pro'
    }
  },
  layout: {
    isRTL: false,
    skin: 'dark', // light, dark, bordered, semi-dark
    routerTransition: 'fadeIn', // fadeIn, fadeInLeft, zoomIn, none or check this for more transition https://animate.style/
    type: 'horizontal', // vertical, horizontal
    contentWidth: 'full', // full, boxed
    menu: {
      isHidden: true,
      isCollapsed: true
    },
    navbar: {
      // ? For horizontal menu, navbar type will work for navMenu type
      type: 'sticky', // static , sticky , floating, hidden
      backgroundColor: 'white' // BS color options [primary, success, etc]
    },
    footer: {
      type: 'static' // static, sticky, hidden
    },
    customizer: false,
    scrollTop: true, // Enable scroll to top button
    toastPosition: 'top-right'
  }
}

export default themeConfig
