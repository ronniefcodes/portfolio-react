export const getCarouselItemFromProject = (project) => {
  return {
    backgroundImages: project.images,
    description: project.description,
    title: project.name,
    subtitle: `${project.name}, ${project.year}`,
  };
};
