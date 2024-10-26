import {useState} from 'react';



function Main(){
    const [imagem, setImagem] = useState(true);

  const trocar=()=>{
      setImagem(!imagem);
    }
    return(
    <main className="Main">
      <h1 className='titulo'>Liberte a <span>magia</span> da programação com a lâmpada de <span>Aladin</span></h1>
      <img src={imagem?"./lampada.png":"./genio.png"} alt="" />
      <button onClick={trocar}>trocar</button>
      </main>
    )
}

export default Main;