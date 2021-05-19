const request = new XMLHttpRequest();
request.open("GET","https://restcountries.eu/rest/v2/all",true);
request.send();

let body = document.querySelector('body');
let imageContainer= document.createElement('div');
imageContainer.setAttribute('class','imageContainer')
body.appendChild(imageContainer);
request.onload=()=>{
    let data = JSON.parse(request.response);
    data.forEach((element,i) => {
         let card = document.createElement('div');
         card.setAttribute('class','card');
         card.style="width:18rem";
         imageContainer.appendChild(card);

       //!card heading
       let cardHeading = document.createElement('h4');
       cardHeading.setAttribute('class','hh4');
       cardHeading.innerHTML = element.name;
       card.appendChild(cardHeading);

       //!card image
        let cardImg = document.createElement('img');
        cardImg.setAttribute("src",element.flag);
        cardImg.setAttribute('class','card-img-top');
        cardImg.setAttribute("alt","card image cap");
        card.appendChild(cardImg);

        //!card body
        let cardBody = document.createElement('div');
        cardBody.setAttribute('class',"card-body");
        card.appendChild(cardBody);

        //TODO: 1st row
        let firstRow = document.createElement('div');
        cardBody.appendChild(firstRow);

        //!capitalLeft
          let capitalLeft = document.createElement('p');
          capitalLeft.setAttribute("class","capitalLeft");
          capitalLeft.innerHTML="Capital: ";
          firstRow.appendChild(capitalLeft);

          
          //!capitalRight
          let capitalRight = document.createElement('p');
          capitalRight.setAttribute("class","capitalRight")
          let capital = element.capital;
          capitalRight.innerHTML=capital;
          firstRow.appendChild(capitalRight);

        
          //TODO: 2nd row
          let secondRow = document.createElement('div');
          cardBody.appendChild(secondRow);

          //!regionLeft
          let regionLeft = document.createElement('p');
          regionLeft.setAttribute("class","regionLeft");
          regionLeft.innerHTML="Region: ";
          secondRow.appendChild(regionLeft);

           //!regionRight
           let regionRight = document.createElement('b');
           regionRight.setAttribute("class","regionRight")
           let region = element.region;
           regionRight.innerHTML=region;
           secondRow.appendChild(regionRight);

           //TODO: 3rd row
           let thirdRow = document.createElement('div');
          cardBody.appendChild(thirdRow);

          //!latLongLeft
          let latLongLeft = document.createElement('p');
          latLongLeft.setAttribute("class","latLongLeft");
          latLongLeft.innerHTML="Lat,Long: ";
          thirdRow.appendChild(latLongLeft);


          //!latLongRight
          let latLongRight = document.createElement('b');
          latLongRight.setAttribute("class","latLongRight")
          latLongRight.innerHTML=element.latlng[0]+","+element.latlng[1];
          thirdRow.appendChild(latLongRight);


          //TODO: 4th currency
          let currencyContainer = document.createElement('div');
          currencyContainer.setAttribute('class',"currencyContainer");
          cardBody.appendChild(currencyContainer);
           
          //!currency
          let currency = document.createElement('h5');
          currency.setAttribute("class","currency");
          currency.innerHTML="Currency";
          currencyContainer.appendChild(currency);
          //!table
        let table = document.createElement('table');
        table.setAttribute("class","table table-bordered border-primary table-responsive");
          currencyContainer.appendChild(table);
        //!table head
        let thead = document.createElement('thead');
        table.appendChild(thead);
        let tr = document.createElement('tr');
        thead.appendChild(tr);
        let th1 = document.createElement('th');
            th1.innerHTML="Code";
        let th2 = document.createElement('th');
            th2.innerHTML="Name";
        let th3 = document.createElement('th');
            th3.innerHTML="Symbol";
         tr.appendChild(th1);
         tr.appendChild(th2);
         tr.appendChild(th3);
         //!table body
        let tbody = document.createElement('tbody');
        table.appendChild(tbody);
       

        let currencyData = element.currencies;
        let currencyLength = currencyData.length;
        
        
           if(currencyData.length>0){
            for(let i=0; i<currencyData.length;i++){
              let dynamicTR = document.createElement('tr');
              tbody.appendChild(dynamicTR);
              //code
              let codeTd = document.createElement('td');
              dynamicTR.appendChild(codeTd);
              codeTd.innerHTML = currencyData[i].code;
              //name
              let nameTd = document.createElement('td');
              dynamicTR.appendChild(nameTd);
              nameTd.innerHTML = currencyData[i].name;
              //symbol
              let symbolTd = document.createElement('td');
              dynamicTR.appendChild(symbolTd);
              symbolTd.innerHTML = currencyData[i].symbol;
            }
                 
          }
          
        
        
    }); 
  }
   

