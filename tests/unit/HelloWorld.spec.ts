import HelloWorld from '@/components/Encode.vue';
import {shallow} from '@vue/test-utils';

describe('Encode.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallow(HelloWorld, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
