# codeBook
node, ejs, lowdb를 이용한 간단한 Code book. 키워드(영문명/한글명)을 조회, 생성, 수정, 삭제 할 수 있으며 첫글자검색, 포함검색 기능이 있다.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

<br>

## Project structure
```text
.
+-- routes                                      route 모듈
+-- views                                       ejs views
+-- db.json                                     local json db file
+-- server.js                                   node server 시작을 담당
```

<br>

## Usage
npm run serve 후 localhost:3000으로 접속한다.

1. 키워드 검색  
    검색창 왼쪽에 검색타입을 지정한 후 검색창에 키워드를 입력하고 Search 버튼을 클릭한다.  
    검색타입 : startWith 해당 문자(혹은 단어)로 시작, contains 해당 문자(혹은 단어) 포함
2. 키워드 추가  
    항목 추가 버튼을 누르거나 키워드 검색 시 검색 결과가 없는 경우 키워드 추가 여부 팝업에서 추가 버튼을 누른 경우 키워드를 추가할 수 있다. 
3. 키워드 수정  
    해당 항목 우측 수정 버튼을 눌러 키워드를 수정할 수 있다.
4. 키워드 삭제   
    해당 항목 우측 삭제 버튼을 눌러 키워드를 삭제할 수 있다.

<br>
