import shallowEqual from 'shallow-equal';

const obj = { name: 'jeon' };
const mylist = [1, 2, 3, obj];
const list1 = [1, 2, 3, obj];
const list2 = [1, 2, 3, { name: 'jeon' }];

mylist === list1;
