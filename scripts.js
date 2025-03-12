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
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            let currentOpacity = parseFloat(this.style.opacity) || 0.1;

            if(currentOpacity < 1){
                currentOpacity += 0.1;
            }

            this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            this.style.opacity = currentOpacity.toString();

        });
    });
}