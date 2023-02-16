

function FetchApi (){
    return fetch(`https://newsapi.org/v2/everything?q=tesla&from=2023-01-07&sortBy=publishedAt&apiKey=63e400e73d9946f7a2a298d13751c419`)
    .then((response) => {
      var data = response.json();
      return data
    })
    .then( (data) => {
       console.log(data);
    })

}
FetchApi()