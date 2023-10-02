export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  GatsbyImageData: any;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
  contentFilePath?: Maybe<Scalars['String']>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  trailingSlash?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  jsxRuntime?: Maybe<Scalars['String']>;
  graphqlTypegen?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
};

export type SiteFunction = Node & {
  functionRoute: Scalars['String'];
  pluginName: Scalars['String'];
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
  absoluteCompiledFilePath: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  pageContext?: Maybe<Scalars['JSON']>;
  pluginCreator?: Maybe<SitePlugin>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePlugin = Node & {
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<Scalars['JSON']>;
  packageJson?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteBuildMetadata = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type GatsbyImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type GatsbyImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type GatsbyImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type ImageFit =
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: InputMaybe<Scalars['Int']>;
};

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Potrace = {
  turnPolicy?: InputMaybe<PotraceTurnPolicy>;
  turdSize?: InputMaybe<Scalars['Float']>;
  alphaMax?: InputMaybe<Scalars['Float']>;
  optCurve?: InputMaybe<Scalars['Boolean']>;
  optTolerance?: InputMaybe<Scalars['Float']>;
  threshold?: InputMaybe<Scalars['Int']>;
  blackOnWhite?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Scalars['String']>;
  background?: InputMaybe<Scalars['String']>;
};

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['GatsbyImageData'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: InputMaybe<ImageLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  placeholder?: InputMaybe<ImagePlaceholder>;
  blurredOptions?: InputMaybe<BlurredOptions>;
  tracedSVGOptions?: InputMaybe<Potrace>;
  formats?: InputMaybe<Array<InputMaybe<ImageFormat>>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpgOptions?: InputMaybe<JpgOptions>;
  pngOptions?: InputMaybe<PngOptions>;
  webpOptions?: InputMaybe<WebPOptions>;
  avifOptions?: InputMaybe<AvifOptions>;
  transformOptions?: InputMaybe<TransformOptions>;
  backgroundColor?: InputMaybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  base64?: InputMaybe<Scalars['Boolean']>;
  traceSVG?: InputMaybe<Potrace>;
  toFormat?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: InputMaybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: InputMaybe<ImageFormat>;
};

export type JpgOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  progressive?: InputMaybe<Scalars['Boolean']>;
};

export type PngOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  compressionSpeed?: InputMaybe<Scalars['Int']>;
};

export type WebPOptions = {
  quality?: InputMaybe<Scalars['Int']>;
};

export type AvifOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  lossless?: InputMaybe<Scalars['Boolean']>;
  speed?: InputMaybe<Scalars['Int']>;
};

export type TransformOptions = {
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type GhostPost = Node & {
  slug: Scalars['String'];
  id: Scalars['ID'];
  uuid: Scalars['String'];
  title: Scalars['String'];
  html?: Maybe<Scalars['String']>;
  comment_id?: Maybe<Scalars['String']>;
  feature_image?: Maybe<Scalars['String']>;
  feature_image_caption?: Maybe<Scalars['String']>;
  feature_image_alt?: Maybe<Scalars['String']>;
  featured: Scalars['Boolean'];
  visibility: Scalars['String'];
  created_at: Scalars['Date'];
  updated_at?: Maybe<Scalars['Date']>;
  published_at?: Maybe<Scalars['Date']>;
  custom_excerpt?: Maybe<Scalars['String']>;
  codeinjection_head?: Maybe<Scalars['String']>;
  codeinjection_foot?: Maybe<Scalars['String']>;
  codeinjection_styles?: Maybe<Scalars['String']>;
  custom_template?: Maybe<Scalars['String']>;
  canonical_url?: Maybe<Scalars['String']>;
  send_email_when_published?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<Array<Maybe<GhostTag>>>;
  authors: Array<Maybe<GhostAuthor>>;
  primary_author: GhostAuthor;
  primary_tag?: Maybe<GhostTag>;
  url: Scalars['String'];
  excerpt?: Maybe<Scalars['String']>;
  reading_time?: Maybe<Scalars['Int']>;
  email_subject?: Maybe<Scalars['String']>;
  plaintext?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Boolean']>;
  og_image?: Maybe<Scalars['String']>;
  og_title?: Maybe<Scalars['String']>;
  og_description?: Maybe<Scalars['String']>;
  twitter_image?: Maybe<Scalars['String']>;
  twitter_title?: Maybe<Scalars['String']>;
  twitter_description?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
  meta_description?: Maybe<Scalars['String']>;
  access?: Maybe<Scalars['Boolean']>;
  comments?: Maybe<Scalars['Boolean']>;
  ghostId?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type GhostPostCreated_AtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type GhostPostUpdated_AtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type GhostPostPublished_AtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type GhostPage = Node & {
  slug: Scalars['String'];
  id: Scalars['ID'];
  uuid: Scalars['String'];
  title: Scalars['String'];
  html?: Maybe<Scalars['String']>;
  comment_id?: Maybe<Scalars['String']>;
  feature_image?: Maybe<Scalars['String']>;
  feature_image_caption?: Maybe<Scalars['String']>;
  feature_image_alt?: Maybe<Scalars['String']>;
  featured: Scalars['Boolean'];
  visibility: Scalars['String'];
  created_at: Scalars['Date'];
  updated_at?: Maybe<Scalars['Date']>;
  published_at?: Maybe<Scalars['Date']>;
  custom_excerpt?: Maybe<Scalars['String']>;
  codeinjection_head?: Maybe<Scalars['String']>;
  codeinjection_foot?: Maybe<Scalars['String']>;
  codeinjection_styles?: Maybe<Scalars['String']>;
  custom_template?: Maybe<Scalars['String']>;
  canonical_url?: Maybe<Scalars['String']>;
  send_email_when_published?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<Array<Maybe<GhostTag>>>;
  authors: Array<Maybe<GhostAuthor>>;
  primary_author: GhostAuthor;
  primary_tag?: Maybe<GhostTag>;
  url: Scalars['String'];
  excerpt?: Maybe<Scalars['String']>;
  reading_time?: Maybe<Scalars['Int']>;
  email_subject?: Maybe<Scalars['String']>;
  plaintext?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Boolean']>;
  og_image?: Maybe<Scalars['String']>;
  og_title?: Maybe<Scalars['String']>;
  og_description?: Maybe<Scalars['String']>;
  twitter_image?: Maybe<Scalars['String']>;
  twitter_title?: Maybe<Scalars['String']>;
  twitter_description?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
  meta_description?: Maybe<Scalars['String']>;
  show_title_and_feature_image?: Maybe<Scalars['Boolean']>;
  access?: Maybe<Scalars['Boolean']>;
  comments?: Maybe<Scalars['Boolean']>;
  ghostId?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type GhostPageCreated_AtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type GhostPageUpdated_AtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type GhostPagePublished_AtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type GhostTag = Node & {
  slug: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  feature_image?: Maybe<Scalars['String']>;
  visibility: Scalars['String'];
  meta_title?: Maybe<Scalars['String']>;
  meta_description?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  count?: Maybe<GhostPostCount>;
  postCount?: Maybe<Scalars['Int']>;
  og_image?: Maybe<Scalars['String']>;
  og_title?: Maybe<Scalars['String']>;
  og_description?: Maybe<Scalars['String']>;
  twitter_image?: Maybe<Scalars['String']>;
  twitter_title?: Maybe<Scalars['String']>;
  twitter_description?: Maybe<Scalars['String']>;
  codeinjection_head?: Maybe<Scalars['String']>;
  codeinjection_foot?: Maybe<Scalars['String']>;
  canonical_url?: Maybe<Scalars['String']>;
  accent_color?: Maybe<Scalars['String']>;
  ghostId?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type GhostAuthor = Node & {
  slug: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  profile_image?: Maybe<Scalars['String']>;
  cover_image?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
  meta_description?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  count: GhostPostCount;
  postCount: Scalars['Int'];
  ghostId?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type GhostSettings = Node & {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  cover_image?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  lang: Scalars['String'];
  timezone: Scalars['String'];
  navigation?: Maybe<Array<Maybe<GhostNavigation>>>;
  secondary_navigation?: Maybe<Array<Maybe<GhostNavigation>>>;
  meta_title?: Maybe<Scalars['String']>;
  meta_description?: Maybe<Scalars['String']>;
  og_image?: Maybe<Scalars['String']>;
  og_title?: Maybe<Scalars['String']>;
  og_description?: Maybe<Scalars['String']>;
  twitter_image?: Maybe<Scalars['String']>;
  twitter_title?: Maybe<Scalars['String']>;
  twitter_description?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  codeinjection_head?: Maybe<Scalars['String']>;
  codeinjection_foot?: Maybe<Scalars['String']>;
  codeinjection_styles: Scalars['String'];
  active_timezone?: Maybe<Scalars['String']>;
  default_locale?: Maybe<Scalars['String']>;
  accent_color?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  members_support_address?: Maybe<Scalars['String']>;
  members_enabled?: Maybe<Scalars['Boolean']>;
  allow_self_signup?: Maybe<Scalars['Boolean']>;
  members_invite_only?: Maybe<Scalars['Boolean']>;
  paid_members_enabled?: Maybe<Scalars['Boolean']>;
  portal_button_style?: Maybe<Scalars['String']>;
  portal_button_signup_text?: Maybe<Scalars['String']>;
  portal_signup_checkbox_required?: Maybe<Scalars['Boolean']>;
  portal_plans?: Maybe<Array<Maybe<Scalars['String']>>>;
  portal_name?: Maybe<Scalars['Boolean']>;
  portal_button?: Maybe<Scalars['Boolean']>;
  comments_enabled?: Maybe<Scalars['String']>;
  recommendations_enabled?: Maybe<Scalars['Boolean']>;
  outbound_link_tagging?: Maybe<Scalars['Boolean']>;
  version?: Maybe<Scalars['String']>;
  ghostId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type GhostNavigation = {
  label: Scalars['String'];
  url: Scalars['String'];
};

export type GhostPostCount = {
  posts?: Maybe<Scalars['Int']>;
};

export type GhostTiers = Node & {
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  active: Scalars['Boolean'];
  type?: Maybe<Scalars['String']>;
  welcome_page_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
  stripe_prices?: Maybe<Scalars['String']>;
  monthly_price?: Maybe<Scalars['Int']>;
  yearly_price?: Maybe<Scalars['Int']>;
  visibility: Scalars['String'];
  trial_days?: Maybe<Scalars['Int']>;
  ghostId?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type GhostTiersCreated_AtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type GhostTiersUpdated_AtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction?: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  ghostPost?: Maybe<GhostPost>;
  allGhostPost: GhostPostConnection;
  ghostPage?: Maybe<GhostPage>;
  allGhostPage: GhostPageConnection;
  ghostTag?: Maybe<GhostTag>;
  allGhostTag: GhostTagConnection;
  ghostAuthor?: Maybe<GhostAuthor>;
  allGhostAuthor: GhostAuthorConnection;
  ghostSettings?: Maybe<GhostSettings>;
  allGhostSettings: GhostSettingsConnection;
  ghostTiers?: Maybe<GhostTiers>;
  allGhostTiers: GhostTiersConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<FileSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<DirectorySortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  graphqlTypegen?: InputMaybe<BooleanQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<SiteSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteFunctionArgs = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<SiteFunctionSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<SitePageSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<SitePluginSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<SiteBuildMetadataSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: InputMaybe<ImageSharpFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ImageSharpSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryGhostPostArgs = {
  slug?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  uuid?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  html?: InputMaybe<StringQueryOperatorInput>;
  comment_id?: InputMaybe<StringQueryOperatorInput>;
  feature_image?: InputMaybe<StringQueryOperatorInput>;
  feature_image_caption?: InputMaybe<StringQueryOperatorInput>;
  feature_image_alt?: InputMaybe<StringQueryOperatorInput>;
  featured?: InputMaybe<BooleanQueryOperatorInput>;
  visibility?: InputMaybe<StringQueryOperatorInput>;
  created_at?: InputMaybe<DateQueryOperatorInput>;
  updated_at?: InputMaybe<DateQueryOperatorInput>;
  published_at?: InputMaybe<DateQueryOperatorInput>;
  custom_excerpt?: InputMaybe<StringQueryOperatorInput>;
  codeinjection_head?: InputMaybe<StringQueryOperatorInput>;
  codeinjection_foot?: InputMaybe<StringQueryOperatorInput>;
  codeinjection_styles?: InputMaybe<StringQueryOperatorInput>;
  custom_template?: InputMaybe<StringQueryOperatorInput>;
  canonical_url?: InputMaybe<StringQueryOperatorInput>;
  send_email_when_published?: InputMaybe<BooleanQueryOperatorInput>;
  tags?: InputMaybe<GhostTagFilterListInput>;
  authors?: InputMaybe<GhostAuthorFilterListInput>;
  primary_author?: InputMaybe<GhostAuthorFilterInput>;
  primary_tag?: InputMaybe<GhostTagFilterInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  reading_time?: InputMaybe<IntQueryOperatorInput>;
  email_subject?: InputMaybe<StringQueryOperatorInput>;
  plaintext?: InputMaybe<StringQueryOperatorInput>;
  page?: InputMaybe<BooleanQueryOperatorInput>;
  og_image?: InputMaybe<StringQueryOperatorInput>;
  og_title?: InputMaybe<StringQueryOperatorInput>;
  og_description?: InputMaybe<StringQueryOperatorInput>;
  twitter_image?: InputMaybe<StringQueryOperatorInput>;
  twitter_title?: InputMaybe<StringQueryOperatorInput>;
  twitter_description?: InputMaybe<StringQueryOperatorInput>;
  meta_title?: InputMaybe<StringQueryOperatorInput>;
  meta_description?: InputMaybe<StringQueryOperatorInput>;
  access?: InputMaybe<BooleanQueryOperatorInput>;
  comments?: InputMaybe<BooleanQueryOperatorInput>;
  ghostId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllGhostPostArgs = {
  filter?: InputMaybe<GhostPostFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<GhostPostSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryGhostPageArgs = {
  slug?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  uuid?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  html?: InputMaybe<StringQueryOperatorInput>;
  comment_id?: InputMaybe<StringQueryOperatorInput>;
  feature_image?: InputMaybe<StringQueryOperatorInput>;
  feature_image_caption?: InputMaybe<StringQueryOperatorInput>;
  feature_image_alt?: InputMaybe<StringQueryOperatorInput>;
  featured?: InputMaybe<BooleanQueryOperatorInput>;
  visibility?: InputMaybe<StringQueryOperatorInput>;
  created_at?: InputMaybe<DateQueryOperatorInput>;
  updated_at?: InputMaybe<DateQueryOperatorInput>;
  published_at?: InputMaybe<DateQueryOperatorInput>;
  custom_excerpt?: InputMaybe<StringQueryOperatorInput>;
  codeinjection_head?: InputMaybe<StringQueryOperatorInput>;
  codeinjection_foot?: InputMaybe<StringQueryOperatorInput>;
  codeinjection_styles?: InputMaybe<StringQueryOperatorInput>;
  custom_template?: InputMaybe<StringQueryOperatorInput>;
  canonical_url?: InputMaybe<StringQueryOperatorInput>;
  send_email_when_published?: InputMaybe<BooleanQueryOperatorInput>;
  tags?: InputMaybe<GhostTagFilterListInput>;
  authors?: InputMaybe<GhostAuthorFilterListInput>;
  primary_author?: InputMaybe<GhostAuthorFilterInput>;
  primary_tag?: InputMaybe<GhostTagFilterInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  reading_time?: InputMaybe<IntQueryOperatorInput>;
  email_subject?: InputMaybe<StringQueryOperatorInput>;
  plaintext?: InputMaybe<StringQueryOperatorInput>;
  page?: InputMaybe<BooleanQueryOperatorInput>;
  og_image?: InputMaybe<StringQueryOperatorInput>;
  og_title?: InputMaybe<StringQueryOperatorInput>;
  og_description?: InputMaybe<StringQueryOperatorInput>;
  twitter_image?: InputMaybe<StringQueryOperatorInput>;
  twitter_title?: InputMaybe<StringQueryOperatorInput>;
  twitter_description?: InputMaybe<StringQueryOperatorInput>;
  meta_title?: InputMaybe<StringQueryOperatorInput>;
  meta_description?: InputMaybe<StringQueryOperatorInput>;
  show_title_and_feature_image?: InputMaybe<BooleanQueryOperatorInput>;
  access?: InputMaybe<BooleanQueryOperatorInput>;
  comments?: InputMaybe<BooleanQueryOperatorInput>;
  ghostId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllGhostPageArgs = {
  filter?: InputMaybe<GhostPageFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<GhostPageSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryGhostTagArgs = {
  slug?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  feature_image?: InputMaybe<StringQueryOperatorInput>;
  visibility?: InputMaybe<StringQueryOperatorInput>;
  meta_title?: InputMaybe<StringQueryOperatorInput>;
  meta_description?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  count?: InputMaybe<GhostPostCountFilterInput>;
  postCount?: InputMaybe<IntQueryOperatorInput>;
  og_image?: InputMaybe<StringQueryOperatorInput>;
  og_title?: InputMaybe<StringQueryOperatorInput>;
  og_description?: InputMaybe<StringQueryOperatorInput>;
  twitter_image?: InputMaybe<StringQueryOperatorInput>;
  twitter_title?: InputMaybe<StringQueryOperatorInput>;
  twitter_description?: InputMaybe<StringQueryOperatorInput>;
  codeinjection_head?: InputMaybe<StringQueryOperatorInput>;
  codeinjection_foot?: InputMaybe<StringQueryOperatorInput>;
  canonical_url?: InputMaybe<StringQueryOperatorInput>;
  accent_color?: InputMaybe<StringQueryOperatorInput>;
  ghostId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllGhostTagArgs = {
  filter?: InputMaybe<GhostTagFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<GhostTagSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryGhostAuthorArgs = {
  slug?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  profile_image?: InputMaybe<StringQueryOperatorInput>;
  cover_image?: InputMaybe<StringQueryOperatorInput>;
  bio?: InputMaybe<StringQueryOperatorInput>;
  website?: InputMaybe<StringQueryOperatorInput>;
  location?: InputMaybe<StringQueryOperatorInput>;
  facebook?: InputMaybe<StringQueryOperatorInput>;
  twitter?: InputMaybe<StringQueryOperatorInput>;
  meta_title?: InputMaybe<StringQueryOperatorInput>;
  meta_description?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  count?: InputMaybe<GhostPostCountFilterInput>;
  postCount?: InputMaybe<IntQueryOperatorInput>;
  ghostId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllGhostAuthorArgs = {
  filter?: InputMaybe<GhostAuthorFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<GhostAuthorSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryGhostSettingsArgs = {
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  logo?: InputMaybe<StringQueryOperatorInput>;
  icon?: InputMaybe<StringQueryOperatorInput>;
  cover_image?: InputMaybe<StringQueryOperatorInput>;
  facebook?: InputMaybe<StringQueryOperatorInput>;
  twitter?: InputMaybe<StringQueryOperatorInput>;
  lang?: InputMaybe<StringQueryOperatorInput>;
  timezone?: InputMaybe<StringQueryOperatorInput>;
  navigation?: InputMaybe<GhostNavigationFilterListInput>;
  secondary_navigation?: InputMaybe<GhostNavigationFilterListInput>;
  meta_title?: InputMaybe<StringQueryOperatorInput>;
  meta_description?: InputMaybe<StringQueryOperatorInput>;
  og_image?: InputMaybe<StringQueryOperatorInput>;
  og_title?: InputMaybe<StringQueryOperatorInput>;
  og_description?: InputMaybe<StringQueryOperatorInput>;
  twitter_image?: InputMaybe<StringQueryOperatorInput>;
  twitter_title?: InputMaybe<StringQueryOperatorInput>;
  twitter_description?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  codeinjection_head?: InputMaybe<StringQueryOperatorInput>;
  codeinjection_foot?: InputMaybe<StringQueryOperatorInput>;
  codeinjection_styles?: InputMaybe<StringQueryOperatorInput>;
  active_timezone?: InputMaybe<StringQueryOperatorInput>;
  default_locale?: InputMaybe<StringQueryOperatorInput>;
  accent_color?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<StringQueryOperatorInput>;
  members_support_address?: InputMaybe<StringQueryOperatorInput>;
  members_enabled?: InputMaybe<BooleanQueryOperatorInput>;
  allow_self_signup?: InputMaybe<BooleanQueryOperatorInput>;
  members_invite_only?: InputMaybe<BooleanQueryOperatorInput>;
  paid_members_enabled?: InputMaybe<BooleanQueryOperatorInput>;
  portal_button_style?: InputMaybe<StringQueryOperatorInput>;
  portal_button_signup_text?: InputMaybe<StringQueryOperatorInput>;
  portal_signup_checkbox_required?: InputMaybe<BooleanQueryOperatorInput>;
  portal_plans?: InputMaybe<StringQueryOperatorInput>;
  portal_name?: InputMaybe<BooleanQueryOperatorInput>;
  portal_button?: InputMaybe<BooleanQueryOperatorInput>;
  comments_enabled?: InputMaybe<StringQueryOperatorInput>;
  recommendations_enabled?: InputMaybe<BooleanQueryOperatorInput>;
  outbound_link_tagging?: InputMaybe<BooleanQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  ghostId?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllGhostSettingsArgs = {
  filter?: InputMaybe<GhostSettingsFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<GhostSettingsSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryGhostTiersArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  active?: InputMaybe<BooleanQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  welcome_page_url?: InputMaybe<StringQueryOperatorInput>;
  created_at?: InputMaybe<DateQueryOperatorInput>;
  updated_at?: InputMaybe<DateQueryOperatorInput>;
  stripe_prices?: InputMaybe<StringQueryOperatorInput>;
  monthly_price?: InputMaybe<IntQueryOperatorInput>;
  yearly_price?: InputMaybe<IntQueryOperatorInput>;
  visibility?: InputMaybe<StringQueryOperatorInput>;
  trial_days?: InputMaybe<IntQueryOperatorInput>;
  ghostId?: InputMaybe<StringQueryOperatorInput>;
  currency?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllGhostTiersArgs = {
  filter?: InputMaybe<GhostTiersFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<GhostTiersSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFilterInput = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ImageSharpFixedFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  originalImg?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  presentationWidth?: InputMaybe<IntQueryOperatorInput>;
  presentationHeight?: InputMaybe<IntQueryOperatorInput>;
};

export type GatsbyImageDataQueryOperatorInput = {
  eq?: InputMaybe<Scalars['GatsbyImageData']>;
  ne?: InputMaybe<Scalars['GatsbyImageData']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['GatsbyImageData']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['GatsbyImageData']>>>;
};

export type ImageSharpOriginalFilterInput = {
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpResizeFilterInput = {
  src?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type NodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
  contentDigest?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  owner?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  contentFilePath?: InputMaybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldSelector;
};


export type FileConnectionMaxArgs = {
  field: FileFieldSelector;
};


export type FileConnectionMinArgs = {
  field: FileFieldSelector;
};


export type FileConnectionSumArgs = {
  field: FileFieldSelector;
};


export type FileConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldSelector;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type FileFieldSelector = {
  sourceInstanceName?: InputMaybe<FieldSelectorEnum>;
  absolutePath?: InputMaybe<FieldSelectorEnum>;
  relativePath?: InputMaybe<FieldSelectorEnum>;
  extension?: InputMaybe<FieldSelectorEnum>;
  size?: InputMaybe<FieldSelectorEnum>;
  prettySize?: InputMaybe<FieldSelectorEnum>;
  modifiedTime?: InputMaybe<FieldSelectorEnum>;
  accessTime?: InputMaybe<FieldSelectorEnum>;
  changeTime?: InputMaybe<FieldSelectorEnum>;
  birthTime?: InputMaybe<FieldSelectorEnum>;
  root?: InputMaybe<FieldSelectorEnum>;
  dir?: InputMaybe<FieldSelectorEnum>;
  base?: InputMaybe<FieldSelectorEnum>;
  ext?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  relativeDirectory?: InputMaybe<FieldSelectorEnum>;
  dev?: InputMaybe<FieldSelectorEnum>;
  mode?: InputMaybe<FieldSelectorEnum>;
  nlink?: InputMaybe<FieldSelectorEnum>;
  uid?: InputMaybe<FieldSelectorEnum>;
  gid?: InputMaybe<FieldSelectorEnum>;
  rdev?: InputMaybe<FieldSelectorEnum>;
  ino?: InputMaybe<FieldSelectorEnum>;
  atimeMs?: InputMaybe<FieldSelectorEnum>;
  mtimeMs?: InputMaybe<FieldSelectorEnum>;
  ctimeMs?: InputMaybe<FieldSelectorEnum>;
  atime?: InputMaybe<FieldSelectorEnum>;
  mtime?: InputMaybe<FieldSelectorEnum>;
  ctime?: InputMaybe<FieldSelectorEnum>;
  birthtime?: InputMaybe<FieldSelectorEnum>;
  birthtimeMs?: InputMaybe<FieldSelectorEnum>;
  blksize?: InputMaybe<FieldSelectorEnum>;
  blocks?: InputMaybe<FieldSelectorEnum>;
  publicURL?: InputMaybe<FieldSelectorEnum>;
  childrenImageSharp?: InputMaybe<ImageSharpFieldSelector>;
  childImageSharp?: InputMaybe<ImageSharpFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type FieldSelectorEnum =
  | 'SELECT';

export type ImageSharpFieldSelector = {
  fixed?: InputMaybe<ImageSharpFixedFieldSelector>;
  fluid?: InputMaybe<ImageSharpFluidFieldSelector>;
  gatsbyImageData?: InputMaybe<FieldSelectorEnum>;
  original?: InputMaybe<ImageSharpOriginalFieldSelector>;
  resize?: InputMaybe<ImageSharpResizeFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ImageSharpFixedFieldSelector = {
  base64?: InputMaybe<FieldSelectorEnum>;
  tracedSVG?: InputMaybe<FieldSelectorEnum>;
  aspectRatio?: InputMaybe<FieldSelectorEnum>;
  width?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
  src?: InputMaybe<FieldSelectorEnum>;
  srcSet?: InputMaybe<FieldSelectorEnum>;
  srcWebp?: InputMaybe<FieldSelectorEnum>;
  srcSetWebp?: InputMaybe<FieldSelectorEnum>;
  originalName?: InputMaybe<FieldSelectorEnum>;
};

export type ImageSharpFluidFieldSelector = {
  base64?: InputMaybe<FieldSelectorEnum>;
  tracedSVG?: InputMaybe<FieldSelectorEnum>;
  aspectRatio?: InputMaybe<FieldSelectorEnum>;
  src?: InputMaybe<FieldSelectorEnum>;
  srcSet?: InputMaybe<FieldSelectorEnum>;
  srcWebp?: InputMaybe<FieldSelectorEnum>;
  srcSetWebp?: InputMaybe<FieldSelectorEnum>;
  sizes?: InputMaybe<FieldSelectorEnum>;
  originalImg?: InputMaybe<FieldSelectorEnum>;
  originalName?: InputMaybe<FieldSelectorEnum>;
  presentationWidth?: InputMaybe<FieldSelectorEnum>;
  presentationHeight?: InputMaybe<FieldSelectorEnum>;
};

export type ImageSharpOriginalFieldSelector = {
  width?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
  src?: InputMaybe<FieldSelectorEnum>;
};

export type ImageSharpResizeFieldSelector = {
  src?: InputMaybe<FieldSelectorEnum>;
  tracedSVG?: InputMaybe<FieldSelectorEnum>;
  width?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
  aspectRatio?: InputMaybe<FieldSelectorEnum>;
  originalName?: InputMaybe<FieldSelectorEnum>;
};

export type NodeFieldSelector = {
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type InternalFieldSelector = {
  content?: InputMaybe<FieldSelectorEnum>;
  contentDigest?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<FieldSelectorEnum>;
  fieldOwners?: InputMaybe<FieldSelectorEnum>;
  ignoreType?: InputMaybe<FieldSelectorEnum>;
  mediaType?: InputMaybe<FieldSelectorEnum>;
  owner?: InputMaybe<FieldSelectorEnum>;
  type?: InputMaybe<FieldSelectorEnum>;
  contentFilePath?: InputMaybe<FieldSelectorEnum>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldSelector;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldSelector;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldSelector;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldSelector;
};


export type FileGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldSelector;
};

export type FileFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type FileSortInput = {
  sourceInstanceName?: InputMaybe<SortOrderEnum>;
  absolutePath?: InputMaybe<SortOrderEnum>;
  relativePath?: InputMaybe<SortOrderEnum>;
  extension?: InputMaybe<SortOrderEnum>;
  size?: InputMaybe<SortOrderEnum>;
  prettySize?: InputMaybe<SortOrderEnum>;
  modifiedTime?: InputMaybe<SortOrderEnum>;
  accessTime?: InputMaybe<SortOrderEnum>;
  changeTime?: InputMaybe<SortOrderEnum>;
  birthTime?: InputMaybe<SortOrderEnum>;
  root?: InputMaybe<SortOrderEnum>;
  dir?: InputMaybe<SortOrderEnum>;
  base?: InputMaybe<SortOrderEnum>;
  ext?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  relativeDirectory?: InputMaybe<SortOrderEnum>;
  dev?: InputMaybe<SortOrderEnum>;
  mode?: InputMaybe<SortOrderEnum>;
  nlink?: InputMaybe<SortOrderEnum>;
  uid?: InputMaybe<SortOrderEnum>;
  gid?: InputMaybe<SortOrderEnum>;
  rdev?: InputMaybe<SortOrderEnum>;
  ino?: InputMaybe<SortOrderEnum>;
  atimeMs?: InputMaybe<SortOrderEnum>;
  mtimeMs?: InputMaybe<SortOrderEnum>;
  ctimeMs?: InputMaybe<SortOrderEnum>;
  atime?: InputMaybe<SortOrderEnum>;
  mtime?: InputMaybe<SortOrderEnum>;
  ctime?: InputMaybe<SortOrderEnum>;
  birthtime?: InputMaybe<SortOrderEnum>;
  birthtimeMs?: InputMaybe<SortOrderEnum>;
  blksize?: InputMaybe<SortOrderEnum>;
  blocks?: InputMaybe<SortOrderEnum>;
  publicURL?: InputMaybe<SortOrderEnum>;
  childrenImageSharp?: InputMaybe<ImageSharpSortInput>;
  childImageSharp?: InputMaybe<ImageSharpSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type ImageSharpSortInput = {
  fixed?: InputMaybe<ImageSharpFixedSortInput>;
  fluid?: InputMaybe<ImageSharpFluidSortInput>;
  gatsbyImageData?: InputMaybe<SortOrderEnum>;
  original?: InputMaybe<ImageSharpOriginalSortInput>;
  resize?: InputMaybe<ImageSharpResizeSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ImageSharpFixedSortInput = {
  base64?: InputMaybe<SortOrderEnum>;
  tracedSVG?: InputMaybe<SortOrderEnum>;
  aspectRatio?: InputMaybe<SortOrderEnum>;
  width?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
  src?: InputMaybe<SortOrderEnum>;
  srcSet?: InputMaybe<SortOrderEnum>;
  srcWebp?: InputMaybe<SortOrderEnum>;
  srcSetWebp?: InputMaybe<SortOrderEnum>;
  originalName?: InputMaybe<SortOrderEnum>;
};

export type ImageSharpFluidSortInput = {
  base64?: InputMaybe<SortOrderEnum>;
  tracedSVG?: InputMaybe<SortOrderEnum>;
  aspectRatio?: InputMaybe<SortOrderEnum>;
  src?: InputMaybe<SortOrderEnum>;
  srcSet?: InputMaybe<SortOrderEnum>;
  srcWebp?: InputMaybe<SortOrderEnum>;
  srcSetWebp?: InputMaybe<SortOrderEnum>;
  sizes?: InputMaybe<SortOrderEnum>;
  originalImg?: InputMaybe<SortOrderEnum>;
  originalName?: InputMaybe<SortOrderEnum>;
  presentationWidth?: InputMaybe<SortOrderEnum>;
  presentationHeight?: InputMaybe<SortOrderEnum>;
};

export type ImageSharpOriginalSortInput = {
  width?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
  src?: InputMaybe<SortOrderEnum>;
};

export type ImageSharpResizeSortInput = {
  src?: InputMaybe<SortOrderEnum>;
  tracedSVG?: InputMaybe<SortOrderEnum>;
  width?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
  aspectRatio?: InputMaybe<SortOrderEnum>;
  originalName?: InputMaybe<SortOrderEnum>;
};

export type NodeSortInput = {
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type InternalSortInput = {
  content?: InputMaybe<SortOrderEnum>;
  contentDigest?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<SortOrderEnum>;
  fieldOwners?: InputMaybe<SortOrderEnum>;
  ignoreType?: InputMaybe<SortOrderEnum>;
  mediaType?: InputMaybe<SortOrderEnum>;
  owner?: InputMaybe<SortOrderEnum>;
  type?: InputMaybe<SortOrderEnum>;
  contentFilePath?: InputMaybe<SortOrderEnum>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldSelector;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldSelector = {
  sourceInstanceName?: InputMaybe<FieldSelectorEnum>;
  absolutePath?: InputMaybe<FieldSelectorEnum>;
  relativePath?: InputMaybe<FieldSelectorEnum>;
  extension?: InputMaybe<FieldSelectorEnum>;
  size?: InputMaybe<FieldSelectorEnum>;
  prettySize?: InputMaybe<FieldSelectorEnum>;
  modifiedTime?: InputMaybe<FieldSelectorEnum>;
  accessTime?: InputMaybe<FieldSelectorEnum>;
  changeTime?: InputMaybe<FieldSelectorEnum>;
  birthTime?: InputMaybe<FieldSelectorEnum>;
  root?: InputMaybe<FieldSelectorEnum>;
  dir?: InputMaybe<FieldSelectorEnum>;
  base?: InputMaybe<FieldSelectorEnum>;
  ext?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  relativeDirectory?: InputMaybe<FieldSelectorEnum>;
  dev?: InputMaybe<FieldSelectorEnum>;
  mode?: InputMaybe<FieldSelectorEnum>;
  nlink?: InputMaybe<FieldSelectorEnum>;
  uid?: InputMaybe<FieldSelectorEnum>;
  gid?: InputMaybe<FieldSelectorEnum>;
  rdev?: InputMaybe<FieldSelectorEnum>;
  ino?: InputMaybe<FieldSelectorEnum>;
  atimeMs?: InputMaybe<FieldSelectorEnum>;
  mtimeMs?: InputMaybe<FieldSelectorEnum>;
  ctimeMs?: InputMaybe<FieldSelectorEnum>;
  atime?: InputMaybe<FieldSelectorEnum>;
  mtime?: InputMaybe<FieldSelectorEnum>;
  ctime?: InputMaybe<FieldSelectorEnum>;
  birthtime?: InputMaybe<FieldSelectorEnum>;
  birthtimeMs?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldSelector;
};

export type DirectoryFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  sourceInstanceName?: InputMaybe<SortOrderEnum>;
  absolutePath?: InputMaybe<SortOrderEnum>;
  relativePath?: InputMaybe<SortOrderEnum>;
  extension?: InputMaybe<SortOrderEnum>;
  size?: InputMaybe<SortOrderEnum>;
  prettySize?: InputMaybe<SortOrderEnum>;
  modifiedTime?: InputMaybe<SortOrderEnum>;
  accessTime?: InputMaybe<SortOrderEnum>;
  changeTime?: InputMaybe<SortOrderEnum>;
  birthTime?: InputMaybe<SortOrderEnum>;
  root?: InputMaybe<SortOrderEnum>;
  dir?: InputMaybe<SortOrderEnum>;
  base?: InputMaybe<SortOrderEnum>;
  ext?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  relativeDirectory?: InputMaybe<SortOrderEnum>;
  dev?: InputMaybe<SortOrderEnum>;
  mode?: InputMaybe<SortOrderEnum>;
  nlink?: InputMaybe<SortOrderEnum>;
  uid?: InputMaybe<SortOrderEnum>;
  gid?: InputMaybe<SortOrderEnum>;
  rdev?: InputMaybe<SortOrderEnum>;
  ino?: InputMaybe<SortOrderEnum>;
  atimeMs?: InputMaybe<SortOrderEnum>;
  mtimeMs?: InputMaybe<SortOrderEnum>;
  ctimeMs?: InputMaybe<SortOrderEnum>;
  atime?: InputMaybe<SortOrderEnum>;
  mtime?: InputMaybe<SortOrderEnum>;
  ctime?: InputMaybe<SortOrderEnum>;
  birthtime?: InputMaybe<SortOrderEnum>;
  birthtimeMs?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type SiteSiteMetadataFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  siteUrl?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldSelector;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldSelector;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldSelector;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldSelector;
};


export type SiteConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldSelector;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldSelector = {
  buildTime?: InputMaybe<FieldSelectorEnum>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFieldSelector>;
  port?: InputMaybe<FieldSelectorEnum>;
  host?: InputMaybe<FieldSelectorEnum>;
  trailingSlash?: InputMaybe<FieldSelectorEnum>;
  polyfill?: InputMaybe<FieldSelectorEnum>;
  pathPrefix?: InputMaybe<FieldSelectorEnum>;
  jsxRuntime?: InputMaybe<FieldSelectorEnum>;
  graphqlTypegen?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type SiteSiteMetadataFieldSelector = {
  title?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<FieldSelectorEnum>;
  siteUrl?: InputMaybe<FieldSelectorEnum>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldSelector;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldSelector;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldSelector;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldSelector;
};


export type SiteGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldSelector;
};

export type SiteFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  graphqlTypegen?: InputMaybe<BooleanQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteSortInput = {
  buildTime?: InputMaybe<SortOrderEnum>;
  siteMetadata?: InputMaybe<SiteSiteMetadataSortInput>;
  port?: InputMaybe<SortOrderEnum>;
  host?: InputMaybe<SortOrderEnum>;
  trailingSlash?: InputMaybe<SortOrderEnum>;
  polyfill?: InputMaybe<SortOrderEnum>;
  pathPrefix?: InputMaybe<SortOrderEnum>;
  jsxRuntime?: InputMaybe<SortOrderEnum>;
  graphqlTypegen?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type SiteSiteMetadataSortInput = {
  title?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<SortOrderEnum>;
  siteUrl?: InputMaybe<SortOrderEnum>;
};

export type SiteFunctionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldSelector;
};

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export type SiteFunctionFieldSelector = {
  functionRoute?: InputMaybe<FieldSelectorEnum>;
  pluginName?: InputMaybe<FieldSelectorEnum>;
  originalAbsoluteFilePath?: InputMaybe<FieldSelectorEnum>;
  originalRelativeFilePath?: InputMaybe<FieldSelectorEnum>;
  relativeCompiledFilePath?: InputMaybe<FieldSelectorEnum>;
  absoluteCompiledFilePath?: InputMaybe<FieldSelectorEnum>;
  matchPath?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type SiteFunctionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldSelector;
};

export type SiteFunctionFilterInput = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteFunctionSortInput = {
  functionRoute?: InputMaybe<SortOrderEnum>;
  pluginName?: InputMaybe<SortOrderEnum>;
  originalAbsoluteFilePath?: InputMaybe<SortOrderEnum>;
  originalRelativeFilePath?: InputMaybe<SortOrderEnum>;
  relativeCompiledFilePath?: InputMaybe<SortOrderEnum>;
  absoluteCompiledFilePath?: InputMaybe<SortOrderEnum>;
  matchPath?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex?: InputMaybe<Scalars['JSON']>;
  glob?: InputMaybe<Scalars['JSON']>;
};

export type SitePluginFilterInput = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldSelector;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldSelector;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldSelector;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldSelector;
};


export type SitePageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldSelector;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldSelector = {
  path?: InputMaybe<FieldSelectorEnum>;
  component?: InputMaybe<FieldSelectorEnum>;
  internalComponentName?: InputMaybe<FieldSelectorEnum>;
  componentChunkName?: InputMaybe<FieldSelectorEnum>;
  matchPath?: InputMaybe<FieldSelectorEnum>;
  pageContext?: InputMaybe<FieldSelectorEnum>;
  pluginCreator?: InputMaybe<SitePluginFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type SitePluginFieldSelector = {
  resolve?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  version?: InputMaybe<FieldSelectorEnum>;
  nodeAPIs?: InputMaybe<FieldSelectorEnum>;
  browserAPIs?: InputMaybe<FieldSelectorEnum>;
  ssrAPIs?: InputMaybe<FieldSelectorEnum>;
  pluginFilepath?: InputMaybe<FieldSelectorEnum>;
  pluginOptions?: InputMaybe<FieldSelectorEnum>;
  packageJson?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldSelector;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldSelector;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldSelector;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldSelector;
};


export type SitePageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldSelector;
};

export type SitePageFilterInput = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageSortInput = {
  path?: InputMaybe<SortOrderEnum>;
  component?: InputMaybe<SortOrderEnum>;
  internalComponentName?: InputMaybe<SortOrderEnum>;
  componentChunkName?: InputMaybe<SortOrderEnum>;
  matchPath?: InputMaybe<SortOrderEnum>;
  pageContext?: InputMaybe<SortOrderEnum>;
  pluginCreator?: InputMaybe<SitePluginSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type SitePluginSortInput = {
  resolve?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  version?: InputMaybe<SortOrderEnum>;
  nodeAPIs?: InputMaybe<SortOrderEnum>;
  browserAPIs?: InputMaybe<SortOrderEnum>;
  ssrAPIs?: InputMaybe<SortOrderEnum>;
  pluginFilepath?: InputMaybe<SortOrderEnum>;
  pluginOptions?: InputMaybe<SortOrderEnum>;
  packageJson?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldSelector;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldSelector;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldSelector;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldSelector = {
  buildTime?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldSelector;
};

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteBuildMetadataSortInput = {
  buildTime?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldSelector;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldSelector;
};

export type GhostTagFilterListInput = {
  elemMatch?: InputMaybe<GhostTagFilterInput>;
};

export type GhostTagFilterInput = {
  slug?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  feature_image?: InputMaybe<StringQueryOperatorInput>;
  visibility?: InputMaybe<StringQueryOperatorInput>;
  meta_title?: InputMaybe<StringQueryOperatorInput>;
  meta_description?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  count?: InputMaybe<GhostPostCountFilterInput>;
  postCount?: InputMaybe<IntQueryOperatorInput>;
  og_image?: InputMaybe<StringQueryOperatorInput>;
  og_title?: InputMaybe<StringQueryOperatorInput>;
  og_description?: InputMaybe<StringQueryOperatorInput>;
  twitter_image?: InputMaybe<StringQueryOperatorInput>;
  twitter_title?: InputMaybe<StringQueryOperatorInput>;
  twitter_description?: InputMaybe<StringQueryOperatorInput>;
  codeinjection_head?: InputMaybe<StringQueryOperatorInput>;
  codeinjection_foot?: InputMaybe<StringQueryOperatorInput>;
  canonical_url?: InputMaybe<StringQueryOperatorInput>;
  accent_color?: InputMaybe<StringQueryOperatorInput>;
  ghostId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type GhostPostCountFilterInput = {
  posts?: InputMaybe<IntQueryOperatorInput>;
};

export type GhostAuthorFilterListInput = {
  elemMatch?: InputMaybe<GhostAuthorFilterInput>;
};

export type GhostAuthorFilterInput = {
  slug?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  profile_image?: InputMaybe<StringQueryOperatorInput>;
  cover_image?: InputMaybe<StringQueryOperatorInput>;
  bio?: InputMaybe<StringQueryOperatorInput>;
  website?: InputMaybe<StringQueryOperatorInput>;
  location?: InputMaybe<StringQueryOperatorInput>;
  facebook?: InputMaybe<StringQueryOperatorInput>;
  twitter?: InputMaybe<StringQueryOperatorInput>;
  meta_title?: InputMaybe<StringQueryOperatorInput>;
  meta_description?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  count?: InputMaybe<GhostPostCountFilterInput>;
  postCount?: InputMaybe<IntQueryOperatorInput>;
  ghostId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type GhostPostConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GhostPostEdge>;
  nodes: Array<GhostPost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GhostPostGroupConnection>;
};


export type GhostPostConnectionDistinctArgs = {
  field: GhostPostFieldSelector;
};


export type GhostPostConnectionMaxArgs = {
  field: GhostPostFieldSelector;
};


export type GhostPostConnectionMinArgs = {
  field: GhostPostFieldSelector;
};


export type GhostPostConnectionSumArgs = {
  field: GhostPostFieldSelector;
};


export type GhostPostConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GhostPostFieldSelector;
};

export type GhostPostEdge = {
  next?: Maybe<GhostPost>;
  node: GhostPost;
  previous?: Maybe<GhostPost>;
};

export type GhostPostFieldSelector = {
  slug?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  uuid?: InputMaybe<FieldSelectorEnum>;
  title?: InputMaybe<FieldSelectorEnum>;
  html?: InputMaybe<FieldSelectorEnum>;
  comment_id?: InputMaybe<FieldSelectorEnum>;
  feature_image?: InputMaybe<FieldSelectorEnum>;
  feature_image_caption?: InputMaybe<FieldSelectorEnum>;
  feature_image_alt?: InputMaybe<FieldSelectorEnum>;
  featured?: InputMaybe<FieldSelectorEnum>;
  visibility?: InputMaybe<FieldSelectorEnum>;
  created_at?: InputMaybe<FieldSelectorEnum>;
  updated_at?: InputMaybe<FieldSelectorEnum>;
  published_at?: InputMaybe<FieldSelectorEnum>;
  custom_excerpt?: InputMaybe<FieldSelectorEnum>;
  codeinjection_head?: InputMaybe<FieldSelectorEnum>;
  codeinjection_foot?: InputMaybe<FieldSelectorEnum>;
  codeinjection_styles?: InputMaybe<FieldSelectorEnum>;
  custom_template?: InputMaybe<FieldSelectorEnum>;
  canonical_url?: InputMaybe<FieldSelectorEnum>;
  send_email_when_published?: InputMaybe<FieldSelectorEnum>;
  tags?: InputMaybe<GhostTagFieldSelector>;
  authors?: InputMaybe<GhostAuthorFieldSelector>;
  primary_author?: InputMaybe<GhostAuthorFieldSelector>;
  primary_tag?: InputMaybe<GhostTagFieldSelector>;
  url?: InputMaybe<FieldSelectorEnum>;
  excerpt?: InputMaybe<FieldSelectorEnum>;
  reading_time?: InputMaybe<FieldSelectorEnum>;
  email_subject?: InputMaybe<FieldSelectorEnum>;
  plaintext?: InputMaybe<FieldSelectorEnum>;
  page?: InputMaybe<FieldSelectorEnum>;
  og_image?: InputMaybe<FieldSelectorEnum>;
  og_title?: InputMaybe<FieldSelectorEnum>;
  og_description?: InputMaybe<FieldSelectorEnum>;
  twitter_image?: InputMaybe<FieldSelectorEnum>;
  twitter_title?: InputMaybe<FieldSelectorEnum>;
  twitter_description?: InputMaybe<FieldSelectorEnum>;
  meta_title?: InputMaybe<FieldSelectorEnum>;
  meta_description?: InputMaybe<FieldSelectorEnum>;
  access?: InputMaybe<FieldSelectorEnum>;
  comments?: InputMaybe<FieldSelectorEnum>;
  ghostId?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type GhostTagFieldSelector = {
  slug?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<FieldSelectorEnum>;
  feature_image?: InputMaybe<FieldSelectorEnum>;
  visibility?: InputMaybe<FieldSelectorEnum>;
  meta_title?: InputMaybe<FieldSelectorEnum>;
  meta_description?: InputMaybe<FieldSelectorEnum>;
  url?: InputMaybe<FieldSelectorEnum>;
  count?: InputMaybe<GhostPostCountFieldSelector>;
  postCount?: InputMaybe<FieldSelectorEnum>;
  og_image?: InputMaybe<FieldSelectorEnum>;
  og_title?: InputMaybe<FieldSelectorEnum>;
  og_description?: InputMaybe<FieldSelectorEnum>;
  twitter_image?: InputMaybe<FieldSelectorEnum>;
  twitter_title?: InputMaybe<FieldSelectorEnum>;
  twitter_description?: InputMaybe<FieldSelectorEnum>;
  codeinjection_head?: InputMaybe<FieldSelectorEnum>;
  codeinjection_foot?: InputMaybe<FieldSelectorEnum>;
  canonical_url?: InputMaybe<FieldSelectorEnum>;
  accent_color?: InputMaybe<FieldSelectorEnum>;
  ghostId?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type GhostPostCountFieldSelector = {
  posts?: InputMaybe<FieldSelectorEnum>;
};

export type GhostAuthorFieldSelector = {
  slug?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  profile_image?: InputMaybe<FieldSelectorEnum>;
  cover_image?: InputMaybe<FieldSelectorEnum>;
  bio?: InputMaybe<FieldSelectorEnum>;
  website?: InputMaybe<FieldSelectorEnum>;
  location?: InputMaybe<FieldSelectorEnum>;
  facebook?: InputMaybe<FieldSelectorEnum>;
  twitter?: InputMaybe<FieldSelectorEnum>;
  meta_title?: InputMaybe<FieldSelectorEnum>;
  meta_description?: InputMaybe<FieldSelectorEnum>;
  url?: InputMaybe<FieldSelectorEnum>;
  count?: InputMaybe<GhostPostCountFieldSelector>;
  postCount?: InputMaybe<FieldSelectorEnum>;
  ghostId?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type GhostPostGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GhostPostEdge>;
  nodes: Array<GhostPost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GhostPostGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type GhostPostGroupConnectionDistinctArgs = {
  field: GhostPostFieldSelector;
};


export type GhostPostGroupConnectionMaxArgs = {
  field: GhostPostFieldSelector;
};


export type GhostPostGroupConnectionMinArgs = {
  field: GhostPostFieldSelector;
};


export type GhostPostGroupConnectionSumArgs = {
  field: GhostPostFieldSelector;
};


export type GhostPostGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GhostPostFieldSelector;
};

export type GhostPostFilterInput = {
  slug?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  uuid?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  html?: InputMaybe<StringQueryOperatorInput>;
  comment_id?: InputMaybe<StringQueryOperatorInput>;
  feature_image?: InputMaybe<StringQueryOperatorInput>;
  feature_image_caption?: InputMaybe<StringQueryOperatorInput>;
  feature_image_alt?: InputMaybe<StringQueryOperatorInput>;
  featured?: InputMaybe<BooleanQueryOperatorInput>;
  visibility?: InputMaybe<StringQueryOperatorInput>;
  created_at?: InputMaybe<DateQueryOperatorInput>;
  updated_at?: InputMaybe<DateQueryOperatorInput>;
  published_at?: InputMaybe<DateQueryOperatorInput>;
  custom_excerpt?: InputMaybe<StringQueryOperatorInput>;
  codeinjection_head?: InputMaybe<StringQueryOperatorInput>;
  codeinjection_foot?: InputMaybe<StringQueryOperatorInput>;
  codeinjection_styles?: InputMaybe<StringQueryOperatorInput>;
  custom_template?: InputMaybe<StringQueryOperatorInput>;
  canonical_url?: InputMaybe<StringQueryOperatorInput>;
  send_email_when_published?: InputMaybe<BooleanQueryOperatorInput>;
  tags?: InputMaybe<GhostTagFilterListInput>;
  authors?: InputMaybe<GhostAuthorFilterListInput>;
  primary_author?: InputMaybe<GhostAuthorFilterInput>;
  primary_tag?: InputMaybe<GhostTagFilterInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  reading_time?: InputMaybe<IntQueryOperatorInput>;
  email_subject?: InputMaybe<StringQueryOperatorInput>;
  plaintext?: InputMaybe<StringQueryOperatorInput>;
  page?: InputMaybe<BooleanQueryOperatorInput>;
  og_image?: InputMaybe<StringQueryOperatorInput>;
  og_title?: InputMaybe<StringQueryOperatorInput>;
  og_description?: InputMaybe<StringQueryOperatorInput>;
  twitter_image?: InputMaybe<StringQueryOperatorInput>;
  twitter_title?: InputMaybe<StringQueryOperatorInput>;
  twitter_description?: InputMaybe<StringQueryOperatorInput>;
  meta_title?: InputMaybe<StringQueryOperatorInput>;
  meta_description?: InputMaybe<StringQueryOperatorInput>;
  access?: InputMaybe<BooleanQueryOperatorInput>;
  comments?: InputMaybe<BooleanQueryOperatorInput>;
  ghostId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type GhostPostSortInput = {
  slug?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  uuid?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
  html?: InputMaybe<SortOrderEnum>;
  comment_id?: InputMaybe<SortOrderEnum>;
  feature_image?: InputMaybe<SortOrderEnum>;
  feature_image_caption?: InputMaybe<SortOrderEnum>;
  feature_image_alt?: InputMaybe<SortOrderEnum>;
  featured?: InputMaybe<SortOrderEnum>;
  visibility?: InputMaybe<SortOrderEnum>;
  created_at?: InputMaybe<SortOrderEnum>;
  updated_at?: InputMaybe<SortOrderEnum>;
  published_at?: InputMaybe<SortOrderEnum>;
  custom_excerpt?: InputMaybe<SortOrderEnum>;
  codeinjection_head?: InputMaybe<SortOrderEnum>;
  codeinjection_foot?: InputMaybe<SortOrderEnum>;
  codeinjection_styles?: InputMaybe<SortOrderEnum>;
  custom_template?: InputMaybe<SortOrderEnum>;
  canonical_url?: InputMaybe<SortOrderEnum>;
  send_email_when_published?: InputMaybe<SortOrderEnum>;
  tags?: InputMaybe<GhostTagSortInput>;
  authors?: InputMaybe<GhostAuthorSortInput>;
  primary_author?: InputMaybe<GhostAuthorSortInput>;
  primary_tag?: InputMaybe<GhostTagSortInput>;
  url?: InputMaybe<SortOrderEnum>;
  excerpt?: InputMaybe<SortOrderEnum>;
  reading_time?: InputMaybe<SortOrderEnum>;
  email_subject?: InputMaybe<SortOrderEnum>;
  plaintext?: InputMaybe<SortOrderEnum>;
  page?: InputMaybe<SortOrderEnum>;
  og_image?: InputMaybe<SortOrderEnum>;
  og_title?: InputMaybe<SortOrderEnum>;
  og_description?: InputMaybe<SortOrderEnum>;
  twitter_image?: InputMaybe<SortOrderEnum>;
  twitter_title?: InputMaybe<SortOrderEnum>;
  twitter_description?: InputMaybe<SortOrderEnum>;
  meta_title?: InputMaybe<SortOrderEnum>;
  meta_description?: InputMaybe<SortOrderEnum>;
  access?: InputMaybe<SortOrderEnum>;
  comments?: InputMaybe<SortOrderEnum>;
  ghostId?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type GhostTagSortInput = {
  slug?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<SortOrderEnum>;
  feature_image?: InputMaybe<SortOrderEnum>;
  visibility?: InputMaybe<SortOrderEnum>;
  meta_title?: InputMaybe<SortOrderEnum>;
  meta_description?: InputMaybe<SortOrderEnum>;
  url?: InputMaybe<SortOrderEnum>;
  count?: InputMaybe<GhostPostCountSortInput>;
  postCount?: InputMaybe<SortOrderEnum>;
  og_image?: InputMaybe<SortOrderEnum>;
  og_title?: InputMaybe<SortOrderEnum>;
  og_description?: InputMaybe<SortOrderEnum>;
  twitter_image?: InputMaybe<SortOrderEnum>;
  twitter_title?: InputMaybe<SortOrderEnum>;
  twitter_description?: InputMaybe<SortOrderEnum>;
  codeinjection_head?: InputMaybe<SortOrderEnum>;
  codeinjection_foot?: InputMaybe<SortOrderEnum>;
  canonical_url?: InputMaybe<SortOrderEnum>;
  accent_color?: InputMaybe<SortOrderEnum>;
  ghostId?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type GhostPostCountSortInput = {
  posts?: InputMaybe<SortOrderEnum>;
};

export type GhostAuthorSortInput = {
  slug?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  profile_image?: InputMaybe<SortOrderEnum>;
  cover_image?: InputMaybe<SortOrderEnum>;
  bio?: InputMaybe<SortOrderEnum>;
  website?: InputMaybe<SortOrderEnum>;
  location?: InputMaybe<SortOrderEnum>;
  facebook?: InputMaybe<SortOrderEnum>;
  twitter?: InputMaybe<SortOrderEnum>;
  meta_title?: InputMaybe<SortOrderEnum>;
  meta_description?: InputMaybe<SortOrderEnum>;
  url?: InputMaybe<SortOrderEnum>;
  count?: InputMaybe<GhostPostCountSortInput>;
  postCount?: InputMaybe<SortOrderEnum>;
  ghostId?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type GhostPageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GhostPageEdge>;
  nodes: Array<GhostPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GhostPageGroupConnection>;
};


export type GhostPageConnectionDistinctArgs = {
  field: GhostPageFieldSelector;
};


export type GhostPageConnectionMaxArgs = {
  field: GhostPageFieldSelector;
};


export type GhostPageConnectionMinArgs = {
  field: GhostPageFieldSelector;
};


export type GhostPageConnectionSumArgs = {
  field: GhostPageFieldSelector;
};


export type GhostPageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GhostPageFieldSelector;
};

export type GhostPageEdge = {
  next?: Maybe<GhostPage>;
  node: GhostPage;
  previous?: Maybe<GhostPage>;
};

export type GhostPageFieldSelector = {
  slug?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  uuid?: InputMaybe<FieldSelectorEnum>;
  title?: InputMaybe<FieldSelectorEnum>;
  html?: InputMaybe<FieldSelectorEnum>;
  comment_id?: InputMaybe<FieldSelectorEnum>;
  feature_image?: InputMaybe<FieldSelectorEnum>;
  feature_image_caption?: InputMaybe<FieldSelectorEnum>;
  feature_image_alt?: InputMaybe<FieldSelectorEnum>;
  featured?: InputMaybe<FieldSelectorEnum>;
  visibility?: InputMaybe<FieldSelectorEnum>;
  created_at?: InputMaybe<FieldSelectorEnum>;
  updated_at?: InputMaybe<FieldSelectorEnum>;
  published_at?: InputMaybe<FieldSelectorEnum>;
  custom_excerpt?: InputMaybe<FieldSelectorEnum>;
  codeinjection_head?: InputMaybe<FieldSelectorEnum>;
  codeinjection_foot?: InputMaybe<FieldSelectorEnum>;
  codeinjection_styles?: InputMaybe<FieldSelectorEnum>;
  custom_template?: InputMaybe<FieldSelectorEnum>;
  canonical_url?: InputMaybe<FieldSelectorEnum>;
  send_email_when_published?: InputMaybe<FieldSelectorEnum>;
  tags?: InputMaybe<GhostTagFieldSelector>;
  authors?: InputMaybe<GhostAuthorFieldSelector>;
  primary_author?: InputMaybe<GhostAuthorFieldSelector>;
  primary_tag?: InputMaybe<GhostTagFieldSelector>;
  url?: InputMaybe<FieldSelectorEnum>;
  excerpt?: InputMaybe<FieldSelectorEnum>;
  reading_time?: InputMaybe<FieldSelectorEnum>;
  email_subject?: InputMaybe<FieldSelectorEnum>;
  plaintext?: InputMaybe<FieldSelectorEnum>;
  page?: InputMaybe<FieldSelectorEnum>;
  og_image?: InputMaybe<FieldSelectorEnum>;
  og_title?: InputMaybe<FieldSelectorEnum>;
  og_description?: InputMaybe<FieldSelectorEnum>;
  twitter_image?: InputMaybe<FieldSelectorEnum>;
  twitter_title?: InputMaybe<FieldSelectorEnum>;
  twitter_description?: InputMaybe<FieldSelectorEnum>;
  meta_title?: InputMaybe<FieldSelectorEnum>;
  meta_description?: InputMaybe<FieldSelectorEnum>;
  show_title_and_feature_image?: InputMaybe<FieldSelectorEnum>;
  access?: InputMaybe<FieldSelectorEnum>;
  comments?: InputMaybe<FieldSelectorEnum>;
  ghostId?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type GhostPageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GhostPageEdge>;
  nodes: Array<GhostPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GhostPageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type GhostPageGroupConnectionDistinctArgs = {
  field: GhostPageFieldSelector;
};


export type GhostPageGroupConnectionMaxArgs = {
  field: GhostPageFieldSelector;
};


export type GhostPageGroupConnectionMinArgs = {
  field: GhostPageFieldSelector;
};


export type GhostPageGroupConnectionSumArgs = {
  field: GhostPageFieldSelector;
};


export type GhostPageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GhostPageFieldSelector;
};

export type GhostPageFilterInput = {
  slug?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  uuid?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  html?: InputMaybe<StringQueryOperatorInput>;
  comment_id?: InputMaybe<StringQueryOperatorInput>;
  feature_image?: InputMaybe<StringQueryOperatorInput>;
  feature_image_caption?: InputMaybe<StringQueryOperatorInput>;
  feature_image_alt?: InputMaybe<StringQueryOperatorInput>;
  featured?: InputMaybe<BooleanQueryOperatorInput>;
  visibility?: InputMaybe<StringQueryOperatorInput>;
  created_at?: InputMaybe<DateQueryOperatorInput>;
  updated_at?: InputMaybe<DateQueryOperatorInput>;
  published_at?: InputMaybe<DateQueryOperatorInput>;
  custom_excerpt?: InputMaybe<StringQueryOperatorInput>;
  codeinjection_head?: InputMaybe<StringQueryOperatorInput>;
  codeinjection_foot?: InputMaybe<StringQueryOperatorInput>;
  codeinjection_styles?: InputMaybe<StringQueryOperatorInput>;
  custom_template?: InputMaybe<StringQueryOperatorInput>;
  canonical_url?: InputMaybe<StringQueryOperatorInput>;
  send_email_when_published?: InputMaybe<BooleanQueryOperatorInput>;
  tags?: InputMaybe<GhostTagFilterListInput>;
  authors?: InputMaybe<GhostAuthorFilterListInput>;
  primary_author?: InputMaybe<GhostAuthorFilterInput>;
  primary_tag?: InputMaybe<GhostTagFilterInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  reading_time?: InputMaybe<IntQueryOperatorInput>;
  email_subject?: InputMaybe<StringQueryOperatorInput>;
  plaintext?: InputMaybe<StringQueryOperatorInput>;
  page?: InputMaybe<BooleanQueryOperatorInput>;
  og_image?: InputMaybe<StringQueryOperatorInput>;
  og_title?: InputMaybe<StringQueryOperatorInput>;
  og_description?: InputMaybe<StringQueryOperatorInput>;
  twitter_image?: InputMaybe<StringQueryOperatorInput>;
  twitter_title?: InputMaybe<StringQueryOperatorInput>;
  twitter_description?: InputMaybe<StringQueryOperatorInput>;
  meta_title?: InputMaybe<StringQueryOperatorInput>;
  meta_description?: InputMaybe<StringQueryOperatorInput>;
  show_title_and_feature_image?: InputMaybe<BooleanQueryOperatorInput>;
  access?: InputMaybe<BooleanQueryOperatorInput>;
  comments?: InputMaybe<BooleanQueryOperatorInput>;
  ghostId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type GhostPageSortInput = {
  slug?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  uuid?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
  html?: InputMaybe<SortOrderEnum>;
  comment_id?: InputMaybe<SortOrderEnum>;
  feature_image?: InputMaybe<SortOrderEnum>;
  feature_image_caption?: InputMaybe<SortOrderEnum>;
  feature_image_alt?: InputMaybe<SortOrderEnum>;
  featured?: InputMaybe<SortOrderEnum>;
  visibility?: InputMaybe<SortOrderEnum>;
  created_at?: InputMaybe<SortOrderEnum>;
  updated_at?: InputMaybe<SortOrderEnum>;
  published_at?: InputMaybe<SortOrderEnum>;
  custom_excerpt?: InputMaybe<SortOrderEnum>;
  codeinjection_head?: InputMaybe<SortOrderEnum>;
  codeinjection_foot?: InputMaybe<SortOrderEnum>;
  codeinjection_styles?: InputMaybe<SortOrderEnum>;
  custom_template?: InputMaybe<SortOrderEnum>;
  canonical_url?: InputMaybe<SortOrderEnum>;
  send_email_when_published?: InputMaybe<SortOrderEnum>;
  tags?: InputMaybe<GhostTagSortInput>;
  authors?: InputMaybe<GhostAuthorSortInput>;
  primary_author?: InputMaybe<GhostAuthorSortInput>;
  primary_tag?: InputMaybe<GhostTagSortInput>;
  url?: InputMaybe<SortOrderEnum>;
  excerpt?: InputMaybe<SortOrderEnum>;
  reading_time?: InputMaybe<SortOrderEnum>;
  email_subject?: InputMaybe<SortOrderEnum>;
  plaintext?: InputMaybe<SortOrderEnum>;
  page?: InputMaybe<SortOrderEnum>;
  og_image?: InputMaybe<SortOrderEnum>;
  og_title?: InputMaybe<SortOrderEnum>;
  og_description?: InputMaybe<SortOrderEnum>;
  twitter_image?: InputMaybe<SortOrderEnum>;
  twitter_title?: InputMaybe<SortOrderEnum>;
  twitter_description?: InputMaybe<SortOrderEnum>;
  meta_title?: InputMaybe<SortOrderEnum>;
  meta_description?: InputMaybe<SortOrderEnum>;
  show_title_and_feature_image?: InputMaybe<SortOrderEnum>;
  access?: InputMaybe<SortOrderEnum>;
  comments?: InputMaybe<SortOrderEnum>;
  ghostId?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type GhostTagConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GhostTagEdge>;
  nodes: Array<GhostTag>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GhostTagGroupConnection>;
};


export type GhostTagConnectionDistinctArgs = {
  field: GhostTagFieldSelector;
};


export type GhostTagConnectionMaxArgs = {
  field: GhostTagFieldSelector;
};


export type GhostTagConnectionMinArgs = {
  field: GhostTagFieldSelector;
};


export type GhostTagConnectionSumArgs = {
  field: GhostTagFieldSelector;
};


export type GhostTagConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GhostTagFieldSelector;
};

export type GhostTagEdge = {
  next?: Maybe<GhostTag>;
  node: GhostTag;
  previous?: Maybe<GhostTag>;
};

export type GhostTagGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GhostTagEdge>;
  nodes: Array<GhostTag>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GhostTagGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type GhostTagGroupConnectionDistinctArgs = {
  field: GhostTagFieldSelector;
};


export type GhostTagGroupConnectionMaxArgs = {
  field: GhostTagFieldSelector;
};


export type GhostTagGroupConnectionMinArgs = {
  field: GhostTagFieldSelector;
};


export type GhostTagGroupConnectionSumArgs = {
  field: GhostTagFieldSelector;
};


export type GhostTagGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GhostTagFieldSelector;
};

export type GhostAuthorConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GhostAuthorEdge>;
  nodes: Array<GhostAuthor>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GhostAuthorGroupConnection>;
};


export type GhostAuthorConnectionDistinctArgs = {
  field: GhostAuthorFieldSelector;
};


export type GhostAuthorConnectionMaxArgs = {
  field: GhostAuthorFieldSelector;
};


export type GhostAuthorConnectionMinArgs = {
  field: GhostAuthorFieldSelector;
};


export type GhostAuthorConnectionSumArgs = {
  field: GhostAuthorFieldSelector;
};


export type GhostAuthorConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GhostAuthorFieldSelector;
};

export type GhostAuthorEdge = {
  next?: Maybe<GhostAuthor>;
  node: GhostAuthor;
  previous?: Maybe<GhostAuthor>;
};

export type GhostAuthorGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GhostAuthorEdge>;
  nodes: Array<GhostAuthor>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GhostAuthorGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type GhostAuthorGroupConnectionDistinctArgs = {
  field: GhostAuthorFieldSelector;
};


export type GhostAuthorGroupConnectionMaxArgs = {
  field: GhostAuthorFieldSelector;
};


export type GhostAuthorGroupConnectionMinArgs = {
  field: GhostAuthorFieldSelector;
};


export type GhostAuthorGroupConnectionSumArgs = {
  field: GhostAuthorFieldSelector;
};


export type GhostAuthorGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GhostAuthorFieldSelector;
};

export type GhostNavigationFilterListInput = {
  elemMatch?: InputMaybe<GhostNavigationFilterInput>;
};

export type GhostNavigationFilterInput = {
  label?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type GhostSettingsConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GhostSettingsEdge>;
  nodes: Array<GhostSettings>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GhostSettingsGroupConnection>;
};


export type GhostSettingsConnectionDistinctArgs = {
  field: GhostSettingsFieldSelector;
};


export type GhostSettingsConnectionMaxArgs = {
  field: GhostSettingsFieldSelector;
};


export type GhostSettingsConnectionMinArgs = {
  field: GhostSettingsFieldSelector;
};


export type GhostSettingsConnectionSumArgs = {
  field: GhostSettingsFieldSelector;
};


export type GhostSettingsConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GhostSettingsFieldSelector;
};

export type GhostSettingsEdge = {
  next?: Maybe<GhostSettings>;
  node: GhostSettings;
  previous?: Maybe<GhostSettings>;
};

export type GhostSettingsFieldSelector = {
  title?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<FieldSelectorEnum>;
  logo?: InputMaybe<FieldSelectorEnum>;
  icon?: InputMaybe<FieldSelectorEnum>;
  cover_image?: InputMaybe<FieldSelectorEnum>;
  facebook?: InputMaybe<FieldSelectorEnum>;
  twitter?: InputMaybe<FieldSelectorEnum>;
  lang?: InputMaybe<FieldSelectorEnum>;
  timezone?: InputMaybe<FieldSelectorEnum>;
  navigation?: InputMaybe<GhostNavigationFieldSelector>;
  secondary_navigation?: InputMaybe<GhostNavigationFieldSelector>;
  meta_title?: InputMaybe<FieldSelectorEnum>;
  meta_description?: InputMaybe<FieldSelectorEnum>;
  og_image?: InputMaybe<FieldSelectorEnum>;
  og_title?: InputMaybe<FieldSelectorEnum>;
  og_description?: InputMaybe<FieldSelectorEnum>;
  twitter_image?: InputMaybe<FieldSelectorEnum>;
  twitter_title?: InputMaybe<FieldSelectorEnum>;
  twitter_description?: InputMaybe<FieldSelectorEnum>;
  url?: InputMaybe<FieldSelectorEnum>;
  codeinjection_head?: InputMaybe<FieldSelectorEnum>;
  codeinjection_foot?: InputMaybe<FieldSelectorEnum>;
  codeinjection_styles?: InputMaybe<FieldSelectorEnum>;
  active_timezone?: InputMaybe<FieldSelectorEnum>;
  default_locale?: InputMaybe<FieldSelectorEnum>;
  accent_color?: InputMaybe<FieldSelectorEnum>;
  locale?: InputMaybe<FieldSelectorEnum>;
  members_support_address?: InputMaybe<FieldSelectorEnum>;
  members_enabled?: InputMaybe<FieldSelectorEnum>;
  allow_self_signup?: InputMaybe<FieldSelectorEnum>;
  members_invite_only?: InputMaybe<FieldSelectorEnum>;
  paid_members_enabled?: InputMaybe<FieldSelectorEnum>;
  portal_button_style?: InputMaybe<FieldSelectorEnum>;
  portal_button_signup_text?: InputMaybe<FieldSelectorEnum>;
  portal_signup_checkbox_required?: InputMaybe<FieldSelectorEnum>;
  portal_plans?: InputMaybe<FieldSelectorEnum>;
  portal_name?: InputMaybe<FieldSelectorEnum>;
  portal_button?: InputMaybe<FieldSelectorEnum>;
  comments_enabled?: InputMaybe<FieldSelectorEnum>;
  recommendations_enabled?: InputMaybe<FieldSelectorEnum>;
  outbound_link_tagging?: InputMaybe<FieldSelectorEnum>;
  version?: InputMaybe<FieldSelectorEnum>;
  ghostId?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type GhostNavigationFieldSelector = {
  label?: InputMaybe<FieldSelectorEnum>;
  url?: InputMaybe<FieldSelectorEnum>;
};

export type GhostSettingsGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GhostSettingsEdge>;
  nodes: Array<GhostSettings>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GhostSettingsGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type GhostSettingsGroupConnectionDistinctArgs = {
  field: GhostSettingsFieldSelector;
};


export type GhostSettingsGroupConnectionMaxArgs = {
  field: GhostSettingsFieldSelector;
};


export type GhostSettingsGroupConnectionMinArgs = {
  field: GhostSettingsFieldSelector;
};


export type GhostSettingsGroupConnectionSumArgs = {
  field: GhostSettingsFieldSelector;
};


export type GhostSettingsGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GhostSettingsFieldSelector;
};

export type GhostSettingsFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  logo?: InputMaybe<StringQueryOperatorInput>;
  icon?: InputMaybe<StringQueryOperatorInput>;
  cover_image?: InputMaybe<StringQueryOperatorInput>;
  facebook?: InputMaybe<StringQueryOperatorInput>;
  twitter?: InputMaybe<StringQueryOperatorInput>;
  lang?: InputMaybe<StringQueryOperatorInput>;
  timezone?: InputMaybe<StringQueryOperatorInput>;
  navigation?: InputMaybe<GhostNavigationFilterListInput>;
  secondary_navigation?: InputMaybe<GhostNavigationFilterListInput>;
  meta_title?: InputMaybe<StringQueryOperatorInput>;
  meta_description?: InputMaybe<StringQueryOperatorInput>;
  og_image?: InputMaybe<StringQueryOperatorInput>;
  og_title?: InputMaybe<StringQueryOperatorInput>;
  og_description?: InputMaybe<StringQueryOperatorInput>;
  twitter_image?: InputMaybe<StringQueryOperatorInput>;
  twitter_title?: InputMaybe<StringQueryOperatorInput>;
  twitter_description?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  codeinjection_head?: InputMaybe<StringQueryOperatorInput>;
  codeinjection_foot?: InputMaybe<StringQueryOperatorInput>;
  codeinjection_styles?: InputMaybe<StringQueryOperatorInput>;
  active_timezone?: InputMaybe<StringQueryOperatorInput>;
  default_locale?: InputMaybe<StringQueryOperatorInput>;
  accent_color?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<StringQueryOperatorInput>;
  members_support_address?: InputMaybe<StringQueryOperatorInput>;
  members_enabled?: InputMaybe<BooleanQueryOperatorInput>;
  allow_self_signup?: InputMaybe<BooleanQueryOperatorInput>;
  members_invite_only?: InputMaybe<BooleanQueryOperatorInput>;
  paid_members_enabled?: InputMaybe<BooleanQueryOperatorInput>;
  portal_button_style?: InputMaybe<StringQueryOperatorInput>;
  portal_button_signup_text?: InputMaybe<StringQueryOperatorInput>;
  portal_signup_checkbox_required?: InputMaybe<BooleanQueryOperatorInput>;
  portal_plans?: InputMaybe<StringQueryOperatorInput>;
  portal_name?: InputMaybe<BooleanQueryOperatorInput>;
  portal_button?: InputMaybe<BooleanQueryOperatorInput>;
  comments_enabled?: InputMaybe<StringQueryOperatorInput>;
  recommendations_enabled?: InputMaybe<BooleanQueryOperatorInput>;
  outbound_link_tagging?: InputMaybe<BooleanQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  ghostId?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type GhostSettingsSortInput = {
  title?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<SortOrderEnum>;
  logo?: InputMaybe<SortOrderEnum>;
  icon?: InputMaybe<SortOrderEnum>;
  cover_image?: InputMaybe<SortOrderEnum>;
  facebook?: InputMaybe<SortOrderEnum>;
  twitter?: InputMaybe<SortOrderEnum>;
  lang?: InputMaybe<SortOrderEnum>;
  timezone?: InputMaybe<SortOrderEnum>;
  navigation?: InputMaybe<GhostNavigationSortInput>;
  secondary_navigation?: InputMaybe<GhostNavigationSortInput>;
  meta_title?: InputMaybe<SortOrderEnum>;
  meta_description?: InputMaybe<SortOrderEnum>;
  og_image?: InputMaybe<SortOrderEnum>;
  og_title?: InputMaybe<SortOrderEnum>;
  og_description?: InputMaybe<SortOrderEnum>;
  twitter_image?: InputMaybe<SortOrderEnum>;
  twitter_title?: InputMaybe<SortOrderEnum>;
  twitter_description?: InputMaybe<SortOrderEnum>;
  url?: InputMaybe<SortOrderEnum>;
  codeinjection_head?: InputMaybe<SortOrderEnum>;
  codeinjection_foot?: InputMaybe<SortOrderEnum>;
  codeinjection_styles?: InputMaybe<SortOrderEnum>;
  active_timezone?: InputMaybe<SortOrderEnum>;
  default_locale?: InputMaybe<SortOrderEnum>;
  accent_color?: InputMaybe<SortOrderEnum>;
  locale?: InputMaybe<SortOrderEnum>;
  members_support_address?: InputMaybe<SortOrderEnum>;
  members_enabled?: InputMaybe<SortOrderEnum>;
  allow_self_signup?: InputMaybe<SortOrderEnum>;
  members_invite_only?: InputMaybe<SortOrderEnum>;
  paid_members_enabled?: InputMaybe<SortOrderEnum>;
  portal_button_style?: InputMaybe<SortOrderEnum>;
  portal_button_signup_text?: InputMaybe<SortOrderEnum>;
  portal_signup_checkbox_required?: InputMaybe<SortOrderEnum>;
  portal_plans?: InputMaybe<SortOrderEnum>;
  portal_name?: InputMaybe<SortOrderEnum>;
  portal_button?: InputMaybe<SortOrderEnum>;
  comments_enabled?: InputMaybe<SortOrderEnum>;
  recommendations_enabled?: InputMaybe<SortOrderEnum>;
  outbound_link_tagging?: InputMaybe<SortOrderEnum>;
  version?: InputMaybe<SortOrderEnum>;
  ghostId?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type GhostNavigationSortInput = {
  label?: InputMaybe<SortOrderEnum>;
  url?: InputMaybe<SortOrderEnum>;
};

export type GhostTiersConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GhostTiersEdge>;
  nodes: Array<GhostTiers>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GhostTiersGroupConnection>;
};


export type GhostTiersConnectionDistinctArgs = {
  field: GhostTiersFieldSelector;
};


export type GhostTiersConnectionMaxArgs = {
  field: GhostTiersFieldSelector;
};


export type GhostTiersConnectionMinArgs = {
  field: GhostTiersFieldSelector;
};


export type GhostTiersConnectionSumArgs = {
  field: GhostTiersFieldSelector;
};


export type GhostTiersConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GhostTiersFieldSelector;
};

export type GhostTiersEdge = {
  next?: Maybe<GhostTiers>;
  node: GhostTiers;
  previous?: Maybe<GhostTiers>;
};

export type GhostTiersFieldSelector = {
  id?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<FieldSelectorEnum>;
  slug?: InputMaybe<FieldSelectorEnum>;
  active?: InputMaybe<FieldSelectorEnum>;
  type?: InputMaybe<FieldSelectorEnum>;
  welcome_page_url?: InputMaybe<FieldSelectorEnum>;
  created_at?: InputMaybe<FieldSelectorEnum>;
  updated_at?: InputMaybe<FieldSelectorEnum>;
  stripe_prices?: InputMaybe<FieldSelectorEnum>;
  monthly_price?: InputMaybe<FieldSelectorEnum>;
  yearly_price?: InputMaybe<FieldSelectorEnum>;
  visibility?: InputMaybe<FieldSelectorEnum>;
  trial_days?: InputMaybe<FieldSelectorEnum>;
  ghostId?: InputMaybe<FieldSelectorEnum>;
  currency?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type GhostTiersGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GhostTiersEdge>;
  nodes: Array<GhostTiers>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GhostTiersGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type GhostTiersGroupConnectionDistinctArgs = {
  field: GhostTiersFieldSelector;
};


export type GhostTiersGroupConnectionMaxArgs = {
  field: GhostTiersFieldSelector;
};


export type GhostTiersGroupConnectionMinArgs = {
  field: GhostTiersFieldSelector;
};


export type GhostTiersGroupConnectionSumArgs = {
  field: GhostTiersFieldSelector;
};


export type GhostTiersGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GhostTiersFieldSelector;
};

export type GhostTiersFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  active?: InputMaybe<BooleanQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  welcome_page_url?: InputMaybe<StringQueryOperatorInput>;
  created_at?: InputMaybe<DateQueryOperatorInput>;
  updated_at?: InputMaybe<DateQueryOperatorInput>;
  stripe_prices?: InputMaybe<StringQueryOperatorInput>;
  monthly_price?: InputMaybe<IntQueryOperatorInput>;
  yearly_price?: InputMaybe<IntQueryOperatorInput>;
  visibility?: InputMaybe<StringQueryOperatorInput>;
  trial_days?: InputMaybe<IntQueryOperatorInput>;
  ghostId?: InputMaybe<StringQueryOperatorInput>;
  currency?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type GhostTiersSortInput = {
  id?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<SortOrderEnum>;
  slug?: InputMaybe<SortOrderEnum>;
  active?: InputMaybe<SortOrderEnum>;
  type?: InputMaybe<SortOrderEnum>;
  welcome_page_url?: InputMaybe<SortOrderEnum>;
  created_at?: InputMaybe<SortOrderEnum>;
  updated_at?: InputMaybe<SortOrderEnum>;
  stripe_prices?: InputMaybe<SortOrderEnum>;
  monthly_price?: InputMaybe<SortOrderEnum>;
  yearly_price?: InputMaybe<SortOrderEnum>;
  visibility?: InputMaybe<SortOrderEnum>;
  trial_days?: InputMaybe<SortOrderEnum>;
  ghostId?: InputMaybe<SortOrderEnum>;
  currency?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type GatsbyImageSharpFixedFragment = { base64?: string | null, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_TracedSvgFragment = { tracedSVG?: string | null, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebpFragment = { base64?: string | null, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null };

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = { tracedSVG?: string | null, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null };

export type GatsbyImageSharpFixed_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null };

export type GatsbyImageSharpFluidFragment = { base64?: string | null, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: number, maxWidth: number };

export type GatsbyImageSharpFluid_TracedSvgFragment = { tracedSVG?: string | null, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebpFragment = { base64?: string | null, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = { tracedSVG?: string | null, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null, sizes: string };

export type GatsbyImageSharpFluid_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null, sizes: string };
