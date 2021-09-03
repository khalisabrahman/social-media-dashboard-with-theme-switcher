const radioButtons = document.querySelectorAll('.toggle__wrapper input');
const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');

const setColorMode = () => {
    if (localStorage.getItem('colorMode') === 'dark') {
        setDarkMode();
        darkButton.click()
    } else {
        setLightMode();
        lightButton.click();
    }
}

const checkMode = () => {
    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        lightButton.click();
    } 
    else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        darkButton.click();
    }
}

const checkModeChange = () => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
        checkMode();
    })
}

const setDarkMode = () => {
    document.querySelector('body').classList = 'dark';
}

const setLightMode = () => {
    document.querySelector('body').classList = 'light';
}

setColorMode();
checkMode();
checkModeChange();

for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener('click', event => {
        if (darkButton.checked) {
            setDarkMode();
            localStorage.setItem('colorMode', 'dark');
        }
        if (lightButton.checked) {
            setLightMode();
            localStorage.setItem('colorMode', 'light');
        }
    } )
}
