import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {BackgroundView, Input, Text} from '../../components';
import useUser from '../../hooks/useUser';

export default function EditProfile() {
  const {user} = useUser();
  const {email, avatar, phone, gender, name} = user;
  const [form, setForm] = useState({
    email: '',
    name: '',
    phone: '',
    gender: '',
    password: ''
  });

  useEffect(() => {
    setForm({
      email,
      name,
      phone,
      gender
    });
  }, []);

  const onChangeInput = (type, value) => {
    const obj = {};
    obj[type] = value;

    setForm(prevState => ({
      ...prevState,
      obj
    }));
  };

  return (
    <BackgroundView>
      <Text>Manage your info:</Text>
      <View style={styles.avatarContainer}>
        <Image source={{uri: avatar}} style={styles.image} />
        <Text>Upload</Text>
      </View>
      <View>
        <Input
          id="email"
          label="Email"
          required
          email
          errorText="Email is invalid"
          value={email}
          onInputChange={text => onChangeInput('email', text)}
          outlined
          borderColor="blue"
        />
      </View>
    </BackgroundView>
  );
}

const styles = StyleSheet.create({
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    width: 100,
    height: 100
  }
});
