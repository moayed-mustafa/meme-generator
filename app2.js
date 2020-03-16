// elements:
const inputs = document.querySelector('.inputs');
const urlInput = document.querySelector('#url-input');
const aboveText = document.querySelector('#above-text');
const belowText = document.querySelector('#below-text');
const submitButton = document.querySelector('#submit-btn');
const memes = document.querySelector('.memes');
let ImgDiv=document.createElement('div');
let id = 1;


// class handler
class Handler {
    constructor() {

    }
    createMeme(e) {
        e.preventDefault();
        if (urlInput.value !== '' && aboveText.value !== '' && belowText.value !== '') {
            // add image
            let ImgDiv = document.createElement('div');
            let src = urlInput.value;
            console.log(src.slice(0, 4));
            if (src.slice(0, 4) === 'http') {
                ImgDiv.classList.add('img-div');
                ImgDiv.innerHTML = `
                <img src="${src}" alt="">
                <button id = '${id}'
                class = 'btn btn-danger btn-block ' onClick = makeMemes.deleteImage(this.id)
                '>Delete</button>
                `

                memes.append(ImgDiv);
                id++;
            }

            // add text above
            let aboveTextDiv = document.createElement('div')
            aboveTextDiv.classList.add('div-above');
            // console.log(aboveTextDiv)
            aboveTextDiv.innerText = aboveText.value
            ImgDiv.append(aboveTextDiv);

            // addTextBelow
            let belowTextDiv = document.createElement('div')
            belowTextDiv.classList.add('div-below');
            console.log(belowTextDiv.value)
            belowTextDiv.innerText = belowText.value
            ImgDiv.append(belowTextDiv);
        }
        else { alert('must enter all values man!'); }

    }

    deleteImage(id){
    let deleteBtn = document.getElementById(id);
    deleteBtn.parentElement.remove();
    }
}

const makeMemes = new Handler();
// event Listener:-
submitButton.addEventListener('click', makeMemes.createMeme)

submitButton.addEventListener('click', (e) => {
    inputs.reset();
})
window.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        makeMemes.createMeme(e)
    }

})