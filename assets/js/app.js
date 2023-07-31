
var getPhoto=document.getElementById("row");


var photos=[
    {iceName:"chocolate",price:300,imgpath:"https://plus.unsplash.com/premium_photo-1661371530699-4b3cd1d70da2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aWNlJTIwY3JlYW0lMjBjb25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {iceName:"venila",price:200,imgpath:"https://images.unsplash.com/photo-1580915411954-282cb1b0d780?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aWNlJTIwY3JlYW0lMjBjb25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {iceName:"blackcurent",price:400,imgpath:"https://images.unsplash.com/photo-1614014077943-840960ce6694?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGljZSUyMGNyZWFtJTIwY29uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
    {iceName:"venila2",price:1100,imgpath:"https://images.unsplash.com/photo-1549395156-e0c1fe6fc7a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aWNlJTIwY3JlYW0lMjBjb25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {iceName:"chocolate5",price:2200,imgpath:"https://upload.wikimedia.org/wikipedia/commons/7/70/Chocolate_%28blue_background%29.jpg"},
    {iceName:"venila2",price:1100,imgpath:"https://images.unsplash.com/photo-1549395156-e0c1fe6fc7a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aWNlJTIwY3JlYW0lMjBjb25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
];


result="";
photos.forEach(function(ele){
    console.log(ele);
    result+=`
           <div class='col-md-4'>  
                <div class="cakeimg"> 
                   <img src=${ele.imgpath}>
                </div>
                <div>
                   <span>${ele.price}</span>  
                </div>
           </div>
    `
})

getPhoto.innerHTML=result;
console.log(result);




