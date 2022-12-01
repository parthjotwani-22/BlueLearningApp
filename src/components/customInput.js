import React from 'react';
import {View, Text} from 'react-native';
import colors from '../utils/colors';
interface customInputProps {
  label?: String | undefined;
  name?: String | undefined;
}

const customInput = (props: customInputProps) => {
  return (
    <View>
      <Text>{props.name}</Text>
    </View>
  );
};

export default customInput;
