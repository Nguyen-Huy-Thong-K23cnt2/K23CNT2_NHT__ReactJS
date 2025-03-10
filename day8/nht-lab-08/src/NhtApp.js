import React, { Component } from 'react';
import NhtControl from './components/NhtControl';
import NhtStudentList from './components/NhtStudentList';
import NhtForm from './components/NhtForm';
import NhtStudentDetail from './components/NhtStudentDetail'; 

class NhtApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nhtStudents: [ 
        { nhtID: "SV001", nhtStudentName: "Nguyễn Huy Thông", nhtAge: 19, nhtGender: "Nam", nhtBirthday: "04/09/2005", nhtBirthPlace: "QN", nhtAddress: "Yên Xá" },
        { nhtID: "SV002", nhtStudentName: "Nguyễn Quốc Duy", nhtAge: 19, nhtGender: "Nam", nhtBirthday: "04/09/2005", nhtBirthPlace: "HN", nhtAddress: "Hai Bà Trưng" },
        { nhtID: "SV003", nhtStudentName: "Nguyễn Hữu Chung", nhtAge: 19, nhtGender: "Nam", nhtBirthday: "04/09/2005", nhtBirthPlace: "HD", nhtAddress: "Hải Dương" },
        { nhtID: "SV004", nhtStudentName: "Nguyễn Duy Khánh", nhtAge: 20, nhtGender: "Nam", nhtBirthday: "13/01/2005", nhtBirthPlace: "HD", nhtAddress: "Yên Xá" }
      ],
      filteredStudents: [],
      selectedStudent: null,
      showDetail: false, 
      isAddingNew: false,
      searchKeyword: ''
    };
  }

  componentDidMount() {
    this.setState({ filteredStudents: this.state.nhtStudents });
  }

  // 🔎 Xử lý tìm kiếm sinh viên theo tên
  onNhtHandleSearch = (keyword) => {
    this.setState({ searchKeyword: keyword }, this.filterStudents);
  };

  // Hàm lọc danh sách sinh viên dựa vào từ khóa tìm kiếm
  filterStudents = () => {
    const { nhtStudents, searchKeyword } = this.state;
    const filtered = nhtStudents.filter(student =>
      student.nhtStudentName.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    this.setState({ filteredStudents: filtered });
  };

  // 🔎 Xử lý khi bấm "Xem"
  onNhtHandleView = (nhtStudent) => {
    this.setState({
      selectedStudent: nhtStudent,
      showDetail: true,
      isAddingNew: false
    });
  };

  // ❌ Xử lý khi bấm "Đóng"
  onNhtHandleCloseDetail = () => {
    this.setState({ showDetail: false });
  };

  // ✏️ Xử lý khi bấm "Sửa"
  onNhtHandleEdit = (nhtStudent) => {
    this.setState({ selectedStudent: nhtStudent, showDetail: false, isAddingNew: false });
  };

  // 🗑 Xử lý khi bấm "Xóa"
  onNhtHandleDelete = (studentID) => {
    this.setState(prevState => {
      const updatedStudents = prevState.nhtStudents.filter(student => student.nhtID !== studentID);
      return { nhtStudents: updatedStudents, showDetail: false };
    }, this.filterStudents);
  };

  // ✅ Cập nhật sinh viên sau khi chỉnh sửa
  onNhtHandleUpdate = (updatedStudent) => {
    this.setState(prevState => {
      const updatedStudents = prevState.nhtStudents.map(student => 
        student.nhtID === updatedStudent.nhtID ? updatedStudent : student
      );
      return { nhtStudents: updatedStudents, selectedStudent: null, isAddingNew: false };
    }, this.filterStudents);
  };

  // 🆕 Xử lý khi bấm "Thêm mới"
  onNhtHandleAddNew = () => {
    this.setState({
      selectedStudent: null,
      showDetail: false,
      isAddingNew: true
    });
  };

  // 🆕 Xử lý khi lưu sinh viên mới
  onNhtHandleSaveNew = (newStudent) => {
    this.setState(prevState => ({
      nhtStudents: [...prevState.nhtStudents, newStudent],
      selectedStudent: null,
      isAddingNew: false
    }), this.filterStudents);
  };

  render() {
    return (
      <div>
        <h1 className='text-center'>Nguyễn Huy Thông - K23CNT2 - Mini Project</h1>
        <section className='container-fluid mt-3'>
          <div className="row">
            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">
                <NhtControl 
                  onNhtHandleAddNew={this.onNhtHandleAddNew} 
                  onNhtHandleSearch={this.onNhtHandleSearch} 
                />
                <NhtStudentList
                  renderNhtStudents={this.state.filteredStudents} 
                  onNhtHandleView={this.onNhtHandleView} 
                  onNhtHandleEdit={this.onNhtHandleEdit}
                  onNhtHandleDelete={this.onNhtHandleDelete}
                />
              </div>
            </div>

            <div className="col-5 grid-margin">
              {this.state.showDetail ? (
                <NhtStudentDetail 
                  student={this.state.selectedStudent} 
                  onClose={this.onNhtHandleCloseDetail} 
                />
              ) : (
                <NhtForm 
                  renderNhtStudent={this.state.selectedStudent} 
                  onNhtHandleUpdate={this.onNhtHandleUpdate} 
                  onNhtHandleSaveNew={this.onNhtHandleSaveNew} 
                  isAddingNew={this.state.isAddingNew} 
                />
              )}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default NhtApp;
