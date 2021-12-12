document.addEventListener('DOMContentLoaded', () => {
    const item = document.querySelector('.item'),
          placeholders = document.querySelectorAll('.placeholder');


    item.addEventListener('dragstart', dragstart);
    item.addEventListener('dragend', dragend);

    for(let placeholder of placeholders){
        placeholder.addEventListener('dragover', dragover);
        placeholder.addEventListener('dragenter', dragenter);
        placeholder.addEventListener('dragleave', dragleave);
        placeholder.addEventListener('drop', drop);
    }

    function dragstart(event){
        event.target.classList.add('hold');
        setTimeout(() => event.target.classList.add('hide', 0));
    }
    function dragend(event){
        event.target.classList.remove('hold');
        event.target.classList.remove('hide');
    }

    function dragover(event){
        event.preventDefault();
    }
    function dragenter(event){
        event.target.classList.add('hovered');
    }
    function dragleave(event){
        event.target.classList.remove('hovered');
    }
    function drop(event){
        event.target.classList.remove('hovered');   
        event.target.append(item);
    }

    // модалка
    
    document.querySelector('#btn').addEventListener('click', () => {
        const myTarget = document.querySelector('#target').value;
        console.log(myTarget);
        if(myTarget != ""){
            item.textContent = myTarget;
            document.querySelector('.overlay').style.display = "none";
        } else {
            document.querySelector('.error').textContent = "Ставь цель :)";
            document.querySelector('.error').style.cssText = "border: 2px solid red";
        }
    })
});