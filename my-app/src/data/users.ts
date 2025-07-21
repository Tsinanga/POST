export interface Purchase {
  id: number;
  product: string;
  price: number;
  quantity: number;
  date: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  gender: 'Male' | 'Female' | 'Other';
  profilePicture: string;
  createdAt: string;
  purchases: Purchase[];
}

export const users: User[] = [
  {
    id: 1,
    name: 'Jane Doe',
    email: 'jane.doe@gmail.com',
    gender: 'Female',
    profilePicture: 'https://randomuser.me/api/portraits/women/1.jpg',
    createdAt: '2023-06-10T08:30:00Z',
    purchases: [
      {
        id: 101,
        product: 'Goat Feed',
        price: 1200,
        quantity: 2,
        date: '2024-05-01',
      },
      {
        id: 102,
        product: 'Water Trough',
        price: 800,
        quantity: 1,
        date: '2024-06-03',
      },
            {
        id: 10289,
        product: 'Growers mash',
        price: 8000,
        quantity: 10,
        date: '2024-06-03',
      },
    ],
  },
];
