fetch('https://www.googleapis.com/blogger/v3/blogs/1786749668754208198?key=AIzaSyD_bF2yMw8Z6Ldoj3rfiHIWxLs3V14Nmls')
.then((data) => data.json())
.then((res) => {
    console.log(res)
})


fetch('https://www.googleapis.com/blogger/v3/blogs/1786749668754208198/posts?key=AIzaSyD_bF2yMw8Z6Ldoj3rfiHIWxLs3V14Nmls')
.then((data) => data.json())
.then((res) => {
    console.log(res.items)

    let html = ``

    res.items.forEach((post) => {

    	let content = post.content
    	console.log(content.slice(0,500))

    	let img = content.substr(content.indexOf('src=')+5, 200)
    	console.log(img)


    	let imageUrl = img.substr(0, img.indexOf('"'))
    	console.log(`Image URL = ${imageUrl}`)

    	html += `<div class="newPosts">${post.title}
    	Published Date: ${post.published}<br>
    	<a href="${post.url}"><img src=${imageUrl}></a><br><br></div>`

    })

    document.getElementById('posts').innerHTML = html
})

// N A V I G A T I O N -------------------->

document.getElementById('eat').addEventListener('mouseover', () => {
	document.getElementById('eatNav').style.display = "block"
})
document.getElementById('eat').addEventListener('mouseout', () => {
	document.getElementById('eatNav').style.display = "none"
})
document.getElementById('eatNav').addEventListener('mouseout', () => {
	document.getElementById('eatNav').style.display = "none"
})

document.getElementById('make').addEventListener('mouseover', () => {
	document.getElementById('makeNav').style.display = "block"
})
document.getElementById('make').addEventListener('mouseout', () => {
	document.getElementById('makeNav').style.display = "none"
})
document.getElementById('makeNav').addEventListener('mouseout', () => {
	document.getElementById('makeNav').style.display = "none"
})

document.getElementById('play').addEventListener('mouseover', () => {
	document.getElementById('playNav').style.display = "block"
})
document.getElementById('play').addEventListener('mouseout', () => {
	document.getElementById('playNav').style.display = "none"
})
document.getElementById('playNav').addEventListener('mouseout', () => {
	document.getElementById('playNav').style.display = "none"
})

document.getElementById('code').addEventListener('mouseover', () => {
	document.getElementById('codeNav').style.display = "block"
})
document.getElementById('code').addEventListener('mouseout', () => {
	document.getElementById('codeNav').style.display = "none"
})
document.getElementById('codeNav').addEventListener('mouseout', () => {
	document.getElementById('codeNav').style.display = "none"
})