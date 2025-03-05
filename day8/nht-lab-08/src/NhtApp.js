import React, { Component } from 'react';
import NhtControl from './components/NhtControl';
import NhtStudentList from './components/NhtStudentList';
import NhtForm from './components/NhtForm';

class NhtApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nhtStudents: [ 
        { nhtID: "SV001", nhtStudentName: "Nguyễn Huy Thông", nhtAge: 19, nhtGender: "Nam", nhtBirthday: "04/09/2005", nhtBrithPlace: "QN", nhtAddress: "Yên Xá" },
        { nhtID: "SV002", nhtStudentName: "Nguyễn Quốc Duy", nhtAge: 19, nhtGender: "Nam", nhtBirthday: "04/09/2005", nhtBrithPlace: "HN", nhtAddress: "Hai Bà Trưng" },
        { nhtID: "SV003", nhtStudentName: "Nguyễn Hữu Chung", nhtAge: 19, nhtGender: "Nam", nhtBirthday: "04/09/2005", nhtBrithPlace: "HD", nhtAddress: "Hải Dương" },
        { nhtID: "SV004", nhtStudentName: "Nguyễn Duy Khánh", nhtAge: 20, nhtGender: "Nam", nhtBirthday: "13/01/2005", nhtBrithPlace: "HD", nhtAddress: "Yên Xá" }
      ],
      selectedStudent: null
    };
  }

  // Xử lý khi bấm "Xem"
  onNhtHandleView = (nhtStudent) => {
    this.setState({ selectedStudent: nhtStudent });
  };

  // Xử lý khi bấm "Sửa"
  onNhtHandleEdit = (nhtStudent) => {
    this.setState({ selectedStudent: nhtStudent });
  };

  // Xử lý khi bấm "Xóa"
  onNhtHandleDelete = (studentID) => {
    let filteredStudents = this.state.nhtStudents.filter(student => student.nhtID !== studentID);
    this.setState({ nhtStudents: filteredStudents });
  };

  // ✅ Xử lý khi bấm "Lưu" sau khi chỉnh sửa
  onNhtHandleUpdate = (updatedStudent) => {
    let updatedStudents = this.state.nhtStudents.map(student => 
      student.nhtID === updatedStudent.nhtID ? updatedStudent : student
    );

    this.setState({ 
      nhtStudents: updatedStudents,
      selectedStudent: null // Reset form sau khi cập nhật
    });
  };

  render() {
    return (
      <div>
        <h1 className='text-center'>Nguyễn Huy Thông - K23CNT2 - Mini Project</h1>
        <section className='container-fluid mt-3'>
          <div className="row">
            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">
                <NhtControl />
                <NhtStudentList
                  renderNhtStudents={this.state.nhtStudents}
                  onNhtHandleView={this.onNhtHandleView}
                  onNhtHandleEdit={this.onNhtHandleEdit}
                  onNhtHandleDelete={this.onNhtHandleDelete}
                />
              </div>
            </div>
            <div className="col-5 grid-margin">
              {/* 🔥 Truyền `onNhtHandleUpdate` vào `NhtForm` */}
              <NhtForm 
                renderNhtStudent={this.state.selectedStudent} 
                onNhtHandleUpdate={this.onNhtHandleUpdate} 
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default NhtApp;
