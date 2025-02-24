import React, { Component } from "react";
import PropTypes from "prop-types";

class NhtClassCompEventPostData extends Component {
  // Xử lý sự kiện click
  nhtEventHandleClick = () => {
    const { onNhtDataToApp } = this.props;
    if (onNhtDataToApp) {
      onNhtDataToApp("Dữ liệu từ component con - NhtClassCompEventPostData");
    }
  };

  render() {
    return (
      <div className="alert alert-success">
        <button className="btn btn-primary" onClick={this.nhtEventHandleClick}>
          Button1 - Chuyển dữ liệu lên app
        </button>
      </div>
    );
  }
}

// Xác định kiểu prop
NhtClassCompEventPostData.propTypes = {
  onNhtDataToApp: PropTypes.func.isRequired,
};

export default NhtClassCompEventPostData;
