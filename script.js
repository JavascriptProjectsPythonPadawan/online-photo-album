const beforeusPics = [
    "https://drive.google.com/file/d/19EpInRdwlAR8qFw5iJyoss3lSnWFu0AI/view?usp=drive_link",
    "https://drive.google.com/file/d/1fknlS6VTFR35VxkO6DtK11hFqt-T5TWO/view?usp=drive_link",
    "https://drive.google.com/file/d/1XCBRGoQofab5LMCctLDmM-9bXPh6HA9Q/view?usp=drive_link",
    "https://drive.google.com/file/d/1TeBVFnYpFe_uU1gd0Z0_Z5bVTGiH0zvB/view?usp=drive_link",
    "https://drive.google.com/file/d/1QzJJ720PTilMbhYyv-xFoNJTRJWV8vPW/view?usp=drive_link",
    "https://drive.google.com/file/d/1G6IxvlP4-s-2O82FDO_d4vpNClfPbprr/view?usp=drive_link",
    "https://drive.google.com/file/d/1fob0kJ3017OyjjpI0WXFcxtFYz9sUtlI/view?usp=drive_link",
    "https://drive.google.com/file/d/1YaDYuXpcWVTqVfgbTnvNdUq-I9oQU5Ou/view?usp=drive_link",
    "https://drive.google.com/file/d/1RUbVOvO1mr5kfs1e1cIaRlN6V91Ha-T6/view?usp=drive_link",
    "https://drive.google.com/file/d/1r2F6sJYQvWaxTcdYv4cADzk__Kagn6Bb/view?usp=drive_link",
    "https://drive.google.com/file/d/1aIovdEhUh82epk7uI5AahVyC_Myg8f90/view?usp=drive_link",
    "https://drive.google.com/file/d/1OU7lpWHLplGLGufPgNtF0mCrMpxi0qwP/view?usp=drive_link",
    "https://drive.google.com/file/d/1zKdpeOIh3LgdDaLljHyp5e4vdgdactPf/view?usp=drive_link",
    "https://drive.google.com/file/d/1Vj3zbwlNX0tmaiNmCfmqk5goLAojIgoE/view?usp=drive_link",
    "https://drive.google.com/file/d/1iqU1WP1zwgYX224p6F8oVSxMar6onrUG/view?usp=drive_link",
];

const year2015Pics = [
    "https://drive.google.com/file/d/1AVEyHd2BkDPr2FRBQOuJ_PHhFJtIlhKD/view?usp=drive_link",
    "https://drive.google.com/file/d/13q_bIPSHePYKqiorW2WYqwtenX8Tea3d/view?usp=drive_link",
    "https://drive.google.com/file/d/1lMgopQYbj1o1ECEatZA3unV9MQZUMFYo/view?usp=drive_link",
    "https://drive.google.com/file/d/1Cpo3wM1RoCFEBAsDfnl9eY_SNHcw9SLh/view?usp=drive_link",
    "https://drive.google.com/file/d/1Gg0NDrVuBXoETUrJQyng_8bJjccn7rV8/view?usp=drive_link",
    "https://drive.google.com/file/d/1DMPehNeKezcVuMbyDMkswJmK8cUeLRXu/view?usp=drive_link",
    "https://drive.google.com/file/d/1UbKqLMS7wcjrJdHgEaMSptYar8xkRpsj/view?usp=drive_link",
    "https://drive.google.com/file/d/1f8PbTgjAE7i6LxEaM9J4jZP4GBjhhgbX/view?usp=drive_link",
    "https://drive.google.com/file/d/1vtr6bNMbeAx94WFmUfWZnxD6n29IZgWp/view?usp=drive_link",
    "https://drive.google.com/file/d/1dwaaqiGUk-Zm_nVJ6HItrKPuj1O3YoWs/view?usp=drive_link",
    "https://drive.google.com/file/d/1u3a9diA-SrB-zzIxUA2qH7x69PrWpNYd/view?usp=drive_link",
    "https://drive.google.com/file/d/1ggF7Q_tjotTzvFysGeZVWH1-j2o2LiK4/view?usp=drive_link",
];

const yearbeforeusButton = document.querySelector('#yearbeforeus');
const year2015Button = document.querySelector('#year2015');
const year2016Button = document.querySelector('#year2016');
const year2017Button = document.querySelector('#year2017');
const year2018Button = document.querySelector('#year2018');
const year2019Button = document.querySelector('#year2019');
const year2020Button = document.querySelector('#year2020');
const year2021Button = document.querySelector('#year2021');
const year2022Button = document.querySelector('#year2022');
const year2023Button = document.querySelector('#year2023');
const year2024Button = document.querySelector('#year2024');
const year2025Button = document.querySelector('#year2025');
const yearhomeButton = document.querySelector('#yearhome');
const photosButton = document.querySelector('#photosbutton');
const yearListContainer = document.querySelector('#yearlistcontainer');
const allYearButtons = document.querySelectorAll('#yearlistcontainer button');
const photosContainer = document.querySelector('#photoscontainer');
const backgroundPic = document.querySelector('#backgroundpic');

const showAllYearButtons = () => {
    yearListContainer.classList.remove('hide');
    photosButton.classList.add('hide');
};

const hideYearsShowPhotosButton = () => {
    photosButton.classList.remove('hide');
    yearListContainer.classList.add('hide');
    photosButton.style.opacity = '0';
    photosButton.style.animation = 'fadeIn 1s ease-in-out forwards';
};

yearhomeButton.addEventListener('click', hideYearsShowPhotosButton);
photosButton.addEventListener('click', showAllYearButtons);
photosButton.addEventListener('click', () => { photosContainer.innerHTML = '' });
photosButton.addEventListener('click', () => setBackgroundURL("img/church1.jpg"));
yearbeforeusButton.addEventListener('click', () => { photosContainer.innerHTML = '' });
yearbeforeusButton.addEventListener('click', () => insertPicsToContainer(beforeusPics));
yearbeforeusButton.addEventListener('click', () => setBackgroundURL("img/church2.jpg"));
year2015Button.addEventListener('click', () => { photosContainer.innerHTML = '' });
year2015Button.addEventListener('click', () => insertPicsToContainer(year2015Pics));
year2015Button.addEventListener('click', () => setBackgroundURL("img/church3.jpg"));


const setBackgroundURL = (imageLink) => {
    const body = document.querySelector('body');
    body.style.backgroundImage = '';
    backgroundPic.src = imageLink;
    backgroundPic.classList.remove('backgroundpic');
    backgroundPic.classList.remove('backgroundimage');
    backgroundPic.classList.add('backgroundpic');
};

const getFinalImageLinks = (initialLinks) => {
    const tempImageLinks = [];
    const linkInsideNumbers = initialLinks.map(str => str.slice(32, 65));
    for (let i = 0; i < initialLinks.length; i++) {
        tempImageLinks.push(`https://drive.google.com/thumbnail?id=${linkInsideNumbers[i]}&sz=s4000`)
    };
    return tempImageLinks;
};

const insertPicsToContainer = (initialLinks) => {
    const finalImageLinks = getFinalImageLinks(initialLinks);
    for (let i = 0; i < initialLinks.length; i++) {
        const picAndNumberContainer = document.createElement('div');
        const picNumber = document.createElement('p');
        picNumber.textContent = `${i + 1}`;
        picNumber.classList.add('picnumber');
        const imagePic = document.createElement('img');
        imagePic.src = finalImageLinks[i];
        picAndNumberContainer.appendChild(picNumber);
        picAndNumberContainer.appendChild(imagePic);
        imagePic.style.animationDelay = `${i * 0.5}s`;
        picNumber.style.animationDelay = `${i * 0.5}s`;
        photosContainer.appendChild(picAndNumberContainer);
        // const imagePic = document.createElement('img');
        // const imageParagraph = document.createElement('p');
        // imagePic.src = finalImageLinks[i];
        // imageParagraph.innerText = `${i + 1}`;
        // imageDiv.appendChild(imagePic);
        // imageDiv.appendChild(imageParagraph);
        // insidePhotosContainer.appendChild(imagePic);
        // imageDiv.classList.add('imageFigure');
        // setTimeout(() => {
        //     imagePic.style.opacity = '1';
        // }, 10
    }
};

// photosButton.addEventListener('click', () => { photosContainer.innerText += "Rara" });
// Use an anonymous function to pass the parameter when the button is clicked
//photosButton.addEventListener('click', () => insertPicsToContainer(beforeusImageLinks));



// const removeAllChildren = () => {
//     const parent = document.querySelector();
//     parent..
// }

// const showPics = () => {
//     photosButton.addEventListener('click', insertPicsToContainer(beforeusPics));
// }
