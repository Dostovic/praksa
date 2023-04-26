const span = [7];
const item = [7];

for(let i = 1; i <= 23; i++)
{
    span[i] = document.getElementById("span" + i);
    item[i] = document.getElementById("item" + i);

    item[i].onclick = function() 
    {
        if(span[i].style.display === "none")
        {
            span[i].style.display = "inline";
        }
        else {
            span[i].style.display = "none";
        }
        list.style.maxHeight = list.scrollHeight + "px";
    }
}