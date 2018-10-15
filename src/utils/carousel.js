export const getCarouselItemFromProject = (project) => {
  return {
    backgroundImages: project.images,
    title: project.title,
    subtitle: `${project.type}${project.type && project.year ? ', ' : ''}${project.year}`,
    description: project.description,
    link: project.link,
  };
};
