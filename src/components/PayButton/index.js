import React from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {ButtonP, Label} from './style';

export default function PayButton({focused}) {
  return (
    <ButtonP focused={focused}>
      <MaterialIcons
        name="attach-money"
        size={30}
        color={focused ? '#FFF' : '#EEE'}
      />
      <Label focused={focused}>Pagar</Label>
    </ButtonP>
  );
}
