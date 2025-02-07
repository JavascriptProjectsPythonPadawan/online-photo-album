// const referenceElement = document.querySelector('#photosbuttondiv');
// const absoluteElement = document.querySelector('#yearlistcontainer');

// const referenceRect = referenceElement.getBoundingClientRect();

// absoluteElement.style.top = `${referenceRect.top}px`;
// absoluteElement.style.left = `${referenceRect.left}px`

const photosButton = document.querySelector('#photosbutton');
const yearListContainer = document.querySelector('#yearlistcontainer');
const allYearButtons = document.querySelectorAll('#yearlistcontainer button');



const showAllYearButtons = () => {
    yearListContainer.classList.remove('hide');
    photosButton.classList.add('hide');
};

const hideYearsShowPhotosButton = () => {
    photosButton.classList.remove('hide');
    yearListContainer.classList.add('hide');
}

photosButton.addEventListener('click', showAllYearButtons)

for (let button of allYearButtons) {
    button.addEventListener('click', hideYearsShowPhotosButton)
}
