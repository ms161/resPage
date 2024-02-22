//FOR FILTERS
//FOR FILTERS
const buttons=document.querySelectorAll('#menu li')
console.log(buttons)
buttons.forEach((e)=>{
    
    e.addEventListener('click',()=>{
       
    
        if(e.classList.contains('all')){
          
           let z= document.querySelectorAll('.items-img')
           z.forEach((item)=>{
          console.log(item)
          item.style.display='block'
           
         })
        }

        else if(e.classList.contains('cakes')){
            let z= document.querySelectorAll('.items-img')
            z.forEach((item)=>{
                if(item.classList.contains('cake')){
                    item.style.display=''
                }
                else{
                    item.style.display='none'
                }
            })

        }

        else if(e.classList.contains('cupcakes')){
            let z= document.querySelectorAll('.items-img')
            z.forEach((item)=>{
                if(item.classList.contains('cupcake')){
                    item.style.display=''
                }
                else{
                    item.style.display='none'
                }

            })
        }
        else if(e.classList.contains('sweets')){
            let z= document.querySelectorAll('.items-img')
            z.forEach((item)=>{
                if(item.classList.contains('sweet')){
                    item.style.display=''
                }
                else{
                    item.style.display='none'
                }

            })
        }
        else if(e.classList.contains('doughnuts')){
            let z= document.querySelectorAll('.items-img')
            z.forEach((item)=>{
                if(item.classList.contains('donut')){
                    item.style.display=''
                }
                else{
                    item.style.display='none'
                }

            })
        }
        
    })
})


// FOR SEARCHING////////////////////////////////////////////////////////////////////
// FOR SEARCHING////////////////////////////////////////////////////////////////////
// FOR SEARCHING////////////////////////////////////////////////////////////////////
// FOR SEARCHING////////////////////////////////////////////////////////////////////
document.querySelector('#search button').addEventListener('click', function call(s){
    let z = document.querySelector('#search input').value.toUpperCase()
    console.log(z)
    // console.log(z)
    let q = document.querySelectorAll('.items-img')
    for (let i = 0; i < q.length; i++) {
        let a = document.querySelectorAll('.items-img p')[i].innerHTML
        console.log(a)
        console.log(a.toUpperCase().indexOf(z))


        if (a.toUpperCase().includes(z)) {
            document.querySelectorAll('.items-img')[i].style.display = '';
            

        }
        else {
            document.querySelectorAll('.items-img')[i].style.display = 'none'
        }


    }

    //   console.log(a)
})


//Modal /////////////////////////////////////////////////////////////////////////////
//Modal /////////////////////////////////////////////////////////////////////////////
//Modal /////////////////////////////////////////////////////////////////////////////
//Modal /////////////////////////////////////////////////////////////////////////////

// console.log(image)
for(let i=0;i<=11;i++){
  
  
    document.querySelectorAll('.items-img')[i].addEventListener('click',()=>{
        console.log('ok')
       
        // console.log( document.querySelectorAll('.items-img img')[i])

       let y= document.querySelector('#clicked img').src
       console.log(y)
        
            console.log( document.querySelectorAll('.items-img img')[i].src)
            document.querySelector('#clicked img').src=document.querySelectorAll('.items-img img')[i].src
            console.log(y)
        
        // document.getElementById('clicked').style.display='none'
        document.getElementById('clicked').classList.toggle('clicked')
        document.getElementById('close').innerHTML='X'
        document.getElementById('right').innerHTML='>'
        document.getElementById('left').innerHTML='<'

       
       
    
        
      document.getElementById('close').addEventListener('click',()=>{
        document.getElementById('clicked').classList.remove('clicked')
        document.getElementById('close').innerHTML=''
        document.getElementById('right').innerHTML=''
        document.getElementById('left').innerHTML=''
        
      })

        
      })
    

}

/// Setting Left and right button/////////////////////////////////////////////
/// Setting Left and right button/////////////////////////////////////////////
/// Setting Left and right button/////////////////////////////////////////////
/// Setting Left and right button/////////////////////////////////////////////
let count=0
document.getElementById('right').addEventListener('click',()=>{
    count=count+1
    if(count>=12){
        count=count-11
    }
        document.querySelector('#clicked img').src=document.querySelectorAll('.items-img img')[count].src
    console.log(count)
   

})
document.getElementById('left').addEventListener('click',()=>{
    count=count-1
    if(count<0){
        count=count+12
    }
        document.querySelector('#clicked img').src=document.querySelectorAll('.items-img img')[count].src
    console.log(count)
   

})





