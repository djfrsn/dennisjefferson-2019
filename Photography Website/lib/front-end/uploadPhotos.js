import axios from 'axios';

function appendFilesToFormData(formData, acceptedFiles) {
  acceptedFiles.forEach((file, i) => formData.append(i, file, file.name));

  return formData;
}

async function uploadPhotos({ acceptedFiles, rejectedFiles }) {
  console.log('lib/uploadPhoto', acceptedFiles);

  let photoData = appendFilesToFormData(new FormData(), acceptedFiles);

  const res = await axios.post('/photos/upload', photoData, {
    headers: {
      accept: 'application/json',
      'Accept-Language': 'en-US,en;q=0.8',
      'Content-Type': `multipart/form-data; boundary=${photoData._boundary}`
    }
  });
  console.log('uploadPhoto/res ', res);
}

export default uploadPhotos;
