
function carregarPosts() {

    const article = document.querySelector("article")
    article.setAttribute("class", "row")


    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            // console.log(posts)
            posts.forEach(posts => {
                const section = document.createElement("section")
                section.setAttribute("class", "col-lg-6 p-lg-5 m-lg-0 p-5 m-2")

                const title = document.createElement("h4")
                title.style.textAlign = "center"

                const mensagem = document.createElement("p")
                mensagem.style.textAlign = "justify"

                title.innerHTML = posts.title;
                mensagem.innerHTML = posts.body;

                const button = document.createElement("button")
                button.setAttribute("class", "btn btn-info")
                button.setAttribute("onclick", "openComment(" + posts.id + ")")
                button.textContent = "Comentários"
                
                const div = document.createElement("div")
                div.setAttribute("class", "row")
                div.style.fontSize = "0.7rem"
                div.style.margin = "10px"
                div.style.display = "none"
                div.setAttribute("id", posts.id)


                section.appendChild(title)
                section.appendChild(mensagem)
                section.appendChild(button)
                section.appendChild(div)
                article.appendChild(section)
            });
        })

    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(comments => {
            // console.log(comments)
            comments.forEach(c => {
                const divHidden = document.getElementById(c.postId)
                
                const div = document.createElement("div")
                div.setAttribute("class", "row m-1 p-1")
                
                const email = document.createElement("p")
                email.setAttribute("class", "col-12")
                
                const comentario = document.createElement("p")
                comentario.setAttribute("class", "col-12")                
                
                email.innerHTML = c.email;
                comentario.innerHTML = c.body;
                
                div.appendChild(email)
                div.appendChild(comentario)
                divHidden.appendChild(div)
            });
        })
}
function openComment(id) {
    const div = document.getElementById(id)
    // console.log(div)
    if (div.style.display === "none") {
        div.style.display = "block";
      } else {
        div.style.display = "none";
      }
}