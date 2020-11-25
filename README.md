# OPGG Project

## 1. 프로젝트 개요

>-OP.GG는 월간 4500만명의 이용자가 사용하는 게임 전적 검색 사이트입니다. `https://www.op.gg`<br>
>-본 프로젝트는 OP.GG 의 어플리케이션과 웹을 클론 코딩하였습니다.<br>
>-리그오브레전드 게임 유저의 데이터를 API를 통해 조회하고 실제 경기 승, 패 상세내용을 제공하고 있습니다.<br>
>` Riot API: https://developer.riotgames.com` <br>
>-커뮤니티 서비스를 제공하고 있습니다.<br>
### 프로젝트 Notion: https://www.notion.so/OP-GG-Project-c335ba2152ca430cac31dc1c020afa63

#### Spring boot 서버: https://github.com/bk6717/opgg
#### Android App : https://github.com/jaybon1/opggProject


## 2. 개발환경

- Visual Studio Code
- Spring Tool Suite4
- React 16.13.1, React-router
- nodejs v12.18.2
- Spring boot JPA
- MySQL 8.0

<br>

## 3. 사용기술

#### React
  - Hooks
  - styled-components
  - axios
  

#### Springboot JPA
 - JWT token
 - OAuth 2.0
 - Security
<br>
<br> 





## 메인, 랭킹화면

![enter image description here](https://github.com/star1606/OPGG-Project-React/blob/master/src/capture/ranking2.gif?raw=true)<br><br><br>


## 소환사 검색 화면

![enter image description here](https://github.com/star1606/OPGG-Project-React/blob/master/src/capture/rankingsearch1.gif?raw=true)

- 검색을 하면 API에서 유저정보를 불러옵니다.<br><br><br>

## 전적 갱신

![enter image description here](https://github.com/star1606/OPGG-Project-React/blob/master/src/capture/rankingupdate3.gif?raw=true)

- API를 불러와서 게임 전적을 최신화합니다.<br>


![enter image description here](https://github.com/star1606/OPGG-Project-React/blob/master/src/capture/rankingupdate4.gif?raw=true)

- 경기 내용에 있는 토글을 클릭하면 경기 상세 내용을 볼 수 있습니다.<br><br><br>

## 회원가입 화면

![enter image description here](https://postfiles.pstatic.net/MjAyMDA5MDhfMTI5/MDAxNTk5NTY5NjY5NTE4.8mNx9HxMxideSkMBrJvKiYo5mExqn_Su-E-DAuGnLJMg.nEtRPB4EuFaTmO1MqsSbCfjUCBkpdMMZ3M55LUKU92wg.PNG.swiniee/image.png?type=w773)<br><br><br>

## OAuth 로그인

![enter image description here](https://github.com/star1606/OPGG-Project-React/blob/master/src/capture/oauthlogin4.gif?raw=true)

- OAuth 2.0 구글 로그인
- 로그인이 완료되면 JWT token을 받습니다.<br><br><br>

## 커뮤니티 화면

![enter image description here](https://github.com/star1606/OPGG-Project-React/blob/master/src/capture/Honeycam%202020-09-08%2012-28-34.gif?raw=true)
<br>
<br>

#### 페이징 처리

```javascript
// 0페이지가 되면 이전 버튼이 사라짐
const  handlePrevPage = () => {
let  prevPage = postPage - 1;
if (postPage < 0) {
return;
}

axios
.get("http://59.20.79.42:58002/post/" + prevPage)
.then((response) => {
console.log(response.data.statusCode);
setCommunityDtos(response.data.data);
setStatusCode(response.data.statusCode);
setPostPage(postPage - 1);
})
.catch((error) => {
console.log(error.response);
});
};


// 마지막 페이지가 되면 다음 버튼이 사라짐
const  handleNextPage = () => {
let  nextPage = postPage + 1;
axios
.get("http://59.20.79.42:58002/post/" + nextPage)
.then((response) => {
setCommunityDtos(response.data.data);
setStatusCode(response.data.statusCode);
setPostPage(postPage + 1);
})
.catch((error) => {
console.log(error);
});
};

```

```
statusCode 페이징 처리

statusCode 201: 첫페이지면서 마지막
statusCode 200: 첫페이지도 마지막페이지도 아님
statusCode 204: 마지막페이지

```
<br><br><br>


## 게시글 검색

![enter image description here](https://github.com/star1606/OPGG-Project-React/blob/master/src/capture/communitysearch.gif?raw=true)
<br><br><br>

## 글쓰기

![enter image description here](https://postfiles.pstatic.net/MjAyMDA5MDhfMTIg/MDAxNTk5NTcwMzI1MTI2.W5UTfQmgV8ONRn49wbkliJLLK5rwwDEWlyJN9UgWsuog.rKaDX3JOpq54MFPn86pkOrV-_AnOjaNOg5eTS81Tw8Mg.PNG.swiniee/Screenshot_17.png?type=w773)
<br><br><br>

## 글 상세 화면

![enter image description here](https://postfiles.pstatic.net/MjAyMDA5MDhfMTQz/MDAxNTk5NTcwNTA3OTc4.6zhF54PtD7SAcRgEomkctoNM7g6qtCp86s7cbzELRq0g.vT46GJCXSmqIRJw_6VG99sQOp-b3rl6TKR70TxbZ3AEg.PNG.swiniee/Screenshot_18.png?type=w773)

<br><br>
> 시연 동영상 : ➡️ [링크](https://www.youtube.com/watch?v=JbTQcFy7P3o)
