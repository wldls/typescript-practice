// 별도의 값을 지정하지 않으면 숫자형으로 인식(0부터 1씩 증가)
enum Shoes {
	Nike,
	Adidas
}
 
var myShoes = Shoes.Nike;
console.log(myShoes);	// 0

// 문자형 이넘
enum Shoes2 {
	Nike = '나이키',
	Adidas = '아디다스'
}
 
var myShoes2 = Shoes2.Nike;
console.log(myShoes2);	// 나이키

// 이넘 활용 예제
enum Answer {
	Yes = 'Y',
	No = 'N',
}

function askQuestion(answer: Answer) {
	if(answer === Answer.Yes){
		console.log('정답입니다.');
	}
	if(answer === Answer.No){
		console.log('오답입니다.');
	}
}

// 다양한 형태의 문자열을 구체적인 값으로 제한
// askQuestion('예스');
// askQuestion('Y');
// askQuestion('Yes');
// askQuestion('yes');

// 이넘에서 제공한 데이터만 집어넣을 수 있음
askQuestion(Answer.Yes);