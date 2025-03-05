import React, { Component } from 'react';

export default class NhtStudent extends Component {

    // Hàm xử lý khi bấm "Xem"
    nhtHandleView = () => {
        this.props.onNhtHandleView(this.props.renderNhtStudent);
    }

    // Hàm xử lý khi bấm "Sửa"
    nhtHandleEdit = () => {
        this.props.onNhtHandleEdit(this.props.renderNhtStudent);
    }

    // Hàm xử lý khi bấm "Xóa"
    nhtHandleDelete = () => {
        this.props.onNhtHandleDelete(this.props.renderNhtStudent.nhtID);
    }

    render() {
        let { renderNhtStudent, nhtIndex } = this.props;
        console.log("Student:", renderNhtStudent);

        return (
            <tr>
                <td>{nhtIndex}</td>
                <td>{renderNhtStudent.nhtID}</td>
                <td>{renderNhtStudent.nhtStudentName}</td>
                <td>{renderNhtStudent.nhtAge}</td>
                <td>{renderNhtStudent.nhtGender}</td>
                <td>
                    <div className="template-demo">
                        <button
                            type="button"
                            className="btn btn-danger btn-icon-text"
                            onClick={this.nhtHandleView}>
                            Xem
                        </button>
                        <button
                            type="button"
                            className="btn btn-warning btn-icon-text"
                            onClick={this.nhtHandleEdit}>
                            Sửa
                        </button>
                        <button
                            type="button"
                            className="btn btn-success btn-icon-text"
                            onClick={this.nhtHandleDelete}>
                            Xóa
                        </button>
                    </div>
                </td>
            </tr>
        );
    }
}
