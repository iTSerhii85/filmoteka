// const refs = {
//     formMessage: document.querySelector('.header-form__message'),
//     searchBtn: document.querySelector('.search-btn'),
//     input: document.querySelector('.header-form__input')
// }

// refs.input.addEventListener('input', onInputEmpty)

// function onInputEmpty(evt) {
//     const inputValue = evt.currentTarget.elements.searchQuery.value.trim();

//     if (inputValue) {
//         refs.searchBtn.style.display = 'block';

//         refs.searchBtn.addEventListener('click', () => {
//             refs.searchBtn.style.display = 'none';
//             refs.input.value = '';
//             return
//         });
//     }
// }
// //  функція яка викликається якщо нічого не введено або нема результату

// function emptyNoResultInput() {
//     refs.formMessage.insertAdjacentHTML('beforeend',
//         '<p class="header-form__message">Search result not successfull.Enter the correct movie name</p>');
    
//     setTimeout(() => {
//         refs.formMessage.innerHTML = '';
//     }, 3000);

//     refs.divEl.innerHTML = '';

//    movieApiService.searchMovies().then(data => {
//       saveSearchResultToLocalStorage(data);
//       createMainMarkup(data.results);
//       console.log(data);
//       paginationMarkUp(currentPage, data.total_pages);
  
// })
// }

// викликається всередині функції onSearch(evt), якщо інпут пустий
// if (!movieApiService.value) {
//       emptyNoResultInput();
//       return
//     }







// localStorage Service
// const save = (key, value) => {
    
//     try {
//         const serializedState = JSON.stringify(value);
//         localStorage.setItem(key, serializedState);
//     }
//     catch (error){
//         console.log("Set state error: ", error.message);
//     }
// }

// const load = key => {
//     try {
//         const serializedState = localStorage.getItem(key);
//         return serializedState === null ? undefined : JSON.parse(serializedState);
//     }
//     catch (error){
//         console.error("Get state error: ", error.message);
// }
// }

// const remove = key => {
//     try {
//         localStorage.removeItem(key);
// }
//     catch (error) {
//         console.error("Get state error: ", error.message);
// }
// }
// export {
//     save, load, remove
// };