import React from 'react';
import './App.css';
import Movie from './Movie';

//부모가 배열을 가지고있음 -> 자식은 props을 통해 호출가능
// const movieTitle = [
//   "헝거게임",
//   "올드보이",
//   "장화홍련",
//   "둘리"
// ]

// const movieImages = [
//   "https://lh3.googleusercontent.com/proxy/2y5dA9UyKHUvMRMREwt4R4lNTfVtBWrfIWPsfM1AZyQrwrfY3ywfiXx1eaqpslo0to6Igip8GmRXIFiFKtWWry99En05zdf7-L6ERP9s0gvX0XbF4tbeFfWKt24lRb8neVzZfrw270HQd0XbZRCYABGoMkkcbUidL-g2C4qpD684kg",
//   "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/6rIc/image/gCQXUtxPRSKlcl8QbUzOIUtLpxI",
//   "https://lh3.googleusercontent.com/proxy/ru5VIOGogTSBVCEdeXPEhJCYazWRK8e8xz47OnBxjsRA7Fn13aSShYR_wqG4205JIqI6VliTE-Ttgfp4x57LvqqyAD17ViU4rP2rxCQaSxxuvc30IO_b8F2KoTcl74t5l2cSN_SlVh0Dc8GZC_S8",
//   "https://image.chosun.com/sitedata/image/201407/11/2014071102394_0.jpg"
// ]

const movies = [
  {
    title: "헝거게임", image: "https://lh3.googleusercontent.com/proxy/2y5dA9UyKHUvMRMREwt4R4lNTfVtBWrfIWPsfM1AZyQrwrfY3ywfiXx1eaqpslo0to6Igip8GmRXIFiFKtWWry99En05zdf7-L6ERP9s0gvX0XbF4tbeFfWKt24lRb8neVzZfrw270HQd0XbZRCYABGoMkkcbUidL-g2C4qpD684kg"
  },
  {
    title: "올드보이", image: "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/6rIc/image/gCQXUtxPRSKlcl8QbUzOIUtLpxI"
  },
  {
    title: "장화홍련", image: "https://lh3.googleusercontent.com/proxy/ru5VIOGogTSBVCEdeXPEhJCYazWRK8e8xz47OnBxjsRA7Fn13aSShYR_wqG4205JIqI6VliTE-Ttgfp4x57LvqqyAD17ViU4rP2rxCQaSxxuvc30IO_b8F2KoTcl74t5l2cSN_SlVh0Dc8GZC_S8"
  },
  {
    title: "설국열차", image: "https://image.chosun.com/sitedata/image/201407/11/2014071102394_0.jpg"
  }
]
/* <Movie title={movieTitle[0]} poster={movieImages[0]}/>
      <Movie title={movieTitle[1]} poster={movieImages[1]}/>
      <Movie title={movieTitle[2]} poster={movieImages[2]}/>
      <Movie title={movieTitle[3]} poster={movieImages[3]}/> */
function App() {
  return (
    <div className="App">
      {movies.map( movie => {
        return <Movie title={movie.title} poster={movie.poster} />
    })
  }
    </div>
  );
}

export default App;
