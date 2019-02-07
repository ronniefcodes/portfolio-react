export const getCarouselItemFromProject = (project) => {
  return {
    backgroundImages: project.images,
    title: project.title,
    subtitle: `${project.type}${project.type && project.year ? ', ' : ''}${project.year}`,
    description: project.description,
    link: project.link,
  };
};

const preloadProjectImages = (project) => {
  console.log('preloading', project);
  if (project && project.images) {
    Object.values(project.images).forEach(imageUrl => {
      const img = new Image();
      img.src=imageUrl;
    });
  }
};

export const handleCarouselPreload = (items, currentIndex) => {
  preloadProjectImages(items[currentIndex === items.length - 1 ? 0 : currentIndex + 1]);
  preloadProjectImages(items[currentIndex === 0 ? items.length - 1 : currentIndex - 1]);
};
