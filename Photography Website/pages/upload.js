import React from 'react';
import Link from 'next/link';

import Head from '../components/head';
import Nav from '../components/nav';
import PhotoUploader from '../components/photography/PhotoUploader';
import FlexCenter from '../components/generic/FlexCenter';

// Controllers
// import { getPhotos } from '../controllers/photosController';

const Upload = () => (
  <div>
    <Head title="Upload" />
    <Nav />

    <FlexCenter>
      <PhotoUploader />
    </FlexCenter>
    <style jsx>{`
      img {
      }
    `}</style>
  </div>
);

export default Upload;
