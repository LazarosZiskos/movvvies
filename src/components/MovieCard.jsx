/* eslint-disable react/prop-types */

const MovieCard = ({
  movie: { title, vote_average, poster_path, release_date, original_language },
}) => {
  return (
    <div className="bg-dark-100 p-5 rounded-xl shadow-inner shadow-light-100/10">
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : "/no-movie.png"
        }
        alt="image"
      />
      <div className="text-left mt-2">
        <h3 className="text-white pb-2 font-bold">{title}</h3>
        <div className="flex text-white gap-2">
          <img src="star.svg" alt="star" />
          {vote_average.toFixed(1)}
          <span className="text-gray-100">• {original_language}</span>
          <span className="text-gray-100">
            • {release_date ? release_date.split("-")[0] : "null"}
          </span>
        </div>
        <div className=" pt-5">
          <button className="bg-[#221F3D] border border-gray-100 text-white py-2 rounded-xl w-full cursor-pointer border-black">
            More
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
