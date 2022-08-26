import {Button, StyleSheet, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';

import {PostItemForm} from '../components';

interface ModalScreenProps {
  visible: boolean;
  toggleVisible: () => void;
}
const ModalScreen = ({visible, toggleVisible}: ModalScreenProps) => {
  return (
    <Modal style={styles.container} isVisible={visible}>
      <View style={styles.closeButton}>
        <Button color="white" title="X" onPress={toggleVisible} />
      </View>
      <PostItemForm toggleVisible={toggleVisible} />
    </Modal>
  );
};

export default ModalScreen;

const styles = StyleSheet.create({
  container: {},
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
