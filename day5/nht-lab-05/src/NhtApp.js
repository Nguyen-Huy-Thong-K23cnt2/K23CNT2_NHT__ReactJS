import React, { Component } from "react";
import NhtFunEvent1 from "./components/NhtFunEvent1";
import NhtClassCompEvent1 from "./components/NhtClassCompEvent1";
import NhtFunComEventProps from "./components/NhtFunComEventProps";
import NhtClassCompEventProps from "./components/NhtClassCompEventProps";
import NhtClassComEventState from "./components/NhtClassComEventState";
import NhtClassCompEventPosData from "./components/NhtClassCompEventPosData";

export default class NhtApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nhtNoiDung: "Chưa có",
    };
  }

  // Hàm xử lý sự kiện khi component con chuyển dữ liệu lên
  nhtHandleDataToApp = (content) => {
    alert(content);
    this.setState({ nhtNoiDung: content }); 
  };

  render() {
    return (
      <div className="container border mt-3">
        <h1 className="text-center alert alert-info my-2">
          K23CNT2 - Nguyễn Huy Thông
        </h1>
        <hr />
        <div>
          <h2>Function Component - Event</h2>
          <NhtFunEvent1 />
        </div>
        <hr />
        <div>
          <h2>Class Component - Event</h2>
          <NhtClassCompEvent1 />
        </div>
        <hr />
        <div>
          <h2>Function Component - Event; Props</h2>
          <NhtFunComEventProps nhtRenderName="Nguyễn Huy Thông" />
        </div>
        <hr />
        <div>
          <h2>Class Component - Event; Props</h2>
          <NhtClassCompEventProps nhtRenderTitle="Welcome to..." />
        </div>
        <hr />
        <div>
          <h2>Class Component - Event; State</h2>
          <NhtClassComEventState />
        </div>
        <hr />
        <div>
          <h2>Class Component - Event; Post Data to App</h2>
          <h1>{this.state.nhtNoiDung}</h1> 
          <NhtClassCompEventPosData onNhtDataToApp={this.nhtHandleDataToApp} />
        </div>
      </div>
    );
  }
}
