const btn = document.getElementById("confirm");
const slide = document.getElementById("slider");

btn.addEventListener("click", () => {
    createCanvas(slide.value);
});



function createCanvas(slide){
    let items = slide**2
    let totalWidth = 960;
    let squareSize = totalWidth/slide;
    const canvas = document.getElementById("canvas");
    canvas.innerHTML = "";

    for(let x=0; x < items; x++){
        let square = document.createElement('div');
        
        square.classList.add("grid-square");
        square.style.width = squareSize + "px";
        square.style.height = squareSize + "px";
        square.style.backgroundColor = "rgb(255, 244, 233)";
        canvas.appendChild(square);
    }
    mouseOverColoring();

}

function mouseOverColoring(){
    let squares = document.querySelectorAll(".grid-square");
    
    squares.forEach(square => {
        square.addEventListener("mouseover", function(event){
            this.style.backgroundColor = "";
        });
    });
}