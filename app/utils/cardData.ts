import {ImageSourcePropType} from 'react-native';

export interface cardDataInterface {
  id: number;
  image: ImageSourcePropType;
  title: string;
  subtitle: string;
}
export let cardData: cardDataInterface[] = [
  {
    id: 1,
    image: require('../assests/chair.jpg'),
    title: 'Chair',
    subtitle: '300',
  },
  {
    id: 2,
    image: require('../assests/jacket.jpg'),
    title: 'Leather jacket',
    subtitle: '100',
  },
  {
    id: 3,
    image: require('../assests/desk.jpg'),
    title: 'Wooden Desk',
    subtitle: '50',
  },
];

export const getData = () => {
  return cardData;
};
