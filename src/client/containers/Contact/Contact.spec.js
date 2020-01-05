import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Contact from './';

describe('container: Contact', () => {
  it('render component', () => {
    const wrapper = shallow(<Contact />);
    expect(wrapper.find('.page-contact')).to.have.lengthOf(1);
  });
});
