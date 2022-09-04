import { useState } from 'react';
import { Movie } from './types/Movies';

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const loadMovies = () => {
    fetch('https://api.b7web.com.br/cinema/')
      .then((response)=>{
        return response.json();
      })
      .then((json)=>{
        setMovies(json);
      });
  }

   return (
   
    <div>
      <button className="block bg-blue-400 p-2 rounded" onClick={loadMovies}>Carregar Filmes</button>
        Total de Filmes: {movies.length}
      <div className="grid grid-cols-6 gap-3">
        {movies.map((item, index)=>(
          <div key={index}>
            <img src={item.avatar} className="w-32 block" />
            {item.titulo}
          </div>
      ))}
      </div>
    </div>
  
  );
}
export default App;

