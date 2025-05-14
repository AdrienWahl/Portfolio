import './App.css'
import Footer from './components/Footer';
import PageContent from './components/PageContent';
import Menu from './components/Menu'
import { useState } from 'react';

function App() {

  const [currentPage, setCurrentPage] = useState('about');
   return (
      
        
    
        <div className='min-w-screen min-h-screen flex flex-col overflow-y-auto sm:overflow-y-visible bg-[#1C1C1C]'>
          
          <header >
            <nav className='flex justify-between '>

       

                <button onClick={() => setCurrentPage("about")} className='ml-20 pt-10 bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent text-2xl font-bold font-[Poppins]'>Adrien Wahl.dev </button>
                
              
            <Menu onNavigate={setCurrentPage}/> 
            </nav>
          </header>
          <div className='flex-1 flex items-center justify-center'>
          <PageContent currentPage={currentPage} />
        </div>
          <div className=' w-full '>
         <Footer />
         </div>
         </div>

   )
  ;
}
         
  


export default App ;
