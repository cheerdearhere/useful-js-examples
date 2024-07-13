const App = () => <h1>Hello Babel</h1>;
ReactDOM.render(<App/>,document.getElementById("root"));
//이후 build script 작성: in package.json
//처리 후 npm run build 명령어 => dist 폴더 확인
//html에서 만들어진 app을 적용