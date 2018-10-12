export const parseContactMethodUrl = (contactMethod) => {
  let url = '';

  if (!!contactMethod) {
      switch(contactMethod.type) {
        case 'email':
          url = `mailto:${contactMethod.value}`;
          break;
        case 'phone':
          url = `tel:${contactMethod.value}`;
          break;
        default:
          url = contactMethod.value;
          break;
      }
  }

  return url;
};
