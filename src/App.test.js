import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  it('matches snapshot in portolio mode', () => {
    const wrapper = shallow(<App/>);
    wrapper.setState({phase: true});
    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot in personal mode', () => {
    const wrapper = shallow(<App/>);
    wrapper.setState({phase: false});
    expect(wrapper).toMatchSnapshot();
  });

  it('renders personal after phase flip', () => {
    const wrapper = shallow(<App/>);
    wrapper.instance().flip();
    expect(wrapper).toMatchSnapshot();
  });

  it('renders portfolio after second phase flip', () => {
    const wrapper = shallow(<App/>);
    wrapper.instance().flip();
    wrapper.instance().flip();
    expect(wrapper).toMatchSnapshot();
  });
});
