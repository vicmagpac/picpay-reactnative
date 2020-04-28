import styled from 'styled-components';

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  contentContainerStyle: {
    alignItems: 'center',
    paddingLeft: 16,
  },
}))`
  background: #1e222b;
  height: 130px;
`;

export const Option = styled.TouchableOpacity`
  width: 80px;
  margin-right: 16px;
  align-items: center;
`;
export const Img = styled.Image``;
export const Label = styled.Text`
  color: #fff;
  margin-top: 8px;
`;
