import AnimatedLottieView from 'lottie-react-native';
import React from 'react';
import {ImageSourcePropType} from 'react-native';
interface ActivityIndicatorProps {
  source: ImageSourcePropType;
}
const ActivityIndicator = ({source}: ActivityIndicatorProps) => {
  return <AnimatedLottieView source={require('../animations/done.json')} />;
};

export default ActivityIndicator;
