var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        description: 'film o czarodzieju',
        pic: 'https://i.pinimg.com/736x/c6/c4/f0/c6c4f0f99b80b495017aaae9f5bcc7ff--movie-posters-uk-halloween-movies.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        description: 'Film o królu sawanny',
        pic: 'http://1.fwcdn.pl/po/68/78/6878/6927221.3.jpg'
    },
    {
        id: 3,
        title: 'Shrek',
        description: 'Jest to opowieść o dużym zielonym ogrze o imieniu Shrek.',
        pic: 'https://is1-ssl.mzstatic.com/image/thumb/Video62/v4/35/e8/4f/35e84fb9-ac7d-4c7c-1184-5621d407b207/source/1200x630bb.jpg'
    },
    {
        id: 4,
        title: 'Spirited Away',
        description: 'Dzielna Chihiro musi stawić czoła przeciwnościom w świecie bogów i demonów.',
        pic: 'https://s-media-cache-ak0.pinimg.com/originals/c7/0c/8a/c70c8ad640f61035c41e5d35cc5c570a.jpg'
    },
];

var moviesElements = movies.map(function (movie) {
    return React.createElement('li', { key: movie.id },
        React.createElement('h2', {}, movie.title),
        React.createElement('ul', {}, movie.description),
        React.createElement('img', { src: movie.pic })
    );
});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app')); 