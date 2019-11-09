import React from 'react';
import { Link } from 'gatsby';
import github from '../img/github-icon.svg';
import logo from '../img/logo.svg';
import Container from './Container';
import { Box, Flex, Text, Image, Link as UILink } from '@chakra-ui/core';
import { FaReact, FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <Flex
      position="sticky"
      zIndex="10"
      top="0"
      bg="gray.200"
      as="nav"
      alignItems="center"
      height="16"
      color="gray.600"
      boxShadow="sm"
    >
      <Container display="flex" alignItems="center">
        <Flex align="center">
          <Link to="/" title="Logo">
            {/* <Image src={logo} alt="react sydney meetup demo app" /> */}
            <Text
              fontSize="lg"
              fontWeight="bold"
              bg="gray.700"
              color="gray.100"
              p="2"
              px="4"
              borderRadius="lg"
            >
              React Sydney demo-app
            </Text>
          </Link>
          <Link to="/">
            <Text ml="6" fontSize="lg" fontWeight="bold" color="gray.700">
              News feed
            </Text>
          </Link>
        </Flex>
        <Box ml="auto">
          <UILink
            isExternal
            href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
            rel="noopener noreferrer"
          >
            <Box color="gray.700" as={FaGithub} size="8" />
          </UILink>
        </Box>
      </Container>
    </Flex>
  );
};

export default Navbar;
