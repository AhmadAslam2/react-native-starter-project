export interface listingsInterface {
  id: number;
  title: string;
  images: [
    {
      url: string;
      thumbnailUrl: string;
    },
  ];
  price: number;
  categoryId: number;
  userId: number;
  location: {
    latitude: number;
    longitude: number;
  };
}

export const defaultData = {
  id: 201,
  title: 'Red jacket',
  images: [
    {
      url: 'http://192.168.18.116:9000/assets/jacket1_full.jpg',
      thumbnailUrl: 'http://192.168.18.116:9000/assets/jacket1_thumb.jpg',
    },
  ],
  price: 100,
  categoryId: 5,
  userId: 1,
  location: {
    latitude: 37.78825,
    longitude: -122.4324,
  },
};
