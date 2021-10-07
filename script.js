let show = document.getElementById("result_show");
let delet = document.getElementById("result_delet");
let code = document.getElementById("write_codes");
let page = document.getElementById("result_page");
let html = document.getElementById("html");
html.onclick = ()=>{
    code.value = 
    "<html>"+
    `
    `+
   "<head>"+"</head>"+
    `
    `+"<style>"+`
    `+
    `
    `+"</style>"+
    `
    `+"<body>"+`
    `+`
    ` +   `
    `+"</boby>"+
    `
    `+
"</html>";
}
show.onclick = ()=>{
    page.innerHTML = code.value;
    localStorage.setItem("codes" , code.value )
}
delet.onclick = ()=>{
    page.innerHTML = ""
}
onload = ()=>{
    code.value = localStorage.getItem("codes")
}