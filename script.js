const cards = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.dropzone');

const dragstart = (e) => {
    // console.log('Cat');
    dropzones.forEach((dropzone) => dropzone.classList.add('highlight'))
    e.target.classList.add('is-dragging')
}

const drag = (e) => {
    // console.log('Is dragging');
}

const dragend = (e) => {
    // console.log('Stop dragging');
    dropzones.forEach((dropzone) => dropzone.classList.remove('highlight'))
    e.target.classList.remove('is-dragging')
}

const dragenter = (e) => {
    // console.log('Enter in dropzone');
}

const dragover = (e) => {
    // console.log('Im in dropzone');
    e.target.classList.add('is-drag-enter');
    const cardBeingDragged = document.querySelector('.is-dragging')
    e.target.appendChild(cardBeingDragged)

}

const dragleave = (e) => {
    e.target.classList.remove('is-drag-enter')
}

const drop = (e) => {
    // console.log('DROP!!!')
}

cards.forEach((card) => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
})

dropzones.forEach((dropzone) => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
})

