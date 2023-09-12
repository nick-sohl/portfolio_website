const btn = document.querySelector(".btn")
const usersEl = document.querySelector(".users")

btn.addEventListener("click", loadUsers)

function loadUsers() {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", "https://api.github.com/users", true)
    xhr.onload = function() {
        if (this.status == 200) {
            const users = JSON.parse(this.responseText)
            let output = ""
            for (let i in users) {
                output += `
                <div class="user">
                <img src="${users[i].avatar_url}" alt="">
                <ul>
                    <li>ID: ${users[i].id}</li>
                    <li>Login: ${users[i].login}</li>
                    <li>URL: ${users[i].url}</li>
                </ul>
                </div>
                `

                usersEl.innerHTML = output
            }
        } else if (this.status = 404) {
            usersEl.innerHTML = "Not Found"
        }
    }
    xhr.send()
}