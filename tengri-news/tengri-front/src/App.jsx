// import React from 'react';
// import './App.css';
// import { Routes, Route } from 'react-router-dom';
// import Layout from './pages/Layout';
// import Home from './pages/Home';
// import Card from './components/NewsCards/Card';
// // import Cards from './components/NewsCards/Cards';

// function App() {
//   return (
//     <div className='bg-gray-50'>
//       <Routes>
//         <Route element={<Layout />}>
//           <Route path='/card/:id' element={<Card />} />
//           <Route path='/' element={<Home />} />
//         </Route>
//       </Routes>
//     </div>
//   )
// }

// export default App


























import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Card from './components/NewsCards/Card';

function App() {

  return (
    <div className='bg-gray-50'>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/card/:id' element={<Card />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;