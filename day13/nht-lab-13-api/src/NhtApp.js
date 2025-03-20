import React from "react";
import NhtReadApilLocal from "./components/NhtReadApilLocal";
import NhtReadMockAPI from "./components/NhtReadMockAPI";
import NhtCreateMockAPI from "./components/NhtCreateMockAPI";
export default function NhtApp(){

  return (
    <div className="container border my-3 p-3">
      <h1> react api - Nguyễn Huy Thông</h1>
      <hr/>
      <NhtReadApilLocal/>
      <hr/>
      <h2> Đọc dữ liệu từ MocKApi</h2>
      <hr/>
      <NhtReadMockAPI/>
      <NhtCreateMockAPI/>
    </div>
  );
}


