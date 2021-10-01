const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const header = document.createElement('div');
  const dateEl = document.createElement('span');
  const titleEl = document.createElement('h1');
  const tempEl = document.createElement('span');

  header.appendChild(dateEl);
  header.appendChild(titleEl);
  header.appendChild(tempEl);
  
  header.classList.add('header');
  dateEl.classList.add('date');
  tempEl.classList.add('temp');

  dateEl.textContent = date;
  titleEl.textContent = title;
  tempEl.textContent = temp;

  return header
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const head = Header('Kyoto times', 'Oct. 1st', '77 Degrees');
  const query = document.querySelector(selector)
  query.appendChild(head);
}

export { Header, headerAppender }
