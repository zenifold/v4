module.exports = {
  siteTitle: 'Max Murphy | Research Analyst',
  siteDescription:
    'Max Murphy is a research analyst based in Norfolk, VA who solves real-world problems with data science and analytics.',
  siteKeywords:
    'Max Murphy, Max, Maximilian, Murphy, zenifold, research analyst, business analyst, data analyst, analyst, data science, developer, javascript, Norfolk',
  siteUrl: 'https://maxs.page',
  siteLanguage: 'en_US',
  googleAnalyticsID: ' ',
  googleVerification: ' ',
  name: 'Max Murphy',
  location: 'Norfolk, VA',
  email: 'maxkmurphy@gmail.com',
  github: 'https://github.com/zenifold',
  twitterHandle: '@zenifold',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/zenifold',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/maximilian-murphy',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/zenifold',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/zenifold',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/zenifold',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
