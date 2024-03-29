import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js';
// Create a single supabase client for interacting with your database
const supabase = createClient('https://ruvhjkfigfqecvvlwrdp.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1dmhqa2ZpZ2ZxZWN2dmx3cmRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAzNTA2NjAsImV4cCI6MjAyNTkyNjY2MH0.9nHfKjEByW-P31hRREUiVmr3ET6lHqTcYL_mxRfs-8U')

let { data: books, error } = await supabase
  .from('books')
  .select('*');

console.log('Books:', books);

for (let book of books) {
  let bookList = document.getElementById('booksBody');
  bookList.innerHTML += `<tr><td>${book.Title}</td><td>${book.Author}</td><td>${book.ISBN}</td></tr>`;
}