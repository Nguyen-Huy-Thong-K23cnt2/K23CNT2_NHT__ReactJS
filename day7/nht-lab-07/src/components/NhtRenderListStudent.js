import React, { Component } from 'react';

class NhtRenderListStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nhtStudents: [
                { tcvId: "NTU001", nhtName: "Nguyễn Huy Thông", nhtAge: 46, nhtClass: "K23CNT2" },
                { tcvId: "NTU002", nhtName: "Nguyễn Quang A", nhtAge: 22, nhtClass: "K23CNT2" },
                { tcvId: "NTU003", nhtName: "Nguyễn Quang B", nhtAge: 21, nhtClass: "K23CNT2" },
                { tcvId: "NTU004", nhtName: "Nguyễn Quang C", nhtAge: 23, nhtClass: "K23CNT2" },
            ],
        };
    }

    // Hàm xử lý xóa sinh viên
    nhtHandleDelete = (tcvId) => {
        this.setState({
            nhtStudents: this.state.nhtStudents.filter(nhtItem => nhtItem.tcvId !== tcvId)
        });
    };

    render() {
        let nhtElement = this.state.nhtStudents.map((nhtItem, index) => {
            return (
                <tr key={nhtItem.tcvId}>
                    <td>{index + 1}</td>
                    <td>{nhtItem.tcvId}</td>
                    <td>{nhtItem.nhtName}</td>
                    <td>{nhtItem.nhtAge}</td>
                    <td>{nhtItem.nhtClass}</td>
                    <td>
                        <button className="btn btn-warning btn-sm mx-1">Sửa</button>
                        <button className="btn btn-danger btn-sm" onClick={() => this.nhtHandleDelete(nhtItem.tcvId)}>Xóa</button>
                    </td>
                </tr>
            );
        });

        return (
            <div className="alert alert-info">
                <h2 className="text-center">Danh sách sinh viên</h2>
                <table className="table table-bordered table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th>STT</th>
                            <th>nhtId</th>
                            <th>nhtName</th>
                            <th>nhtAge</th>
                            <th>nhtClass</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {nhtElement}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default NhtRenderListStudent;
