import NhtClassComp from "./components/NhtClassComp";
import NhtFunComp from "./components/NhtFunComp";
import NhtJsxExpression from "./components/NhtJsxExpression";

function NhtApp() {
  return (
    <div className="container border mt-3 bg-white">
       <h1>React JS lab03 - Nguyễn Huy Thông </h1>

       <NhtJsxExpression/>

       <hr/>
       {/* Sử dụng Function Compoment */}
       <NhtFunComp/>

      {/* sử dụng class component*/}
      <NhtClassComp></NhtClassComp>
    </div>
  );
}

export default NhtApp;
 