// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.

const toggleswitch = document.getElementById('toggle');

const theme =localStorage.getItem('theme');
if (theme === 'dark') {
  document.body.classList.add('dark'); // Use 'dark-mode' if that's your CSS class
}


toggleswitch.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
          // Dark mode
          localStorage.setItem('theme','dark');
  } else {
      // Light mode
     
      localStorage.removeItem('theme');
  }
});

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.


function readLocalStorage() {
  const existingData = JSON.parse(localStorage.getItem('blogdata')) || [];
  return existingData;
};

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(object) {
  
  const existingData=readLocalStorage();

  existingData.push(object);
  localStorage.setItem('blogdata',JSON.stringify(existingData));
  return existingData;

};


// ! Use the following function whenever you need to redirect to a different page


let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};
