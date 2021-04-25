function isnumber(a) {
   const strJSON = '{"name":"Anton","age":36,"skills":["Javascript","HTML","CSS"],"salary":80000}';
  // console.log(strJSON);
   const data =JSON.parse(strJSON);
   console.log(data);
   //Преобразование объекта JSON в строку JS
   var strJson =JSON.stringify(data);
   console.log(strJson);
}