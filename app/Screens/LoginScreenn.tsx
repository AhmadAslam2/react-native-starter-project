import {Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import SafeAreaView from 'react-native-safe-area-view';

import TextInputWithIcon from '../components/TextInputWithIcon';
import CustomIcon from '../components/CustomIcon';
import colors from '../config/colors';
import CustomButton from '../components/CustomButton';

const LoginScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assests/logo.png')} style={styles.logo} />
      <TextInputWithIcon
        onChangeText={(value: React.SetStateAction<string>) => setEmail(value)}
        placeholder="Enter your Email"
        Icon={
          <CustomIcon
            name="mail-outline"
            type="ionicon"
            size={25}
            color={colors.lightgrey}
          />
        }
      />
      <TextInputWithIcon
        onChangeText={(value: React.SetStateAction<string>) =>
          setPassword(value)
        }
        placeholder="Enter your Password"
        secureTextEntry={true}
        Icon={
          <CustomIcon
            name="lock-closed-outline"
            type="ionicon"
            size={25}
            color={colors.lightgrey}
          />
        }
      />
      <CustomButton
        color={colors.primary}
        text="Login"
        onPress={() => console.log(email, password)}
      />
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    marginVertical: 30,
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
});
