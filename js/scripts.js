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

    	// let src = content.indexOf('src=')
    	// console.log(`Index of src = ${src}`)

    	let img = content.substr(content.indexOf('src=')+5, 200)
    	console.log(img)

    	// let endImg = img.indexOf('"')
    	// console.log(endImg)

    	let imageUrl = img.substr(0, img.indexOf('"'))
    	console.log(`Image URL = ${imageUrl}`)

    	html += `${post.title}
    	Published Date: ${post.published}<br>
    	<a href="${post.url}"><img src=${imageUrl}></a><br><br>`

    })

    document.getElementById('posts').innerHTML = html
})
