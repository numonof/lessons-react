import './App.css';

function App() {
  return (
    <main className='bg-sky-950 min-h-screen'>
      
    <div className="  xl:container xl:mx-auto  bg-sky-950  ">
      <header className="">
         <h1 className='font-sans font-bold text-center text-5xl text-slate-200 '>Hello firs react page</h1>
        <p className='font-sans text-white'>
          React kutubxonalarini ishiga tushurish uchun Node.js kerak bo'ladi. 
          Uni o'rnatganimizdan so'ng CMD buyruqlar oynasini ochib u yerda <b>"node -v"</b> buyrug'ini kiritsak bizga node.js ning versiyasini chiqarib berad.
          Agar bizda Node.js ornatilgan bo'lsa uning ichida <b>" npx "</b> buyrug'i bo'ladi.
        </p>
        <h3 className='font-sans font-bold text-center text-3xl text-slate-200'>NPX</h3>
        <p className='font-sans text-white'>
          NPX - bizga react kutubxonalarini yasash uchun kerak bo'ladi.
          React kutubxonalarini yaratsih uchun:
          <b>"npx create-react-app project-one"</b>
          buyrug'idan foydalanamiz
        </p>
        <h3 className='font-sans font-bold text-center text-3xl text-slate-200' >README.md</h3>
        <p  className='font-sans text-white'>proect haqida umumiy malumotlarni o'zida saqlaydi. 
        </p>
        <h3 className='font-sans font-bold text-center text-3xl text-slate-200'>package.json</h3>
        <p  className='font-sans text-white'>proect haqidagi malumotlarni o'zida saqlaydi. 
        </p>

        </header>
    </div>
    </main>
  );
}

export default App;
