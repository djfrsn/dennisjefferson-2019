import React from 'react';
import Link from 'next/link';
import Head from '../components/head';
import Nav from '../components/nav';
import Photos from '../components/photography/Photos';

// Controllers
import { getPhotos } from '../controllers/photosController';

const Photography = ({ content: { photos } }) => (
  <div>
    <Head title="Photography" />
    <Nav />

    <Photos photos={photos} />

    <style jsx>{`
      img {
      }
    `}</style>
  </div>
);

Photography.getInitialProps = async ({ req }) => {
  const photos = await getPhotos();

  return { content: { photos } };
};

export default Photography;
