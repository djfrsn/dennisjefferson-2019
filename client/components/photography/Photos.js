/**
 * Returns list of photos
 */
const Photos = ({ photos = [] }) =>
  photos.map(({ src }, key) => <img key={key} src={src} />);

export default Photos;
