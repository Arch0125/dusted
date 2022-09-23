import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='flex flex-col w-screen h-screen justify-center items-center bg-hero-pattern bg-cover text-white font-mono' >
        <p className='text-[3vmax] font-bold' >~ DUSTED ~</p>
        <p className='text-center text-3xl font-thin' >Want to know you got dusted <br/> or safeguard from dusting</p>
        <div className='flex flex-row w-[60%] mt-14 justify-between' >
          <div className='flex flex-col w-[45%] max-h-fit min-h-full p-3 border-white border-2 rounded-xl items-center justify-center' >
            <p className='text-2xl font-bold' >Organization Login</p>
            <p className='text-center text-xl font-thin mt-5' >Blacklist/Whitelist addresses here <br/> Also go through appeals</p>
            <button className='w-[80%] h-12 mt-5 bg-white text-black font-bold rounded-xl ' >Login</button>
          </div>
          <div className='flex flex-col w-[45%] max-h-fit min-h-full p-3 border-white border-2 rounded-xl justify-center items-center' >
            <p className='text-2xl font-bold' >User Login</p>
            <p className='text-center text-xl font-thin mt-5' >Check if you got dusted <br/> or appeal if you think you are innocent</p>
            <button className='w-[80%] h-12 mt-5 bg-white text-black font-bold rounded-xl ' >Login</button>
          </div>
        </div>
    </div>
  );
}

export default App;
