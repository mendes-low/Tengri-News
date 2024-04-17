import React, { useState } from 'react';
import { getDataItems } from '../data';
import { Link } from 'react-router-dom';
import HeaderBottom from '../components/HeaderBottom';

import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const Home = () => {
  const [step, setStep] = useState(1);
  const { data, loading, error, popularNews, recentNews } = getDataItems();
  const selectData = step === 1 ? recentNews : popularNews;
  const [search, setSearch] = useState('');

  return (
    <div className='flex flex-col pb-[600px] px-3 mx-[120px] border-2 bg-white mb-10 rounded-b-lg shadow-lg shadow-[#e7e7e7]'>
      <HeaderBottom search={search} changeSearch={setSearch} />
      <div className='flex space-x-5'>
        {loading && <h1>loading...</h1>}
        {error && <div>{error}</div>}
        <div className='grid space-x-2 w-[80%] h-screen grid-cols-3'>
          {!search && data && data.map((item, index) => (
            <Link to={`/card/${item.id}`} key={index} className={index === 0 ? `col-span-3` : ''}>
              <div className={index === 0 ? `flex-grow` : ''}>
                <img src={item.photo} alt={item.first_photo.alt} className='w-full' />
                <div className='p-4'>
                  <h1 className='text-xl font-bold'>{item.title}</h1>
                  <p className='text-sm text-gray-500'>{item.date_string}</p>
                  <div className='flex items-center mt-2'>
                    <VisibilityOutlinedIcon style={{ fontSize: '15px', color: 'gray' }} />
                    <p className='text-[12px] text-gray-500 ml-1'>{item.view_count}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {search && data && data.filter(item =>
            item.title.toLowerCase().includes(search.toLowerCase())).map((item, index) => (
              <Link to={`/card/${item.id}`} key={index} className={index === 0 ? `col-span-3` : ''}>
                <div className={index === 0 ? `flex-grow` : ''}>
                  <img src={item.photo} alt={item.first_photo.alt} className='w-full' />
                  <div className='p-4'>
                    <h1 className='text-xl font-bold'>{item.title}</h1>
                    <p className='text-sm text-gray-500'>{item.date_string}</p>
                    <div className='flex items-center mt-2'>
                      <VisibilityOutlinedIcon style={{ fontSize: '15px', color: 'gray' }} />
                      <p className='text-[12px] text-gray-500 ml-1'>{item.view_count}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>

        <div className='w-[20%]'>
          <div className='flex flex-col'>
            <div className='flex justify-between border-b-2 border-gray-500'>
              <button onClick={() => setStep(1)} className={step === 1 ? 'text-white bg-[#03ab02] p-1 rounded-t-md w-2/4' : 'w-2/4 p-1 rounded-t-md'}>Последние</button>
              <button onClick={() => setStep(2)} className={step === 2 ? 'text-white bg-[#03ab02] p-1 rounded-t-md w-2/4' : 'w-2/4 p-1 rounded-t-md'}>Популярные</button>
            </div>
            <div className='h-full '>
              {loading && <img src='https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b952e7zb6qfrhkio5p1s9t0idk7wne1r0wqot8nw2z6i&ep=v1_gifs_search&rid=200w.gif&ct=g' />}
              {error && <div>{error}</div>}
              {selectData &&
                selectData.map((item, index) => (
                  <div key={index} className='flex flex-col space-x-2 p-4'>
                    <h1 className='text-sm font-bold'>{item.title}</h1>
                    <div className='flex items-center justify-between'>
                      <p className='text-sm text-gray-500'>{item.date_string}</p>
                      <div className='flex items-center'>
                        <VisibilityOutlinedIcon style={{ fontSize: '15px', color: 'gray' }} />
                        <p className='text-[12px] text-gray-500'>{item.view_count}</p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
















// import React, { useState } from 'react';
// import { getDataItems } from '../data';
// import { Link } from 'react-router-dom';
// import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

// const Home = () => {
//   const [step, setStep] = useState(1);
//   const { data, loading, error, popularNews, recentNews } = getDataItems();
//   const selectData = step === 1 ? recentNews : popularNews;

//   return (
//     <div className='flex space-x-5'>
//       {loading && <h1>loading...</h1>}
//       {error && <div>{error}</div>}
//       <div className='flex flex-wrap w-full h-screen'>
//         {data && data.map((item, index) => (
//           <Link to={`/card/${item.id}`} key={index} className='w-full md:w-1/3 p-2'>
//             <div className='bg-white rounded-lg shadow-md'>
//               <img src={item.photo} alt={item.first_photo.alt} className='w-full' />
//               <div className='p-4'>
//                 <h1 className='text-xl font-bold'>{item.title}</h1>
//                 <p className='text-sm text-gray-500'>{item.date_string}</p>
//                 <div className='flex items-center mt-2'>
//                   <VisibilityOutlinedIcon style={{ fontSize: '15px', color: 'gray' }} />
//                   <p className='text-[12px] text-gray-500 ml-1'>{item.view_count}</p>
//                 </div>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>

//       <div className='w-[20%]'>
//         <div className='flex flex-col'>
//           <div className='flex'>
//             <button onClick={() => setStep(1)} className={step === 1 ? 'text-white bg-[#03ab02] p-1 rounded-t-md' : 'p-1 rounded-t-md'}>Последние</button>
//             <button onClick={() => setStep(2)} className={step === 2 ? 'text-white bg-[#03ab02] p-1 rounded-t-md' : 'p-1 rounded-t-md'}>Популярные</button>
//           </div>
//           <div className='h-full overflow-y-scroll'>
//             {loading && <img src='https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b952e7zb6qfrhkio5p1s9t0idk7wne1r0wqot8nw2z6i&ep=v1_gifs_search&rid=200w.gif&ct=g' />}
//             {error && <div>{error}</div>}
//             {selectData &&
//               selectData.map((item, index) => (
//                 <div key={index} className='flex flex-col space-x-2 p-4'>
//                   <h1 className='text-sm font-bold'>{item.title}</h1>
//                   <div className='flex items-center justify-between'>
//                     <p className='text-sm text-gray-500'>{item.date_string}</p>
//                     <div className='flex items-center'>
//                       <VisibilityOutlinedIcon style={{ fontSize: '15px', color: 'gray' }} />
//                       <p className='text-[12px] text-gray-500'>{item.view_count}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             }
//           </div>
//         </div>
//       </div>
//     </div >
//   );
// }

// export default Home;




