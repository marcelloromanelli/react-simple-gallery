# react-gallery

Simple gallery build using react.

## Optimizations
Full size images are prefetched as soon as the user enters the thumbnail.

## Usage
      <Gallery images={images}/>

## Input data format
      var images = [
          {
              full: 'http://placehold.it/400x400',
              thumb: 'http://placehold.it/50x50',
              alt: 'some a', (optional)
              active: true (optional)
          },
      ];
      
