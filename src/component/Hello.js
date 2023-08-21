// javascript 에서 변수 설정 : var(변수), let(변수), const(상수)
// ES6 이후, 이를 보완하기 위해 추가 된 변수 선언 방식이 let과 const 이다.
// - let : 일반적인 변수
// - const : 상수

import World from "./World";

const Hello = function() {
    // jsx는 하나의 태그만 만들 수 있음
    return(
        <div>
        <h2>Hello</h2>
        <World></World>
        </div>
    )
}

export default Hello;