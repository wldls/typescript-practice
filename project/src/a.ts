// 타입단언을 함부로 하면 안되는 이유
interface Hero {
  name: string;
  skill: string;
}

// const capt: Hero = {
//   name: 'capt',
//   skill: 'shield',
// };

// 타입 단언 사용시 초기값을 정하지 않았으므로 에러가 발생할 수 있음
const capt = {} as Hero;
