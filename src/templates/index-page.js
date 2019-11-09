import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Features from '../components/Features';
import BlogRoll from '../components/BlogRoll';
import Container from '../components/Container';
import { Box, Flex, Text } from '@chakra-ui/core';

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro
}) => (
  <Box>
    <Flex position="relative" justifyContent="center" alignItems="center">
      <Flex
        height="65vh"
        backgroundImage={`url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`}
        width="full"
        backgroundPosition="center"
        backgroundAttachment="fixed"
        opacity="0.25"
      />

      <Container position="absolute">
        <TextHero>{title}</TextHero>
      </Container>
    </Flex>

    <Container flexDir="column">
      <Box my="32">
        <TextTitle>{mainpitch.title}</TextTitle>
        <TextBase>{mainpitch.description}</TextBase>
      </Box>
      <Box height="1" bg="gray.200" />
      <Box my="20">
        <TextTitle mb="6">What's new 📄</TextTitle>
        <BlogRoll />
        <Flex mt="10">
          <Box>
            <Link to="/blog">
              <TextBase
                py="2"
                px="4"
                bg="gray.700"
                color="gray.100"
                borderRadius="lg"
              >
                Read more
              </TextBase>
            </Link>
          </Box>
        </Flex>
      </Box>
      <Box height="1" bg="gray.200" />
      <Box my="20">
        <TextTitle>{heading}</TextTitle>
        <TextBase>{description}</TextBase>
        <Box mt="10">
          <Features gridItems={intro.blurbs} />
        </Box>
      </Box>
    </Container>
  </Box>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;

const TextHero = props => (
  <Text
    as="h1"
    mx="auto"
    p="6"
    color="gray.700"
    textAlign="right"
    fontSize={['4xl', '4xl', '5xl', '6xl']}
    fontWeight="bold"
    // bg="blue.600"
    // boxShadow="lg"
    lineHeight="none"
    {...props}
  />
);

const TextTitle = props => (
  <Text
    as="h3"
    mb="3"
    color="gray.700"
    textAlign="center"
    fontSize={['xl', '2xl', '3xl']}
    fontWeight="semibold"
    {...props}
  />
);

const TextSubtitle = props => (
  <Text fontSize={['xl']} fontWeight="semibold" {...props} />
);

const TextBase = props => <Text fontSize={['xl']} {...props} />;
