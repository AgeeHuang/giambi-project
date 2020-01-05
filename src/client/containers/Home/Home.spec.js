import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Home from './';

describe('container: Home', () => {
  it('render component', () => {
    const wrapper = shallow(<Home />);
    const fullName = wrapper.find('.page-home__full-name');
    expect(fullName.text()).to.be.eql('Giambi');
  });
});
