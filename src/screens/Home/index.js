import React from 'react';
import {Text} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {Wrapper, Header, BalanceContainer, BalanceTitle, Balance} from './styles';

export default function Home() {
  return (
    <Wrapper>
      <Header>
        <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />

        <BalanceContainer>
          <BalanceTitle>Meu saldo</BalanceTitle>
          <Balance>R$ 0,00</Balance>
        </BalanceContainer>

        <AntDesign name="gift" size={30} color="#10c86e" />
      </Header>
    </Wrapper>
  );
}
