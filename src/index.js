document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('form');
  console.log(form);
  form.addEventListener('submit', function(event){
  event.preventDefault();
  let description = document.getElementById("new-task-description").value;

  let div = document.getElementById("list");
  let p = document.createElement("p")
  div.append(p)
  p.innerText = description
  
  console.log(div);
})

});
