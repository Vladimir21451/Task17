function calculate_sum(){
  const parser = new DOMParser();
  
  const xmlString =
  '<list> ' +
    '<student>'+
     '<name lang="en">' +
       ' <first>Ivan</first>'+
        '<second>Ivanov</second>'+
      '</name>'+
      '<age>35</age>'+
      '<prof>teacher</prof>' +
    '</student>'+
    '<student>'+
      '<name lang="ru">'+
        '<first>Петр</first>'+
       '<second>Петров</second>'+
      '</name>'+
      '<age>58</age>'+
      '<prof>driver</prof>'+
    '</student>'+
  '</list> ';

   // console.log(xmlString);
   const xmlDOM = parser.parseFromString(xmlString, "text/xml");
  // console.log(xmlDOM.documentElement.nodeName == "parsererror" ? "error while parsing" : xmlDOM.documentElement.nodeName);
   const listNode = xmlDOM.querySelector("list");
   var studentNodes = listNode.querySelectorAll('student');
  studentNodes = Array.from(studentNodes);
  //const studentNodes = xmlDOM.querySelectorAll("student");
   //const list =[];
   alert(studentNodes.length);
   const list =[];
   studentNodes.forEach(studentNode => {

    const nameNode = studentNode.querySelector("name");
    const langAttr = nameNode.getAttribute('lang');
    const firstNode = studentNode.querySelector("first");
    const secondNode = studentNode.querySelector("second");
    const ageNode = studentNode.querySelector("age");
    const profNode = studentNode.querySelector("prof");
    alert(firstNode.textContent);
    list.push({
      prof: profNode.textContent,
      first: firstNode.textContent,
      second: secondNode.textContent,
      lang: langAttr,
      age: Number(ageNode.textContent)
    });
  });
   
  const result = {
    list: list
  };
  console.log('result', result); 
  alert('Смотрите консоль');
}