import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const CircleButton = (props) => {
  const { style, color } = props;

  let bgColor = '#E31676';
  let textColor = '#fff';

  if (color === 'white') {
    bgColor = '#fff';
    textColor = '#E31676';
  }

  return (
    <View style={[styles.circleButton, style, { backgroundColor: bgColor }]}>
      <Text style={[styles.circleButtonTitle, { color: textColor }]}>
        {props.children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  circleButton: {
    position: 'absolute',
    right: 32,
    bottom: 32,
    width: 48,
    height: 48,
    backgroundColor: '#E31676',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: .3,
  },
  circleButtonTitle: {
    color: '#fff',
    fontSize: 32,
    lineHeight: 32,
  },
});

export default CircleButton;
