const hexObjectArray= [
    
    
    {hex: {value:"#F55A5A"}},
    
    {hex: {value:"#2B283A"}},
    
    {hex: {value:"#FBF3AB"}},
    
    {hex: {value:"#AAD1B6"}},
    
    {hex: {value:"#A626D3"}},
    

    
]

document.getElementById("grid").addEventListener("click",async e=>await navigator.clipboard.writeText(e.target.dataset.color) )

document.getElementById("get").addEventListener("click",e=>  {
    e.preventDefault()
    let myColor= document.getElementById("myColor").value 
    let colorScheme= document.getElementById("colorScheme").value

    fetch(`https://www.thecolorapi.com/scheme?hex=${myColor.slice(1,7)}&mode=${colorScheme}&count=5`)
    .then(res=> res.json())

    .then(myData=>setHtml(myData.colors.slice(0,6))      )
        } )


const setHtml= data=>{

     document.getElementById("grid").innerHTML= 
     data.map(item => 
     `<div class="gridItem" style="background-color:${item.hex.value}" data-color="${item.hex.value}"> </div>
    <div class="colorName" "data-color="${item.hex.value}">${item.hex.value}</div> `).join(" ") +` <h4 id="copy">Click on palette or hex value to copy!</h4>`

}

setHtml(hexObjectArray)
