import React, {useState} from 'react';
import {Alert, StyleSheet, TouchableOpacity, View} from 'react-native';
import {AuthContainer, Input, Text} from '../../components';
import DropDownPicker from 'react-native-dropdown-picker';
import userApi from '../../api/user';
import useNavigation from '../../hooks/useNavigation';
import {screenName} from '../../utils/constants';

export default function SignUp() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [open, setOpen] = useState(false);
  const [gender, setGender] = useState(null);
  const genders = [
    {
      label: 'Male',
      value: false
    },
    {
      label: 'Female',
      value: true
    }
  ];
  const {navigate} = useNavigation();

  const signUp = () => {
    const formData = {email, password, name, gender};
    console.log(formData);
    try {
      userApi.signUp(formData).then(() => {
        Alert.alert('ok');
        navigate(screenName.signIn);
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <AuthContainer>
      <Input
        id="email"
        label="Email"
        required
        errorText="Email is required"
        outlined
        borderColor="blue"
        onInputChange={setEmail}
      />
      <Input
        id="password"
        label="password"
        required
        errorText="Email is invalid"
        outlined
        borderColor="blue"
        onInputChange={setPassword}
      />

      <View style={{flexDirection: 'row'}}>
        <View style={styles.phoneInput}>
          <Input
            id="name"
            label="Name"
            required
            errorText="Name is required"
            outlined
            borderColor="blue"
            onInputChange={setName}
          />
        </View>
        <View style={styles.genderInput}>
          <DropDownPicker
            items={genders}
            open={open}
            setOpen={setOpen}
            value={gender}
            setValue={setGender}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.signUpBtn} onPress={signUp}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </AuthContainer>
  );
}

const styles = StyleSheet.create({
  signUpBtn: {
    backgroundColor: 'blue',
    width: 60,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  phoneInput: {
    flex: 1.5
  },
  genderInput: {
    flex: 1
  }
});
