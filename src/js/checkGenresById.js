// Функція вибору потрібних жанрів  + умову на кількість жанрів
function checkGenresById(obj) {
  const savedGenresData = localStorage.getItem('GENRES_DATA_KEY');
  const parseGenresData = JSON.parse(savedGenresData);
  let genresArr = [];

  const genresIds = obj.genre_ids;

  for (const parseGenre of parseGenresData) {
    if (genresIds.includes(parseGenre.id)) {
      genresArr.push(parseGenre.name);
    }
  }
  // console.log(genresArr)

  let genresStr = '';
  if (genresArr.length === 0) {
    genresStr = 'Unknown genre';
  } else if (genresArr.length <= 2) {
    genresStr = genresArr.join(', ');
  } else {
    genresArr.splice(2, genresArr.length);
    genresStr = genresArr.join(', ') + ', Other';
  }
  return genresStr;
}

// Функція вибору потрібних жанрів для модалки
function checkGenresByIdModal(obj) {
  const savedGenresData = localStorage.getItem('GENRES_DATA_KEY');
  const parseGenresData = JSON.parse(savedGenresData);
  let genresArr = [];

  const genresIds = obj.genre_ids;

  for (const parseGenre of parseGenresData) {
    if (genresIds.includes(parseGenre.id)) {
      genresArr.push(parseGenre.name);
    }
  }
  // console.log(genresArr)

  let genresStr = '';
  if (genresArr.length === 0) {
    genresStr = 'Unknown genre';
  } else {
    genresStr = genresArr.join(', ');
  }
  return genresStr;
}

export { checkGenresById, checkGenresByIdModal };
