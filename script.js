let rectangle = document.querySelector('.center .rectangle')
let playground = document.querySelector('.playground')
let AllLayers  = document.querySelector('.AllLayers')
let textBox = document.querySelector('.text-box')

let count = 0
let layerNum
rectangle.addEventListener('click',(i)=>{
    const rectAng = document.createElement('div')
    const rectLayerDiv = document.createElement('div')
    count++
    layerNum =0 +count;
    let color1 = Math.floor(Math.random()*256)
    let color2 = Math.floor(Math.random()*256)
    let color3 = Math.floor(Math.random()*256)
    
    // ELemetns Created
    rectAng.style.height = '100px'
    rectAng.style.width = '100px'
    rectAng.style.backgroundColor = `rgb(${color1},${color2},${color3})`
    
    rectLayerDiv.innerHTML = `<div class="layer flex justify-start items-center px-2 gap-1 font-semibold py-1">
    <i class="ri-rectangle-fill text-2xl text-[#686868]"></i><p>Reactangle ${layerNum}</p>
    </div>`
    
    // Append Elements
    playground.append(rectAng)
    AllLayers.append(rectLayerDiv)
})

textBox.addEventListener('click',()=>{
    count++
    layerNum =0 +count;
    const inputLayerDiv = document.createElement('div')
    const inputBox = document.createElement('input')
    inputBox.setAttribute.type = 'text'
    inputBox.style.backgroundColor = '#111111'
    inputBox.style.color = '#FFFFFF'
    
    // Append Element
    inputLayerDiv.innerHTML = `<div class="layer flex justify-start items-center px-2 gap-1 font-semibold py-1">
    <i class="ri-t-box-line text-2xl text-[#686868]"></i><p>Text Box ${layerNum}</p>
    </div>`
    playground.append(inputBox)
    AllLayers.append(inputLayerDiv)
})




