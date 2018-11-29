import React from 'react';
import Card from '../../Card.js';
import CardContainer from '../../CardContainer.js';
import {shallow, mount} from 'enzyme';

describe('Card', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(
      <Card
        location='colorado'
        stats = { {2004: 1} }
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
})

describe('CardContainer', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<CardContainer findAllMatches={jest.fn()} />)
    expect(wrapper).toMatchSnapshot();
  })
})
