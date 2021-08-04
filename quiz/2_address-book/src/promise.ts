// 동기 함수 타입 추론
function fetchItems(): string[] {
  let items = ['a', 'b', 'c'];
  return items;
}

let result = fetchItems();
console.log(result);

// 비동기 함수 타입 추론
function fetchItems2(): Promise<string[]> {
  let items = ['a', 'b', 'c'];
  return new Promise(resolve => {
    resolve(items);
  });
}

let result2 = fetchItems2();
console.log(result2);
