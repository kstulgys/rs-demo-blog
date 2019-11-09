import React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import { Box, Flex, Text, Grid } from '@chakra-ui/core';

const FeatureGrid = ({ gridItems, ...rest }) => (
  <Grid
    {...rest}
    gridGap="10"
    gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
  >
    {gridItems.map(item => (
      <Box
        as="article"
        bg="white"
        p="4"
        borderRadius="lg"
        boxShadow="md"
        key={item.text}
        // opacity="0.5"
      >
        <PreviewCompatibleImage imageInfo={item} />
        {/* <p>{item.text}</p> */}
      </Box>
    ))}
  </Grid>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string
    })
  )
};

export default FeatureGrid;
