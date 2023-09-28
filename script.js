// Access Key of unsplash.com
const clientId = 'VeVHr7Gdox5byt2E2bZCIkX8L4b2c6uq-w1IJDmie8I';
// Элементы формы (сама форма и поле ввода)
const formEl = document.querySelector('form');
const searchInput = document.querySelector('.input');
// блок с картинками
const images = document.querySelector('.images');
// Ключевое слово поиска элемента и страница
let page = 1;
let word = '';
// Кнопка показать больше картинок
const buttonShowMore = document.querySelector('.show-more');



// Функция поиска картинок
async function searchImages1() {
	url = `https://api.unsplash.com/search/photos?query=spring&per_page=6&page=1&orientation=landscape&client_id=${clientId}`

	const res = await fetch(url);
	const data = await res.json();

	const results = data.results;

	results.map(el => {
	// Создадим объект и отрисуем его на странице
		const img = document.createElement('img');
		img.classList.add('gallery-img')
		img.src = el.urls.regular;
		img.alt = `image`;
		images.append(img);
	})
}

searchImages1()








// Функция поиска картинок
async function searchImages() {
	word = searchInput.value;
	url = `https://api.unsplash.com/search/photos?query=${word}&per_page=6&page=${page}&orientation=landscape&client_id=${clientId}`

	const res = await fetch(url);
	const data = await res.json();

	if(page === 1) {
		images.innerHTML = ''
	}

	const results = data.results;

	results.map(el => {
	// Создадим объект и отрисуем его на странице
		const img = document.createElement('img');
		img.classList.add('gallery-img')
		img.src = el.urls.regular;
		img.alt = `image`;
		images.append(img);
	})

	buttonShowMore.style.display = 'block'
}




formEl.addEventListener("submit", (event) => {
	event.preventDefault();
	page = 1;
	searchImages();
})


// Показать дополнительные картинки
buttonShowMore.addEventListener("click", () => {
	page++;
	searchImages();
})