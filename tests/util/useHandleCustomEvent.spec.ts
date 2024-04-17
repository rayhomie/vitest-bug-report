import { useEvent, alipayComponent } from 'functional-mini/component';
import { expect, it } from 'vitest';

const testMy = {
  canIUse() {
    return true;
  },
};

it('test useEvent', async () => {
  const Test = () => {
    useEvent('updateCount', function (v) {
      return 'ok';
    });
  };
  const componentOptions = alipayComponent(Test, {});
  expect(componentOptions).toBeTruthy();
});
