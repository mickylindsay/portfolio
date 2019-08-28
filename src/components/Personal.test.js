import React from 'react';
import {shallow} from 'enzyme';
import Personal from './Personal';

describe('Personal component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Personal/>);
    expect(wrapper).toMatchSnapshot();
  });
});
