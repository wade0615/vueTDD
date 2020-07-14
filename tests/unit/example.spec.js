import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import store from '@/components/store.js'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

describe('Store', () => {
  it('應可從 localStorage 中取得資料', () => {
    // arrange
    const STORAGE_KEY = 'vue-todomvc';
    const expected = ['test'];
    localStorage.setItem(STORAGE_KEY, '["test"]');

    // act
    const actual = store.fetch();

    // assert
    expect(actual).toEqual(expected);
  });
});

it('應可儲存資料到 localStorage 中', function () {
  // arrange
  const STORAGE_KEY = 'vue-todomvc';
  const expected = '["test"]';

  // act
  store.save(['test']);

  // assert
  const actual = localStorage.getItem(STORAGE_KEY);
  expect(actual).toEqual(expected);
});