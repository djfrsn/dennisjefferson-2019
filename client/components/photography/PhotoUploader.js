import React from 'react';
import Dropzone from 'react-dropzone';

class PhotoUploader extends React.Component {
  onDrop = (acceptedFiles, rejectedFiles) => {
    // Do something with files
  };

  render() {
    return (
      <Dropzone onDrop={this.onDrop}>
        {({ getRootProps, getInputProps, isDragActive }) => {
          return (
            <div
              {...getRootProps()}
              className={`dropzone${isDragActive ? 'dropzone--isActive' : ''}`}
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop files here...</p>
              ) : (
                <div className="photo-dropzone">
                  <p>
                    Try dropping some files here, or click to select files to
                    upload.
                  </p>
                </div>
              )}
              <style jsx>{`
                .dropzone:focus {
                  outline: none;
                }
                .photo-dropzone {
                  margin: 4em auto 0;
                  width: 50%;
                  display: flex;
                  border: 1px solid black;
                  min-height: 400px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  text-align: center;
                }
              `}</style>
            </div>
          );
        }}
      </Dropzone>
    );
  }
}

export default PhotoUploader;
