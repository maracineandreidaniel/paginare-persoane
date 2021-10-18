let createCard=(obj)=>{
    let sect=document.createElement('section');
    sect.className="student";
    let img=document.createElement('img');
    img.src=obj.picture.thumbnail;
    let nume=document.createElement('p');
    nume.className="nume";
    nume.innerText=`${obj.name.first} ${obj.name.last}`;
    let email=document.createElement('p');
    email.className="email";
    email.innerText=obj.email;
    let hr=document.createElement('hr');
    let joined=document.createElement('p');
    joined.innerText=obj.registered.date;
    sect.appendChild(img);
    sect.appendChild(nume);
    sect.appendChild(email);
    sect.appendChild(hr);
    sect.appendChild(joined);
    return sect;
};


let attatchCards=(arr)=>{
    let main=document.querySelector('main');
   main.innerHTML="";
    for(let i=0;i<arr.length;i++)
        main.appendChild(createCard(arr[i]));
};


let attatchCardsButton=(width ,numberOfButton,arr)=>{


        if(width<720){
             attatchCards(carduriPerPagina(3,arr,numberOfButton));
        }
        else if(width<920){
            attatchCards(carduriPerPagina(9,arr,numberOfButton));
        }
        else {
            attatchCards(carduriPerPagina(12,arr,numberOfButton));
        }
};



let carduriPerPagina=(nrCarduri, carduri,nrPagina)=>{
    let sv=[];
    for(let i=(nrPagina-1)*nrCarduri;i<=(nrPagina*nrCarduri)-1;i++)
        sv.push(carduri[i]);
    return sv;
};



let genereazaButoane=(nrButoane)=>{
    let paginates=document.querySelector('.paginates');
    for(let i=1;i<=nrButoane;i++){
        let buton=document.createElement('a');
        buton.href="#";
        buton.innerText=i;
        paginates.appendChild(buton);
    }
};


