function AnimeImages(){
    
this.getDOM = ele => document.querySelector(ele)

this.getHeading = ele => {
  let heading = document.createElement('h2')
  heading.innerText = ele.filename
  heading = this.getDOM('div').appendChild(heading)
  return heading
}

this.getImage = ele => {
  let videoTag = document.createElement('img')
  videoTag.src = ele.image
  videoTag = this.getDOM('div').appendChild(videoTag)
  return videoTag
}

  this.addImage = _ => {
    fetch(`https://api.trace.moe/search?url=${inputValue}`)
    .then((e) => e.json())
    .then(data=>{
    data.result.forEach(ele=>{
      this.getHeading(ele)
      this.getImage(ele)
    })
      
  })
  };

let inputValue = this.getDOM('input').value.trim()

Object.defineProperty(this,'inputValue',{get:function(){
return inputValue
}
})
}

let anime = new AnimeImages()

let animeW =_=>{
let anime = new AnimeImages()
return anime.addImage()
}


anime.getDOM('button').addEventListener('click',animeW)





//test url https://manga.tokyo/wp-content/uploads/2017/06/9b727f2de4eed79a7bdd416552351063.jpg