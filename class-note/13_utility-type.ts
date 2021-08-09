interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}


interface ProductDetail {
  id: number;
  name: string;
  price: number;
}

// 1. 상품 목록을 받아오기 위한 API 함수
// function fetchProducts(): Promise<Product[]>{
//   // ..
// }

// 2. 특정 상품의 상세 정보를 나타내기 위한 함수
// Product의 id, name, price 값만 필요한 경우 새로 인터페이스를 만들지 않고 유틸리티 타입(제네릭 타입)을 이용한다.
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>    // 타입 별칭 활용
function displayProductDetail(shoppingItem: ShoppingItem){

}
  
type UpdateProduct = Partial<Product>
// 3. 특정 상품 정보를 업데이트(갱신) 하는 함수
function updateProductItem(productItem: UpdateProduct) {

}

// 4. 유틸리티 타입 구현하기 - Partial
interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}

// interface UserProfileUpdate {
//   username?: string;
//   email?: string;
//   profilePhotoUrl?: string;
// }

// step 1. 타입 정의
// type UserProfileUpdate = {
//   username?: UserProfile['username'];
//   email?: UserProfile['email'];
//   profilePhotoUrl?: UserProfile['profilePhotoUrl']; 
// }

// step 2. 코드 축약
// type UserProfileUpdate = {
//   // 반복문을 돌린다고 생각하면 된다. (맵드타입 활용)
//   [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p];
// }

// step 3. key of 활용
// type UserProfileUpdate = {  
//   [p in keyof UserProfile]?: UserProfile[p];
// }

// step 4. 최종 파셜 구현
type Subset<T> = {  
  [p in keyof T]?: T[p];
}