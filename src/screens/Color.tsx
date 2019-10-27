import React, { useState, FC } from 'react';
import { View, Button, Text, FlatList } from 'react-native';
import styled from 'styled-components';

interface StyledColorProps {
  ramdomRgb: string;
}

const StyledColor = styled(View)`
  height: 100;
  width: 100;
  background-color: ${(props: StyledColorProps): string => props.ramdomRgb};
`;

const ColorScreen: FC = () => {
  const [colors, setColors] = useState<string[]>([]);
  const ramdomRgb = (): string => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
  };
  return (
    <View>
      <Button
        title="Add Color"
        onPress={(): void => setColors([...colors, ramdomRgb()])}
      />
      <Text> Hello ColorScreen</Text>
      <FlatList
        keyExtractor={(item, index): string => `${item}${index}`}
        data={colors}
        renderItem={({ item }): any => {
          return <StyledColor ramdomRgb={item} />;
        }}
      />
    </View>
  );
};

export default ColorScreen;
