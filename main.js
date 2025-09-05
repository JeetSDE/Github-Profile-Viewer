let user = document.getElementById('userId');

document.querySelector('.btn1').addEventListener('click',() =>{
    let userName = user.value;
    fetchUser(userName);
})

async function fetchUser(userName){
    let response = await fetch(`https://api.github.com/users/${userName}`);
    let result = await response.json();
    document.getElementById('attach').innerHTML = `
    <div class="profileDetails">
                <img src=${result.avatar_url} alt="">

                <div class="aboutUs">
                    <h2>${result.name}</h2>
                    <p class="bio">${result.bio}</p>
                </div>

            </div>

            <div class="followerSection">

                <div class="followers">
                    <div class="similar">
                        <h2>Follower</h2>
                        <p>${result.followers}</p>
                    </div>
                    <div class="similar">
                        <h2>Following</h2>
                        <p>${result.following}</p>
                    </div>
                    <div class="similar">
                        <h2>Repos</h2>
                        <p>${result.public_repos}</p>
                    </div>
                </div>

                <div class="viewProfile">
                    <button class="btn2" onclick="window.open('https://github.com/${userName}', '_blank')">View Profile</button>
                </div>


            </div>`;
    
}



console.log(result);