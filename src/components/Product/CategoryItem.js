import React from 'react';
import {Text} from '..';

export default function CategoryItem({category}) {
  return (
    <>
      <Text xxs style={{marginRight: 10}}>
        {category}
      </Text>
    </>
  );
}
