// 참고 URL: https://nolboo.github.io/blog/2013/10/06/github-for-beginner/
//
//git config --global user.name "이름"
// git config --global user.email "깃허브 메일주소" // 매번 물어보는 귀찮음을 피하기 위해 설정.
//
// mkdir ~/MyProject   // 로컬 디렉토리 만들고
// cd ~/myproject      // 디렉토리로 들어가서
// git init            // 깃 명령어를 사용할 수 있는 디렉토리로 만든다.
// git status          // 현재 상태를 훑어보고
// git add 화일명.확장자  // 깃 주목 리스트에 화일을 추가하고 or
// git add .           // 이 명령은 현재 디렉토리의 모든 화일을 추가할 수 있다.
// git commit -m “현재형으로 설명” // 커밋해서 스냅샷을 찍는다.
//
// git remote add origin https://github.com/username/myproject.git // 로컬과 원격 저장소를 연결한다.
// git remote -v // 연결상태를 확인한다.
// git push origin master // 깃허브로 푸시한다.

// 기본 서버
// var http = require('http');
// http.createServer(function(req, res){
//   res.writeHead(200, {'Content-Type':'text/plain'});
//   res.end('Hello World\n');
// }).listen(80, '127.0.0.1');
//
// console.log('Server running at http://127.0.0.1:1337/');

 var http = require('http');
 http.createServer(function(req, res){
   if(req.url === '/' && req.method ==='GET'){
     res.writeHead(200, {'Content-Type':'text/html'});
     res.end('Hello <strong>home page</strong>');
   }else if(req.url === '/account' && req.method === 'GET'){
     res.writeHead(200, {'Content-Type': 'text/html'});
     res.end("Hello <strong>account page</strong>");
   }else{
     res.writeHead(404, {'Content-Type':'text/html'});
     res.end();
   }
 }).listen(1337);
