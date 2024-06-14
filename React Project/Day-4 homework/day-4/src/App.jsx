import Color from './components/Color'
import data from './data/color'
import moviedata from './data/movies'
import Movie from './components/Movie'
import './App.css'

function App() {

  return (

    <>

      <div className='color-props' >
        <div className='project-titel'>
          <h1>React-Props-001</h1>
          <p>🔖A basic application that displays a minimal but complete color picker. Each card provides color, title, etc.</p>
          <p>🔖Using React Props complete the following using JSX.</p>
        </div>
        <div className="app-container">
          {data.map((item, index) => (
            <Color key={index} color={item.color} titel={item.titel} />
          ))}
        </div>
      </div>

      <div className='move-props'>
        <div className='project-titel'>
          <h1>React-Props-002</h1>
          <p>🔖A basic application that displays a list of movies as a list of cards. Each card provides movie detail such as title, subtitle, description, image, and rating.</p>

        </div>

        <div className='movie-container'>
          {moviedata.map((movie, index) => (
            <Movie
              key={index}
              movie={movie.movie}
              titel={movie.titel}
              description={movie.discription}
              url={movie.url}
              ratings={movie.ratings}
            />
          ))}
        </div>




      </div>




    </>
  )
}

export default App;