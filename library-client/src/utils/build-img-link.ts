const BLOB_URL = process.env.REACT_APP_BLOB_URL;

const buildImgLink  = (imageName: string): string => {
  return `${BLOB_URL}/${imageName}`;
}

export default buildImgLink;