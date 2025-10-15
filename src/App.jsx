import './App.css'

function App() {

  return (
    <>
    <div className='bg-black w-full min-h-screen flex items-start'>
    <div className='bg-[#121212] w-full p-2'>
      <button className='text-2xl font-semibold text-white p-3 cursor-pointer'> 🎬 Binge<span className='text-red-600 font-semibold'> Box </span> </button>
      <input 
        type='text'
        placeholder='Search...'
        className='bg-gray-300 sm:ml-20 md:ml-70 lg:ml-200 rounded-full p-2 w-1/5'
      />
    </div>
    </div>
    </>
  )
}

export default App
