import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import About from './';

describe('container: About', () => {
  it('render component', () => {
    const wrapper = shallow(<About />);
    expect(wrapper.find('.page-about')).to.have.lengthOf(1);
  });
});
