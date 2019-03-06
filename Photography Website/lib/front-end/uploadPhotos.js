import axios from 'axios';

async function uploadPhotos(options) {
  console.log('lib/uploadPhoto', options);
  const res = await axios.post('/photos/upload', { foo: 'bar' });
  console.log('uploadPhoto/res ', res);
}

export default uploadPhotos;
