let apiProductApi = new TempApi.ProductApi();import TempApi from '../src/index';document.getElementById('iardw').onclick = (event) => {
    event.preventDefault();
    let productId = window.location.pathname.replace('/Home/','');
      if(productId === '/Home' || productId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("iardw")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            productId = value._id;
            parentId = key;
          }
        });
      }
    apiProductApi.deleteproduct( productId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/Home' ;}}});};document.getElementById('i53icu').onclick = (event) => {
    event.preventDefault();
    let productId = window.location.pathname.replace('/Home/','');
      if(productId === '/Home' || productId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("i53icu")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            productId = value._id;
            parentId = key;
          }
        });
      }
    apiProductApi.deleteproduct( productId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/Home' ;}}});};document.getElementById('ii9wdc').onclick = (event) => {
    event.preventDefault();
    let productId = window.location.pathname.replace('/Home/','');
      if(productId === '/Home' || productId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("ii9wdc")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            productId = value._id;
            parentId = key;
          }
        });
      }
    apiProductApi.deleteproduct( productId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/Home' ;}}});};document.getElementById('iklx8g').onclick = (event) => {
    event.preventDefault();
    let productId = window.location.pathname.replace('/Home/','');
      if(productId === '/Home' || productId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("iklx8g")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            productId = value._id;
            parentId = key;
          }
        });
      }
    apiProductApi.deleteproduct( productId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/Home' ;}}});};document.getElementById('iepgdn').onclick = (event) => {
    event.preventDefault();
    let productId = window.location.pathname.replace('/Home/','');
      if(productId === '/Home' || productId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("iepgdn")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            productId = value._id;
            parentId = key;
          }
        });
      }
    apiProductApi.deleteproduct( productId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/Home' ;}}});};document.getElementById('iqn4dm').onclick = (event) => {
    event.preventDefault();
    let productId = window.location.pathname.replace('/Home/','');
      if(productId === '/Home' || productId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("iqn4dm")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            productId = value._id;
            parentId = key;
          }
        });
      }
    apiProductApi.deleteproduct( productId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/Home' ;}}});};document.getElementById('i4jpyx').onclick = (event) => {
    event.preventDefault();
    let productId = window.location.pathname.replace('/Home/','');
      if(productId === '/Home' || productId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("i4jpyx")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            productId = value._id;
            parentId = key;
          }
        });
      }
    apiProductApi.deleteproduct( productId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/Home' ;}}});};document.getElementById('ig22hp').onclick = (event) => {
    event.preventDefault();
    let productId = window.location.pathname.replace('/Home/','');
      if(productId === '/Home' || productId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("ig22hp")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            productId = value._id;
            parentId = key;
          }
        });
      }
    apiProductApi.deleteproduct( productId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/Home' ;}}});};document.getElementById('i43pj').onclick = (event) => {
    event.preventDefault();
    let productId = window.location.pathname.replace('/Home/','');
      if(productId === '/Home' || productId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("i43pj")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            productId = value._id;
            parentId = key;
          }
        });
      }
    apiProductApi.deleteproduct( productId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/Home' ;}}});};document.getElementById('ivkd5').onclick = (event) => {
    event.preventDefault();
    let productId = window.location.pathname.replace('/Home/','');
      if(productId === '/Home' || productId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("ivkd5")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            productId = value._id;
            parentId = key;
          }
        });
      }
    apiProductApi.deleteproduct( productId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/Home' ;}}});};document.getElementById('iq0iq').onclick = (event) => {
    event.preventDefault();
    let productId = window.location.pathname.replace('/Home/','');
      if(productId === '/Home' || productId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("iq0iq")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            productId = value._id;
            parentId = key;
          }
        });
      }
    apiProductApi.deleteproduct( productId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/Home' ;}}});};document.getElementById('ivq65').onclick = (event) => {
    event.preventDefault();
    let productId = window.location.pathname.replace('/Home/','');
      if(productId === '/Home' || productId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("ivq65")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            productId = value._id;
            parentId = key;
          }
        });
      }
    apiProductApi.deleteproduct( productId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/Home' ;}}});};window.onload = () => {apiProductApi.getAllproduct((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("ipnya").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'pimage']");
if(insideSubDataElement !== null && data[data.length -i -1].pimage !== undefined){
  insideSubDataElement.src = data[data.length -i -1].pimage.data;
  insideSubDataElement.name = data[data.length -i -1].pimage.name;
}
else if(subDataElements[i].getAttribute('annotationname') === 'pimage' && data[data.length -i -1].pimage !== undefined){
  subDataElements[i].src = data[data.length -i -1].pimage.data;
  subDataElements[i].name = data[data.length -i -1].pimage.name;
}
 } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'ptitle']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].ptitle;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'ptitle'){
        subDataElements[i].textContent = data[data.length -i -1].ptitle;
        
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      
    });

    window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};