var pro_Det = {
  1:{src:"images/b (1).jpg",prize:1,value:5,name:"Drink 1"},
  2:{src:"images/b (2).jpg",prize:2,value:4,name:"Drink 2"},
  3:{src:"images/b (3).jpg",prize:3,value:1,name:"Drink 3"},
  4:{src:"images/b (4).jpg",prize:4,value:1,name:"Drink 4"},  
  5:{src:"images/b (5).jpg",prize:5,value:1,name:"Drink 5"},
  6:{src:"images/b (6).jpg",prize:6,value:1,name:"Drink 6"},
  7:{src:"images/b (7).jpg",prize:7,value:1,name:"Drink 7"},
  8:{src:"images/b (8).jpg",prize:8,value:1,name:"Drink 8"},
  9:{src:"images/b (9).jpg",prize:9,value:1,name:"Drink 9"},
  10:{src:"images/b (10).jpg",prize:10,value:1,name:"Drink 10"},
  11:{src:"images/b (11).jpg",prize:11,value:1,name:"Drink 11"},
  12:{src:"images/b (12).jpg",prize:12,value:1,name:"Drink 12"},
  13:{src:"images/b (13).jpg",prize:13,value:1,name:"Drink 13"},
  14:{src:"images/b (14).jpg",prize:14,value:1,name:"Drink 14"},  
  15:{src:"images/b (15).jpg",prize:15,value:1,name:"Drink 15"},
  16:{src:"images/b (16).jpg",prize:16,value:1,name:"Drink 16"},
  17:{src:"images/b (17).jpg",prize:17,value:1,name:"Drink 17"},
  18:{src:"images/b (18).jpg",prize:18,value:1,name:"Drink 18"},
  19:{src:"images/b (19).jpg",prize:19,value:1,name:"Drink 19"},
  20:{src:"images/b (20).jpg",prize:20,value:1,name:"Drink 20"},
  21:{src:"images/b (21).jpg",prize:21,value:1,name:"Drink 21"},
  22:{src:"images/b (22).jpg",prize:22,value:1,name:"Drink 22"},
  23:{src:"images/b (23).jpg",prize:23,value:1,name:"Drink 23"},
  24:{src:"images/b (24).jpg",prize:24,value:1,name:"Drink 24"},  
  25:{src:"images/b (25).jpg",prize:25,value:1,name:"Drink 25"},
  26:{src:"images/b (26).jpg",prize:26,value:1,name:"Drink 26"},
  27:{src:"images/b (27).jpg",prize:27,value:1,name:"Drink 27"},
  28:{src:"images/b (28).jpg",prize:28,value:1,name:"Drink 28"},
  29:{src:"images/b (29).jpg",prize:29,value:1,name:"Drink 29"},
  30:{src:"images/b (30).jpg",prize:30,value:1,name:"Drink 30"},
  31:{src:"images/b (31).jpg",prize:31,value:1,name:"Drink 31"},
  32:{src:"images/b (32).jpg",prize:32,value:1,name:"Drink 32"},
  33:{src:"images/b (33).jpg",prize:33,value:1,name:"Drink 33"},
  34:{src:"images/b (34).jpg",prize:34,value:1,name:"Drink 34"},  
  35:{src:"images/b (35).jpg",prize:35,value:1,name:"Drink 35"},
  36:{src:"images/b (36).jpg",prize:36,value:1,name:"Drink 36"},
  37:{src:"images/b (37).jpg",prize:37,value:1,name:"Drink 37"},
  38:{src:"images/b (38).jpg",prize:38,value:1,name:"Drink 38"},
  39:{src:"images/b (39).jpg",prize:39,value:1,name:"Drink 39"},
  30:{src:"images/b (30).jpg",prize:30,value:1,name:"Drink 30"}
};
  
  function days(x) {
    document.getElementById("d"+x).style.backgroundColor = "red";
  var choice = {
    1:["Mark","Otto","@mdo","Jacob","Thornton","@fat","Larry","the Bird","@twitter"],
    2:["Otto","Otto","Jacob","@mdo","@fat","Thornton","the Bird","Larry","@twitter"],
    3:["Mark","Otto","@mdo","Jacob","Thornton","@fat","Larry","the Bird","@twitter"],
    4:["Otto","Otto","Jacob","@mdo","@fat","Thornton","the Bird","Larry","@twitter"],
    5:["Mark","Otto","@mdo","Jacob","Thornton","@fat","Larry","the Bird","@twitter"],
    6:["Otto","Otto","Jacob","@mdo","@fat","Thornton","the Bird","Larry","@twitter"],
    7:["Mark","Otto","@mdo","Jacob","Thornton","@fat","Larry","the Bird","@twitter"],
   }

  temp = choice[x];
          var js = `<tr>
          <th scope="row">1</th>
          <td>${temp[0]}</td>
          <td>${temp[1]}</td>
          <td>${temp[2]}</td>
          </tr>
          <tr>
          <th scope="row">2</th>
          <td>${temp[3]}</td>
          <td>${temp[4]}</td>
          <td>${temp[5]}</td>
          </tr>
          <tr>
          <th scope="row">3</th>
          <td>${temp[6]}</td>
          <td>${temp[7]}</td>
          <td>${temp[8]}</td>
          </tr>`
  document.getElementById("Myone").innerHTML = js; 
     
  }
  
  function Show_product(start,end) {
 
      var js='';
  
  for(var i=start;i<=end;i++){
          var temp = pro_Det[i];
          var temp2 = temp.value;
      js += `<div class="c1 card mb-3" style="max-width: 450px; margin-left:120px;">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src="${temp.src}" class="card-img" alt="${temp.name}">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${temp.name}</h5>
          <p class="card-text">Prize of this $ ${temp.prize * 5}
           <button class="btn btn-light" id="cb1" onclick="Save_product(${i},${temp2})">Order now</button>
          </div>
        </div>
    </div>
    </div>`
  }
  document.getElementById("main_prorduct").innerHTML = js
  }
  
  
  function Save_product(id,value){
    
    var obj = localStorage.getItem("Order");
    if(obj==null){
      obj = {}
      obj[id]= value;
    }
    else{
      var obj = JSON.parse(obj);
      obj[id]= value;
    }
    
      obj =  JSON.stringify(obj);
      localStorage.setItem("Order", obj);
      myFav()
      
  }
  
  
  function myFav(){
      
    var myObj = localStorage.getItem("Order");
    var total=0 ,x=0,y=0, js='';
    if(myObj != null && myObj != "{}"){
      myObj = JSON.parse(myObj);
      Object.keys(myObj).forEach(key=>{
        var temp = pro_Det[key];
        total += (myObj[key]*temp.prize*5);
        js += `<div class="adding">
      <button id="b111"  onclick=ButtonOf(1,${key})>+</button>&nbsp;${myObj[key] }&nbsp;<button  id="b112" onclick=ButtonOf(-1,${key})>-</button>
       </div>
      <div class="nameord">
      ${key})${temp.name}
      </div>
      <div class="totalor">
      ${myObj[key]*temp.prize*5}
      </div>
    </div>`
});
     document.getElementById("Goh").innerHTML = js;
     document.getElementById("Prize").innerHTML = "Prize = +" + total;
     x = Math.round((total*.15)%100);
     document.getElementById("Discount").innerHTML = "Discount = -" + x;
     y = Math.round(total*.18);
     document.getElementById("GST").innerHTML = "GST(18%) = +" + y;
     document.getElementById("Yourf").innerHTML = "Total = " + (total-x+y+200); 
    }
    else{
      document.getElementById("Goh").innerHTML = "<h5>NO ORDER FOUNDS</h5>"; 
    }

  }
  


  function ButtonOf(params,id) {
    var obj = localStorage.getItem("Order");

    if(obj == null){
      obj = {}
      obj[id] = params;
    }
    else{
      var obj = JSON.parse(obj);
      obj[id] += params;
    }

    if(obj[id] <= 0){
      delete obj[id];
    }
    
      obj =  JSON.stringify(obj);
      localStorage.setItem("Order", obj);
      myFav()
  }

mybutton = document.getElementById("mybtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction(){


  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 || mybutton.style.display == "none")
  {
    mybutton.style.display = "block";
  }
  else{
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
  



