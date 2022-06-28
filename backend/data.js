import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Aldeny',
      email: 'aldenysix@hotmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Samara',
      email: 'samara.tur@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Nike Slim',
      slug: 'nike-slim',
      category: 'blusa',
      image: '/imagens/p1.jpg',
      price: 140,
      countInStock: 20,
      brand: 'nike',
      rating: 4.5,
      numRewies: 10,
      description: 'Blusa de alta qualidade !',
    },
    {
      //  _id: '2',
      name: 'Adidas Slim',
      slug: 'adidas-slim',
      category: 'blusa',
      image: '/imagens/p2.jpg',
      price: 90,
      countInStock: 2,
      brand: 'Adidas',
      rating: 4.0,
      numRewies: 10,
      description: 'Blusa de alta qualidade !',
    },
    {
      //  _id: '3',
      name: 'Puma Slim',
      slug: 'Puma-slim',
      category: 'blusa',
      image: '/imagens/p3.jpg',
      price: 140,
      countInStock: 20,
      brand: 'Puma',
      rating: 4.5,
      numRewies: 10,
      description: 'Blusa de alta qualidade !',
    },
    {
      //  _id: '4',
      name: 'Volcom Long',
      slug: 'volcom-Long',
      category: 'blusa',
      image: '/imagens/p4.jpg',
      price: 78,
      countInStock: 4,
      brand: 'Volcom',
      rating: 3.0,
      numRewies: 3,
      description: 'Blusa Long bob com silc frontal ',
    },
  ],
};

export default data;
