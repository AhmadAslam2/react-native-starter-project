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
    image: {uri: 'https://picsum.photos/400/300'},
    title: 'Random thing',
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
    image: {uri: 'https://picsum.photos/400/300'},
    title: 'Leather jacket',
    subtitle: '50',
  },
];

export const getData = () => {
  return cardData;
};
