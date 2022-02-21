let listAll = document.querySelectorAll('.list')
listAll = [...listAll]
listAll.splice(-1,1);

for(let list of listAll){
    list.addEventListener('mouseover', (e) => {
        e.target.classList.add('on');
        for(let list of listAll){
            list.classList.add('over');
        }
    })
    list.addEventListener('mouseout', (e) => {
        e.target.classList.remove('on');
        for(let list of listAll){
            list.classList.remove('over');
        }
    })
}
