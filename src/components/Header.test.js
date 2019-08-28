import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header component', () => {
  test('test click slider', () => {
    const mockFlip = jest.fn();

    const header = shallow(<Header flip={mockFlip}/>);
    header.find('.slider').first().simulate('click');
    expect(mockFlip.mock.calls.length).toEqual(1);
  });

  it('matches snapshot with phase true', () => {
    const wrapper = shallow(<Header phase={true}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot with phase false', () => {
    const wrapper = shallow(<Header phase={false}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
