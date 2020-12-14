// @flow
import get from 'lodash/get';

const useGetImg = (staticQuery) => {
  const data = staticQuery;
  const allImages = get(data, 'allFile.edges', [])
    .map((img = {}) => img.node);

  const getImgByFileName = (fileName) => (
    allImages.find(i => i.base === fileName)
  ) || {};

  const getImgFluidByFileName = (fileName) => {
    const img = getImgByFileName(fileName);

    return {
      id: img.id,
      imgFluid: img.childImageSharp.fluid,
    };
  };

  return {
    allImages,
    getImgByFileName,
    getImgFluidByFileName,
  };
};

export default useGetImg;
