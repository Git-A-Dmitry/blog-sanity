type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface PostData extends Base {
  author: Author;
  body: Block[];
  // body: Array<Block | Code>;
  categories: Category[];
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string;
}

export interface Code {
  _type: 'code'; // Specify the _type for the code type
  code: any;
  language?: string; // Make 'language' property optional
}

interface Author extends Base {
  bio: Block[];
  image: Image;
  name: string;
  slug: Slug;
}

interface Image {
  _type: 'image';
  asset: Reference;
}

interface Reference {
  _ref: string;
  _type: 'reference';
}

interface Slug {
  type: 'slug';
  current: string;
}

// interface Blog {
interface Block {
  _key: string;
  _type: 'block';
  // _type: 'code';
  children: Span[];
  markDefs: any[];
  style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
}

interface Span {
  _key: string;
  _type: 'span';
  marks: string[];
  text: string;
}

interface Category extends Base {
  description: string;
  title: string;
}

interface MainImage {
  _type: 'image';
  asset: Reference;
}

interface Title {
  _type: 'string';
  current: string;
}
