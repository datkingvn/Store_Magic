import bcrypt from 'bcryptjs'

const data = {
  users: [
    {
      name: 'Dat',
      email: 'dat.dev.gw@gmail.com',
      password: bcrypt.hashSync('123456789'),
      isAdmin: true
    },
    {
      name: 'Vương Lâm',
      email: 'toi@duck.com',
      password: bcrypt.hashSync('123456789'),
      isAdmin: false
    }
  ],
  products: [
    {
      name: 'T-Shirts With For Men',
      slug: 't-shirts-with-for-men',
      category: 'Shirts',
      image: 'https://i.imgur.com/4wlZiBE.png',
      price: 70,
      discountPercentage: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'Crafted from premium cotton fabric, this t-shirt offers a soft and breathable feel against the skin.',
      isFeatured: true,
      banner: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNoaXJ0fGVufDB8fDB8fHww',
    },
    {
      name: 'Winter Life B Jacket',
      slug: 'winter-life-b-jacket',
      category: 'Jacket',
      image: 'https://i.imgur.com/dULO1aQ.png',
      price: 80,
      discountPercentage: 15,
      brand: 'Adidas',
      rating: 3.2,
      numReviews: 10,
      countInStock: 20,
      description: 'It features a durable and water-resistant outer shell, keeping you dry and shielded from light rain or snowflakes.',
      isFeatured: true,
      banner: 'https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    },
    {
      name: 'DIY Jean Backpack',
      slug: 'diy-jean-backpack',
      category: 'Backpack',
      image: 'https://i.imgur.com/KPvFkOF.png',
      price: 90,
      discountPercentage: 40,
      brand: 'Raymond',
      rating: 4.5,
      numReviews: 3,
      countInStock: 20,
      description: 'A popular shirt',
    },
    {
      name: 'Vest Nano V8',
      slug: 'vest-nano-v8',
      category: 'Pants',
      image: 'https://i.imgur.com/Ln49bBU.png',
      price: 90,
      discountPercentage: 10,
      brand: 'Oliver',
      rating: 2.9,
      numReviews: 13,
      countInStock: 20,
      description: 'Smart looking pants',
    },
    {
      name: 'Fit Pants',
      slug: 'fit-pants',
      category: 'Pants',
      image: 'https://i.imgur.com/8YmlMaY.png',
      price: 95,
      discountPercentage: 39,
      brand: 'Zara',
      rating: 3.5,
      numReviews: 7,
      countInStock: 20,
      description: 'A popular pants',
    },
    {
      name: 'Classic Pants',
      slug: 'classic-pants',
      category: 'Pants',
      image: 'https://i.imgur.com/J728MQF.png',
      price: 75,
      discountPercentage: 27,
      brand: 'Casely',
      rating: 2.4,
      numReviews: 14,
      countInStock: 20,
      description: 'A popular pants',
    },
  ]
}

export default data