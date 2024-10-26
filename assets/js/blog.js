// TODO: Create a variable that selects the main element, and a variable that selects the back button element

const mainblog = document.querySelector('main');

const backbtn = document.getElementById('back');

// TODO: Create a function that builds an element and appends it to the DOM

function ElementBuild(p) {
    

}




// TODO: Create a function that handles the case where there are no blog posts to display
function noBlog() {
    const existingData = readLocalStorage();
    if (existingData.length === 0) {
        mainblog.innerHTML = '<p>No Blog posts yet...</p>';
        return true;
}
return false;
}

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.


function renderBlogList() {
    
    const Posts = readLocalStorage();
    
    if(noBlog()) return;
  
    for (element of Posts) {    


        const newArticle = document.createElement('article');
        newArticle.innerHTML = ``;
        newArticle.innerHTML = `
            <h2> ${element.title} </h2>

            <div> ${element.content} </div>
            <blockquote> 
              <div> posted by:  ${element.username} </div>
            </blockquote>
           `;

    mainblog.appendChild(newArticle);
    };

}

// TODO: Call the `renderBlogList` function
    renderBlogList();

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
    backbtn.addEventListener("click", () => redirectPage("index.html"));