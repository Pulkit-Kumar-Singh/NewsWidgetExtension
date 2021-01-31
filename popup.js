console.log('hello');
// const searchForm = document.querySelector('.search');
const container = document.querySelector('.container');
const newsList =  document.querySelector('.newsList');

window.addEventListener('load', retrieve);
// searchForm.addEventListener('submit', retrieve);

function retrieve(e) {

    newsList.innerHTML = '';

    e.preventDefault()

    const apiKey = '4b4615bd12bd4536bad0c68d888e13f9';

    let url = `http://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;

    fetch(url).then((res)=> {
        return res.json()
    }).then((data)=>{
        console.log(data)
        data.articles.forEach(article =>{
            let newsTitle = document.createElement('div')
            let thumbnail = document.createElement('div')            
            let li = document.createElement('li');
            let h1 = document.createElement('h1');
            let a = document.createElement('a');
            let img = document.createElement('img');
            a.setAttribute('href', article.url);
            a.setAttribute('target', '_blank');
            
            a.textContent = article.title;
            h1.appendChild(a);
            newsTitle.appendChild(h1);
            img.setAttribute('src', article.urlToImage);
            thumbnail.appendChild(img);
            li.appendChild(newsTitle);
            li.appendChild(thumbnail);
            newsList.appendChild(li);
        })
    }).catch((error)=>{
        console.log(error)
    })

}
