import React, { Component } from 'react';
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

class App extends Component{
  //render : componentWillMount() > render() > componentDidMount()
  //update : 

  //state가 생성할때마다 새로 render된다만 명심하면된다?
  state = {
    // greeting : 'hello!!!!!!!',
    // movies : [
    //   {
    //     title: "헝거게임", poster: "https://lh3.googleusercontent.com/proxy/2y5dA9UyKHUvMRMREwt4R4lNTfVtBWrfIWPsfM1AZyQrwrfY3ywfiXx1eaqpslo0to6Igip8GmRXIFiFKtWWry99En05zdf7-L6ERP9s0gvX0XbF4tbeFfWKt24lRb8neVzZfrw270HQd0XbZRCYABGoMkkcbUidL-g2C4qpD684kg"
    //   },
    //   {
    //     title: "올드보이", poster: "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/6rIc/image/gCQXUtxPRSKlcl8QbUzOIUtLpxI"
    //   },
    //   {
    //     title: "장화홍련", poster: "https://lh3.googleusercontent.com/proxy/ru5VIOGogTSBVCEdeXPEhJCYazWRK8e8xz47OnBxjsRA7Fn13aSShYR_wqG4205JIqI6VliTE-Ttgfp4x57LvqqyAD17ViU4rP2rxCQaSxxuvc30IO_b8F2KoTcl74t5l2cSN_SlVh0Dc8GZC_S8"
    //   },
    //   {
    //     title: "설국열차", poster: "https://image.chosun.com/sitedata/image/201407/11/2014071102394_0.jpg"
    //   }
    // ]
  }
  componentWillMount(){
    console.log('will mount')
  }
  componentDidMount(){
    // console.log('did mount')
    // setTimeout(()=>{
      // this.state.greeting = 'hello again'//do not mutate state directly. here is solution
      // this.setState({
        // greeting:'hello again!!!!'
        
        //5초뒤에 센과치히로가 뜨게
        // movies : [
        //         {
        //            title: "센과치히로의 행방불명", poster: "https://image.aladin.co.kr/product/13086/57/cover500/k792532994_1.jpg"
        //         }, ...this.state.movies
        // ] 

        //5초뒤에 전체포스터출력
        // movies : [
        //   {
        //     title: "헝거게임", poster: "https://lh3.googleusercontent.com/proxy/2y5dA9UyKHUvMRMREwt4R4lNTfVtBWrfIWPsfM1AZyQrwrfY3ywfiXx1eaqpslo0to6Igip8GmRXIFiFKtWWry99En05zdf7-L6ERP9s0gvX0XbF4tbeFfWKt24lRb8neVzZfrw270HQd0XbZRCYABGoMkkcbUidL-g2C4qpD684kg"
        //   },
        //   {
        //     title: "올드보이", poster: "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/6rIc/image/gCQXUtxPRSKlcl8QbUzOIUtLpxI"
        //   },
        //   {
        //     title: "장화홍련", poster: "https://lh3.googleusercontent.com/proxy/ru5VIOGogTSBVCEdeXPEhJCYazWRK8e8xz47OnBxjsRA7Fn13aSShYR_wqG4205JIqI6VliTE-Ttgfp4x57LvqqyAD17ViU4rP2rxCQaSxxuvc30IO_b8F2KoTcl74t5l2cSN_SlVh0Dc8GZC_S8"
        //   },
        //   {
        //     title: "설국열차", poster: "https://image.chosun.com/sitedata/image/201407/11/2014071102394_0.jpg"
        //   }
        // ]
  //   })
  // },5000)
 fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
    this._getMovies()
  }
  //1
  _renderMovies = () => {
    const movies = this.state.movies.map((movie)=>{
      console.log(movie)
      return <Movie title = {movie.title} poster = {movie.large_cover_image} key = {movie.id} />
    })
    return movies
  }

  //2
  _callApi = () =>{
    return fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
    // .then(potato => console.log(potato))
    .then(potato => potato.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  //3
  _getMovies = async () =>{
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  render(){
    console.log('did render')
    return(
      <div className="App">
        {/* {this.state.greeting} */}
      {/* {this.state.movies.map( (movie, index) => {
        return <Movie title={movie.title} poster={movie.poster} key={index} />
        })
      } */}
      {this.state.movies ? this._renderMovies() : 'loading'}
    </div>
    )
  }
}

export default App;
