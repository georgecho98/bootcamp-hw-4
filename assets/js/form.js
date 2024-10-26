// TODO: Create a variable that selects the form element
const form = document.querySelector('#form');

const errorElement = document.getElementById('error');

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.


function submission(event) {
    const blogPosts = [];
    event.preventDefault();
    console.log(event);
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (!username || !title || !content) {
        errorElement.textContent = "Please complete the form.'"; 
        console.log("Please complete the form.'");
        return;
    }
        
    const blogPost = {
        username: username,
        title: title,
        content: content,
    };


    blogPosts.push(blogPost);
    storeLocalStorage(blogPost);

        

    redirectPage("blog.html");
}

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.



    form.addEventListener('submit', submission);

