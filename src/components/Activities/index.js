import React from 'react';

import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {
  Container,
  Header,
  Title,
  Card,
  CardHeader,
  Avatar,
  Descriptions,
  Bold,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Value,
  Divider,
  DateLabel,
  Actions,
  Option,
  OptionLabel,
} from './styles';

import avatar from '../../../assets/images/avatar.png';

export default function Activities() {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>
      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Descriptions>
            <Bold>Você</Bold> pagou a <Bold>@victor</Bold>
          </Descriptions>
        </CardHeader>
        <CardBody>
          <UserName>Victor Magalhães</UserName>
        </CardBody>
        <CardFooter>
          <Details>
            <Value>R$ 18,00</Value>
            <Divider />
            <Feather name="lock" color="#fff" />
            <DateLabel>há 1 ano</DateLabel>
          </Details>
          <Actions>
            <Option>
              <MaterialCommunityIcons
                name="comment-outline"
                color="#fff"
                size={14}
              />
              <OptionLabel>0</OptionLabel>
            </Option>

            <Option>
              <AntDesign name="hearto" color="#fff" size={14} />
              <OptionLabel>0</OptionLabel>
            </Option>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
}
