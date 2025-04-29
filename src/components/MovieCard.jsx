import React from 'react'

const MovieCard = ({movie:{title, release_date, vote_average, poster_path, original_language}}) => {
  return (
    <div className='movie-card transition-transform transform hover:scale-105 hover:shadow-2xl duration-300'>
    <img 
        src={poster_path ? 
            `https://image.tmdb.org/t/p/w500/${poster_path}` :'/notavailable-removebg-preview.png'
        } alt='movie poster'
    />
    <div className='mt-4 d-flex'>
        <h3>{title}</h3>
        <div className='content'>
        <div className='rating'>
        <img src="Rating.svg" alt="star" />
        <p className='text-white'>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
    </div>
    <span>•</span>
    <p className='lang'>{original_language}</p>
    <span>•</span>
    <p className="year">
        {release_date ? release_date.split('-')[0]: 'N/A'}
    </p>
    </div>
</div>      
    </div>
  )
}

export default MovieCard
