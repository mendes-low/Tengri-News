// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import HeaderBottom from '../components/HeaderBottom';

// const Layout = () => {
//   return (
//     <div className='flex flex-col justify-between h-full'>
//       <div className='flex flex-col'>
//         <Header />
//         <div className='flex flex-col py-2 px-3 mx-[120px] border-2 bg-white mb-10 rounded-b-lg shadow-lg shadow-[#e7e7e7]'>
//           <HeaderBottom />
//           <Outlet />
//         </div>
//       </div>
//       <Footer />
//     </div>
//   )
// }

// export default Layout;










import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeaderBottom from '../components/HeaderBottom';

const Layout = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      {/* <div className='flex flex-col pb-[600px] px-3 mx-[120px] border-2 bg-white mb-10 rounded-b-lg shadow-lg shadow-[#e7e7e7]'> */}
      {/* <HeaderBottom /> */}
      <Outlet />
      {/* </div> */}
      <Footer />
    </div>
  );
}

export default Layout;
