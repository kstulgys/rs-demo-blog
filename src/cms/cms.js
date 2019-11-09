import React from 'react';
import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
// import { IndexPageTemplate } from '../templates';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview);
// CMS.registerPreviewTemplate('index', ({ entry }) => {
//   //   console.log(...entry.toJS().data);
//   return <IndexPageTemplate {...entry.toJS().data} />;
// });

CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('products', ProductPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);

{
  /* <IndexPageTemplate
image={data.image}
title={data.title}
heading={data.heading}
subheading={data.subheading}
description={data.description}
intro={data.intro || { blurbs: [] }}
mainpitch={data.mainpitch || {}}
/> */
}
