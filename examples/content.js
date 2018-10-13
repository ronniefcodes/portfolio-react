const config = {
  name: 'Ronnie Cheung',
  title: 'Web Developer',
  contactMethods: [{
    title: 'email',
    type: 'email',
    value: 'ronniefcheung@gmail.com',
    icon: 'mail',
  }, {
    title: 'github',
    type: 'website',
    value: 'https://github.com/ronniefcodes',
    icon: 'github',
  }, {
    title: 'linkedin',
    type: 'website',
    value: 'https://www.linkedin.com/in/ronniech/',
    icon: 'linkedin',
  }, {
    title: 'resume',
    type: 'file',
    value: '#',
    icon: 'download',
  }],
  projects: [{
    title: 'Honda Shoppers',
    type: 'Web Application',
    year: 2018,
    description: 'AngularJS',
    link: 'https://www.honda.ca/login',
    images: {
      mobile: '/media/shoppers-mobile.jpg',
      smallDesktop: '/media/shoppers.jpg',
    },
  }, {
    title: 'Acura MySites',
    type: 'Web Application',
    year: 2017,
    description: 'AngularJS',
    link: 'https://acura.ca/login',
    images: {
      mobile: '/media/mysites-mobile.jpg',
      smallDesktop: '/media/mysites.jpg',
    },
  }, {
    title: 'Isolocity',
    type: 'Web Application',
    year: 2015,
    description: 'EmberJS',
    link: '',
    images: {
      mobile: '/media/isolocity-mobile.jpg',
      smallDesktop: '/media/isolocity.jpg',
    },
  }, {
    title: 'Sandbox Advertising',
    type: 'Website',
    year: 2015,
    description: 'AngularJS',
    link: '',
    images: {
      mobile: '/media/sandbox-mobile.jpg',
      smallDesktop: '/media/sandbox.jpg',
    },
  }, {
    title: 'Heineken Cities',
    type: 'Microsite',
    year: 2015,
    description: 'JQuery',
    link: '',
    images: {
      mobile: '/media/heineken-mobile.jpg',
      smallDesktop: '/media/heineken.jpg',
    },
  }]
};

export default config;
