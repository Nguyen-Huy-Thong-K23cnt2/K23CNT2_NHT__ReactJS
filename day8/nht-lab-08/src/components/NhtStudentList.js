import React, { Component } from 'react';
import NhtStudent from './NhtStudent';

export default class NhtStudentList extends Component {
 
    render() {
        let { renderNhtStudents, onNhtHandleView, onNhtHandleEdit, onNhtHandleDelete } = this.props;
        console.log("List:", renderNhtStudents);

        let nhtElementStudent = renderNhtStudents.map((nhtItem, index) => {
            return (
                <NhtStudent 
                    key={index} 
                    renderNhtStudent={nhtItem} 
                    onNhtHandleView={onNhtHandleView} 
                    onNhtHandleEdit={onNhtHandleEdit} 
                    onNhtHandleDelete={onNhtHandleDelete} 
                    nhtIndex={index + 1} 
                />
            );
        });

        return (
            <div className="card-body">
                <h3 className="card-title">Danh sách sinh viên</h3>
                <div className="table-responsive pt-3">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Mã sinh viên</th>
                                <th>Tên sinh viên</th>
                                <th>Tuổi</th>
                                <th>Giới tính</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {nhtElementStudent}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
