
import NhtClassComp from './components/NhtClassComp';
import NhtFuncComp from './components/NhtFuncComp';
import NhtFuncCompObj from './components/NhtFuncCompObj';

function NhtApp() {
  const users = {
     fullName: 'Nguyễn Huy Thông',
     age:20,
     phone:"0967599296"
  }
  return (
    <div className="container border mt-3">
        <h1>Demo component - Props - State</h1>
        <hr/>
        <div className='alert alert-danger'>
          <NhtFuncComp name="Huy Thông" address="56 Yên Xá" company = "Trọ"/>
          <hr/>
          <NhtFuncComp name="Duy Khánh" address="K23CNT2" company = "Fit-NTU"/>
        </div>
        <div className='alert alert-info'>
          <NhtFuncCompObj renderInfo={users}/>
        </div>
        <NhtClassComp/>
       {/* chuyển dữ liệu từ NhtApp -> NhtClassComp */}
       <NhtClassComp renderName="K23CNT2" renderUsers={users}/>
    </div>
  );
}

export default NhtApp;
