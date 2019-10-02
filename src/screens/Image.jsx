import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { ImageDetail } from '../components/images';

const DATA = [
  {
    image: require('../../assets/image/image-1.jpg'),
    title: 'Mountain',
    score: 8,
  },
  {
    image: require('../../assets/image/image-1.jpg'),
    title: 'Beach',
    score: 9,
  },
];

const ImageScreen = () => {
  return (
    <View>
      {DATA.map(e => (
        <ImageDetail image={e.image} title={e.title} score={e.score} />
      ))}
    </View>
  );
};

ImageScreen.propTypes = {};

export default ImageScreen;
