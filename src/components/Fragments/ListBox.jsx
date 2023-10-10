import { useState } from "react";
// import PropTypes from "prop-types";
function ListBox({ animes, onSelectedAnime }) {
  const [isOpen1, setIsOpen1] = useState(true);

  return (
    <>
      <div className="box">
        <button className="btn-toggle" onClick={() => setIsOpen1((open) => !open)}>
          {isOpen1 ? "–" : "+"}
        </button>

        {/* INI LIST ANIME */}
        {isOpen1 && <AnimeList animes={animes} onSelectedAnime={onSelectedAnime} />}
      </div>
    </>
  );
}

// Fungsi code
//Cek Properti Sebelum Menggunakan: Gunakan animes?.map(...) dan onSelectedAnime?.(...) (opsional chaining) untuk memastikan bahwa Anda tidak mengakses properti yang mungkin tidak ada. Ini akan membantu mencegah kesalahan jika animes atau onSelectedAnime adalah null atau undefined.
// AnimeList.propTypes = {
//   animes: PropTypes.array.isRequired,
//   onSelectedAnime: PropTypes.func.isRequired,
// };
export default ListBox;

function AnimeList({ animes, onSelectedAnime }) {
  return (
    <ul className="list list-anime">
      {animes?.map((anime) => (
        <Anime anime={anime} onSelectedAnime={onSelectedAnime} key={anime.mal_id} />
      ))}
    </ul>
  );
}

function Anime({ anime, onSelectedAnime }) {
  return (
    <li key={anime.mal_id} onClick={() => onSelectedAnime(anime.mal_id)}>
      <img src={anime.image} alt={`${anime.title} cover`} />
      <h3>{anime.title}</h3>
      <div>
        <p>
          <span>{anime.year}</span>
        </p>
      </div>
    </li>
  );
}
