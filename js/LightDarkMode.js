let LogoApex = document.getElementById('LogoApex');
let LogoLol = document.getElementById('LogoLol');
let LogoSmash = document.getElementById('LogoSmash');

let srcApex = LogoApex.getAttribute('src');
let srcLol = LogoLol.getAttribute('src');
let srcSmash = LogoSmash.getAttribute('src');

const sliderOpacity = document.querySelector(".slider");

const switchTheme = document.querySelector('.input');

let lightMode = localStorage.getItem("dark-mode");

switchTheme.addEventListener('click', () => {

    let isChecked = switchTheme.checked

    if (isChecked) {
        // Dark Mode

        /* Général */

        document.documentElement.style.setProperty('--ecriture', '#909090');
        document.documentElement.style.setProperty('--background', 'repeating-linear-gradient(322deg, rgb(0,0,0) 0px, rgb(0,0,0) 25px,transparent 25px, transparent 28px),repeating-linear-gradient(382deg, rgb(0,0,0) 0px, rgb(0,0,0) 25px,transparent 25px, transparent 28px),repeating-linear-gradient(61deg, rgb(0,0,0) 0px, rgb(0,0,0) 25px,transparent 25px, transparent 28px),linear-gradient(135deg, rgb(255,0,0),rgb(255,69,0))');
        document.documentElement.style.setProperty('--ColorHr', '#ffffff');

        /* Header + Footer */

        document.documentElement.style.setProperty('--backgroundHF', 'radial-gradient(circle at center center, transparent,rgb(0,0,0)),repeating-linear-gradient(135deg, rgb(0,0,0) 0px, rgb(0,0,0) 2px,transparent 2px, transparent 10px,rgb(0,0,0) 10px, rgb(0,0,0) 11px,transparent 11px, transparent 21px),repeating-linear-gradient(45deg, rgb(29,29,29) 0px, rgb(29,29,29) 4px,transparent 4px, transparent 8px),linear-gradient(90deg, rgb(0,0,0),rgb(0,0,0))');
        document.documentElement.style.setProperty('--borderHF', '#909090');

        /* main */

        document.documentElement.style.setProperty('--module', 'repeating-linear-gradient(45deg, rgba(255,255,255, 0.05) 0px, rgba(255,255,255, 0.05) 1px,transparent 1px, transparent 11px,rgba(255,255,255, 0.05) 11px, rgba(255,255,255, 0.05) 12px,transparent 12px, transparent 32px),repeating-linear-gradient(0deg, rgba(255,255,255, 0.05) 0px, rgba(255,255,255, 0.05) 1px,transparent 1px, transparent 11px,rgba(255,255,255, 0.05) 11px, rgba(255,255,255, 0.05) 12px,transparent 12px, transparent 32px),repeating-linear-gradient(135deg, rgba(255,255,255, 0.05) 0px, rgba(255,255,255, 0.05) 1px,transparent 1px, transparent 11px,rgba(255,255,255, 0.05) 11px, rgba(255,255,255, 0.05) 12px,transparent 12px, transparent 32px),repeating-linear-gradient(90deg, rgba(255,255,255, 0.05) 0px, rgba(255,255,255, 0.05) 1px,transparent 1px, transparent 11px,rgba(255,255,255, 0.05) 11px, rgba(255,255,255, 0.05) 12px,transparent 12px, transparent 32px),linear-gradient(90deg, rgb(0,0,0),rgb(20,0,0))');

        /* Variable Bouton Connexion */

        document.documentElement.style.setProperty('--ecritureBtnCo', '#999999');
        document.documentElement.style.setProperty('--bgBtnCo', '#001ca8');
        document.documentElement.style.setProperty('--borderBtnCo', '#000000');
        document.documentElement.style.setProperty('--boxShadowBtnCo', '#000000');
        document.documentElement.style.setProperty('--bgBtnCoHover', '#0023cf');
        document.documentElement.style.setProperty('--ecritureBtnCoHover', '#e2e2e2');

        /* Variable Bouton Deconnexion */

        document.documentElement.style.setProperty('--ecritureBtnDeco', '#1B1B1B');
        document.documentElement.style.setProperty('--bgBtnDeco', '#880000');
        document.documentElement.style.setProperty('--borderBtnDeco', '#000000');
        document.documentElement.style.setProperty('--boxShadowBtnDeco', '#000000');
        document.documentElement.style.setProperty('--bgBtnDecoHover', '#a50000')
        document.documentElement.style.setProperty('--ecritureBtnDecoHover', '#999999');

        /* Navigation */

        document.documentElement.style.setProperty('--ecritureNav', '#880000');
        document.documentElement.style.setProperty('--bgNav', 'repeating-linear-gradient(375deg, transparent 0px, transparent 3px,rgb(7,7,7) 3px, rgb(7,7,7) 28px),repeating-linear-gradient(603deg, transparent 0px, transparent 3px,rgb(7,7,7) 3px, rgb(7,7,7) 28px),linear-gradient(360deg, rgb(255,0,0),rgb(255,59,0),rgb(255,134,0),rgb(255,134,0),rgb(255,59,0),rgb(255,59,0),rgb(255,0,0))');
        document.documentElement.style.setProperty('--borderNav', '#000000');
        document.documentElement.style.setProperty('--boxShadowNav', '#000000');
        document.documentElement.style.setProperty('--bgNavHover', 'repeating-linear-gradient(375deg, transparent 0px, transparent 3px,rgb(7,7,7) 3px, rgb(7,7,7) 28px),repeating-linear-gradient(603deg, transparent 0px, transparent 3px,rgb(7,7,7) 3px, rgb(7,7,7) 28px),linear-gradient(360deg, rgb(255,0,0),rgb(255,59,0),rgb(255,134,0),rgb(255,134,0),rgb(255,59,0),rgb(255,59,0),rgb(255,0,0))');
        document.documentElement.style.setProperty('--borderNavHover', '#020202');

        // Bouton light & Dark mode

        document.documentElement.style.setProperty('--bgColorSlider', '#0e0e0e');
        document.documentElement.style.setProperty('--borderSlider:', '#000000');
        document.documentElement.style.setProperty('--bgSliderBefore', '#e8e8e8');
        document.documentElement.style.setProperty('--colorIcon:', '#880000');
        document.documentElement.style.setProperty('--bgColorBtn', '#0e0e0e');
        document.documentElement.style.setProperty('--borderBtn', '#000000');
        document.documentElement.style.setProperty('--boxShadow', '#183153');

        // Local storage

        localStorage.removeItem("dark-mode");
        localStorage.setItem("dark-mode", "enabled");
        LogoApex.removeAttribute('src');
        LogoLol.removeAttribute('src');
        LogoSmash.removeAttribute('src');
        LogoApex.setAttribute('src', '../images/Logo Apex Blanc.png');
        LogoLol.setAttribute('src', '../images/Logo LOL Blanc.png');
        LogoSmash.setAttribute('src', '../images/Logo Smash Blanc.png');


    } else {
        // Light Mode

        /* Général */

        document.documentElement.style.setProperty('--ecriture', '#000000');
        document.documentElement.style.setProperty('--background', 'repeating-linear-gradient(105deg, transparent 0px, transparent 3px,rgb(255,255,255) 3px, rgb(255,255,255) 28px),repeating-linear-gradient(333deg, transparent 0px, transparent 3px,rgb(255,255,255) 3px, rgb(255,255,255) 28px),linear-gradient(90deg, hsl(300,76%,69%),hsl(351.429,76%,69%),hsl(42.857,76%,69%),hsl(94.286,76%,69%),hsl(145.714,76%,69%),hsl(197.143,76%,69%),rgb(236,116,116))');
        document.documentElement.style.setProperty('--ColorHr', '#000000');

        /* Header + Footer */

        document.documentElement.style.setProperty('--backgroundHF', 'repeating-linear-gradient(90deg, hsla(253,0%,98%,0.03) 0px, hsla(253,0%,98%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(112.5deg, hsla(253,0%,98%,0.03) 0px, hsla(253,0%,98%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(22.5deg, hsla(253,0%,98%,0.03) 0px, hsla(253,0%,98%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(67.5deg, hsla(253,0%,98%,0.03) 0px, hsla(253,0%,98%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(90deg, hsla(253,0%,98%,0.03) 0px, hsla(253,0%,98%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(157.5deg, hsla(253,0%,98%,0.03) 0px, hsla(253,0%,98%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(112.5deg, hsla(253,0%,98%,0.03) 0px, hsla(253,0%,98%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(135deg, hsla(253,0%,98%,0.03) 0px, hsla(253,0%,98%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(135deg, hsla(253,0%,98%,0.03) 0px, hsla(253,0%,98%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(180deg, hsla(253,0%,98%,0.03) 0px, hsla(253,0%,98%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(67.5deg, hsla(253,0%,98%,0.03) 0px, hsla(253,0%,98%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(180deg, hsla(253,0%,98%,0.03) 0px, hsla(253,0%,98%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(135deg, hsla(253,0%,98%,0.03) 0px, hsla(253,0%,98%,0.03) 1px,transparent 1px, transparent 12px),linear-gradient(135deg, rgb(182,121,255),rgb(218,46,46))');
        document.documentElement.style.setProperty('--borderHF', '#000000');

        /* main */

        document.documentElement.style.setProperty('--module', 'repeating-linear-gradient(90deg, rgba(255,255,255, 0.05) 0px, rgba(255,255,255, 0.05) 1px,transparent 1px, transparent 11px,rgba(255,255,255, 0.05) 11px, rgba(255,255,255, 0.05) 12px,transparent 12px, transparent 32px),repeating-linear-gradient(45deg, rgba(255,255,255, 0.05) 0px, rgba(255,255,255, 0.05) 1px,transparent 1px, transparent 11px,rgba(255,255,255, 0.05) 11px, rgba(255,255,255, 0.05) 12px,transparent 12px, transparent 32px),repeating-linear-gradient(180deg, rgba(255,255,255, 0.05) 0px, rgba(255,255,255, 0.05) 1px,transparent 1px, transparent 11px,rgba(255,255,255, 0.05) 11px, rgba(255,255,255, 0.05) 12px,transparent 12px, transparent 32px),repeating-linear-gradient(135deg, rgba(255,255,255, 0.05) 0px, rgba(255,255,255, 0.05) 1px,transparent 1px, transparent 11px,rgba(255,255,255, 0.05) 11px, rgba(255,255,255, 0.05) 12px,transparent 12px, transparent 32px),linear-gradient(135deg, rgb(182,121,255),rgb(218,46,46))');

        /* Variable Bouton Connexion */

        document.documentElement.style.setProperty('--ecritureBtnCo', '#9f9f9f');
        document.documentElement.style.setProperty('--bgBtnCo', '#a544e8');
        document.documentElement.style.setProperty('--borderBtnCo', '#000000');
        document.documentElement.style.setProperty('--boxShadowBtnCo', '#000000');
        document.documentElement.style.setProperty('--bgBtnCoHover', '#c150e9');
        document.documentElement.style.setProperty('--ecritureBtnCoHover', '#e2e2e2');

        /* Variable Bouton Deconnexion */

        document.documentElement.style.setProperty('--ecritureBtnDeco', '#1B1B1B');
        document.documentElement.style.setProperty('--bgBtnDeco', '#880000');
        document.documentElement.style.setProperty('--borderBtnDeco', '#000000');
        document.documentElement.style.setProperty('--boxShadowBtnDeco', '#000000');
        document.documentElement.style.setProperty('--bgBtnDecoHover', '#a50000')
        document.documentElement.style.setProperty('--ecritureBtnDecoHover', '#999999');

        /* Navigation */

        document.documentElement.style.setProperty('--ecritureNav', '#000000');
        document.documentElement.style.setProperty('--bgNav', 'repeating-linear-gradient(375deg, transparent 0px, transparent 3px,rgb(255,255,255) 3px, rgb(255,255,255) 28px),repeating-linear-gradient(603deg, transparent 0px, transparent 3px,rgb(255,255,255) 3px, rgb(255,255,255) 28px),linear-gradient(360deg, rgb(183,119,250),rgb(200,85,153),rgb(217,47,48),rgb(217,47,48),rgb(200,85,153),rgb(200,85,153),rgb(183,119,250))');
        document.documentElement.style.setProperty('--borderNav', '#000000');
        document.documentElement.style.setProperty('--boxShadowNav', '#000000');
        document.documentElement.style.setProperty('--bgNavHover', 'repeating-linear-gradient(375deg, transparent 0px, transparent 3px,rgb(255,255,255) 3px, rgb(255,255,255) 28px),repeating-linear-gradient(603deg, transparent 0px, transparent 3px,rgb(255,255,255) 3px, rgb(255,255,255) 28px),linear-gradient(360deg, rgb(183,119,250),rgb(200,85,153),rgb(217,47,48),rgb(217,47,48),rgb(200,85,153),rgb(200,85,153),rgb(183,119,250))');
        document.documentElement.style.setProperty('--borderNavHover', '#020202');

        // Bouton light & Dark mode

        document.documentElement.style.setProperty('--bgColorSlider', 'rgba(255,255,255,0.6)');
        document.documentElement.style.setProperty('--borderSlider:', '#000000');
        document.documentElement.style.setProperty('--bgSliderBefore', '#ffffff');
        document.documentElement.style.setProperty('--colorIcon:', '#880000');
        document.documentElement.style.setProperty('--bgColorBtn', '#0e0e0e');
        document.documentElement.style.setProperty('--borderBtn', '#000000');
        document.documentElement.style.setProperty('--boxShadow', '#183153');

        // Local storage

        localStorage.removeItem("dark-mode");

        localStorage.setItem("dark-mode", "disable");
        LogoApex.removeAttribute('src');
        LogoLol.removeAttribute('src');
        LogoSmash.removeAttribute('src');
        LogoApex.setAttribute('src', '../images/Logo Apex Noir.png');
        LogoLol.setAttribute('src', '../images/Logo LOL Noir.png');
        LogoSmash.setAttribute('src', '../images/Logo Smash Noir.png');
    }
})

if (lightMode == "enabled") {
    // Dark Mode

    /* Général */

    document.documentElement.style.setProperty('--ecriture', '#909090');
    document.documentElement.style.setProperty('--background', 'repeating-linear-gradient(322deg, rgb(0,0,0) 0px, rgb(0,0,0) 25px,transparent 25px, transparent 28px),repeating-linear-gradient(382deg, rgb(0,0,0) 0px, rgb(0,0,0) 25px,transparent 25px, transparent 28px),repeating-linear-gradient(61deg, rgb(0,0,0) 0px, rgb(0,0,0) 25px,transparent 25px, transparent 28px),linear-gradient(135deg, rgb(255,0,0),rgb(255,69,0))');
    document.documentElement.style.setProperty('--ColorHr', '#ffffff');

    /* Header + Footer */

    document.documentElement.style.setProperty('--backgroundHF', 'radial-gradient(circle at center center, transparent,rgb(0,0,0)),repeating-linear-gradient(135deg, rgb(0,0,0) 0px, rgb(0,0,0) 2px,transparent 2px, transparent 10px,rgb(0,0,0) 10px, rgb(0,0,0) 11px,transparent 11px, transparent 21px),repeating-linear-gradient(45deg, rgb(29,29,29) 0px, rgb(29,29,29) 4px,transparent 4px, transparent 8px),linear-gradient(90deg, rgb(0,0,0),rgb(0,0,0))');
    document.documentElement.style.setProperty('--borderHF', '#909090');

    /* main */

    document.documentElement.style.setProperty('--module', 'repeating-linear-gradient(45deg, rgba(255,255,255, 0.05) 0px, rgba(255,255,255, 0.05) 1px,transparent 1px, transparent 11px,rgba(255,255,255, 0.05) 11px, rgba(255,255,255, 0.05) 12px,transparent 12px, transparent 32px),repeating-linear-gradient(0deg, rgba(255,255,255, 0.05) 0px, rgba(255,255,255, 0.05) 1px,transparent 1px, transparent 11px,rgba(255,255,255, 0.05) 11px, rgba(255,255,255, 0.05) 12px,transparent 12px, transparent 32px),repeating-linear-gradient(135deg, rgba(255,255,255, 0.05) 0px, rgba(255,255,255, 0.05) 1px,transparent 1px, transparent 11px,rgba(255,255,255, 0.05) 11px, rgba(255,255,255, 0.05) 12px,transparent 12px, transparent 32px),repeating-linear-gradient(90deg, rgba(255,255,255, 0.05) 0px, rgba(255,255,255, 0.05) 1px,transparent 1px, transparent 11px,rgba(255,255,255, 0.05) 11px, rgba(255,255,255, 0.05) 12px,transparent 12px, transparent 32px),linear-gradient(90deg, rgb(0,0,0),rgb(20,0,0))');

    /* Variable Bouton Connexion */

    document.documentElement.style.setProperty('--ecritureBtnCo', '#999999');
    document.documentElement.style.setProperty('--bgBtnCo', '#001ca8');
    document.documentElement.style.setProperty('--borderBtnCo', '#000000');
    document.documentElement.style.setProperty('--boxShadowBtnCo', '#000000');
    document.documentElement.style.setProperty('--bgBtnCoHover', '#0023cf');
    document.documentElement.style.setProperty('--ecritureBtnCoHover', '#e2e2e2');

    /* Variable Bouton Deconnexion */

    document.documentElement.style.setProperty('--ecritureBtnDeco', '#1B1B1B');
    document.documentElement.style.setProperty('--bgBtnDeco', '#880000');
    document.documentElement.style.setProperty('--borderBtnDeco', '#000000');
    document.documentElement.style.setProperty('--boxShadowBtnDeco', '#000000');
    document.documentElement.style.setProperty('--bgBtnDecoHover', '#a50000')
    document.documentElement.style.setProperty('--ecritureBtnDecoHover', '#999999');

    /* Navigation */

    document.documentElement.style.setProperty('--ecritureNav', '#880000');
    document.documentElement.style.setProperty('--bgNav', 'repeating-linear-gradient(375deg, transparent 0px, transparent 3px,rgb(7,7,7) 3px, rgb(7,7,7) 28px),repeating-linear-gradient(603deg, transparent 0px, transparent 3px,rgb(7,7,7) 3px, rgb(7,7,7) 28px),linear-gradient(360deg, rgb(255,0,0),rgb(255,59,0),rgb(255,134,0),rgb(255,134,0),rgb(255,59,0),rgb(255,59,0),rgb(255,0,0))');
    document.documentElement.style.setProperty('--borderNav', '#000000');
    document.documentElement.style.setProperty('--boxShadowNav', '#000000');
    document.documentElement.style.setProperty('--bgNavHover', 'repeating-linear-gradient(375deg, transparent 0px, transparent 3px,rgb(7,7,7) 3px, rgb(7,7,7) 28px),repeating-linear-gradient(603deg, transparent 0px, transparent 3px,rgb(7,7,7) 3px, rgb(7,7,7) 28px),linear-gradient(360deg, rgb(255,0,0),rgb(255,59,0),rgb(255,134,0),rgb(255,134,0),rgb(255,59,0),rgb(255,59,0),rgb(255,0,0))');
    document.documentElement.style.setProperty('--borderNavHover', '#020202');

    // Bouton light & Dark mode

    document.documentElement.style.setProperty('--bgColorSlider', '#0e0e0e');
    document.documentElement.style.setProperty('--borderSlider:', '#000000');
    document.documentElement.style.setProperty('--bgSliderBefore', '#e8e8e8');
    document.documentElement.style.setProperty('--colorIcon:', '#880000');
    document.documentElement.style.setProperty('--bgColorBtn', '#0e0e0e');
    document.documentElement.style.setProperty('--borderBtn', '#000000');
    document.documentElement.style.setProperty('--boxShadow', '#183153');

    // Switch Theme

    switchTheme.setAttribute("checked", "true");
    LogoApex.removeAttribute('src');
    LogoLol.removeAttribute('src');
    LogoSmash.removeAttribute('src');
    LogoApex.setAttribute('src', '../images/Logo Apex Blanc.png');
    LogoLol.setAttribute('src', '../images/Logo LOL Blanc.png');
    LogoSmash.setAttribute('src', '../images/Logo Smash Blanc.png')

} else {
    // Light Mode

    /* Général */

    document.documentElement.style.setProperty('--ecriture', '#000000');
    document.documentElement.style.setProperty('--background', 'repeating-linear-gradient(105deg, transparent 0px, transparent 3px,rgb(255,255,255) 3px, rgb(255,255,255) 28px),repeating-linear-gradient(333deg, transparent 0px, transparent 3px,rgb(255,255,255) 3px, rgb(255,255,255) 28px),linear-gradient(90deg, hsl(300,76%,69%),hsl(351.429,76%,69%),hsl(42.857,76%,69%),hsl(94.286,76%,69%),hsl(145.714,76%,69%),hsl(197.143,76%,69%),rgb(236,116,116))');
    document.documentElement.style.setProperty('--ColorHr', '#000000');

    /* Header + Footer */

    document.documentElement.style.setProperty('--backgroundHF', 'repeating-linear-gradient(90deg, hsla(253,0%,98%,0.03) 0px, hsla(253,0%,98%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(112.5deg, hsla(253,0%,98%,0.03) 0px, hsla(253,0%,98%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(22.5deg, hsla(253,0%,98%,0.03) 0px, hsla(253,0%,98%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(67.5deg, hsla(253,0%,98%,0.03) 0px, hsla(253,0%,98%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(90deg, hsla(253,0%,98%,0.03) 0px, hsla(253,0%,98%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(157.5deg, hsla(253,0%,98%,0.03) 0px, hsla(253,0%,98%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(112.5deg, hsla(253,0%,98%,0.03) 0px, hsla(253,0%,98%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(135deg, hsla(253,0%,98%,0.03) 0px, hsla(253,0%,98%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(135deg, hsla(253,0%,98%,0.03) 0px, hsla(253,0%,98%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(180deg, hsla(253,0%,98%,0.03) 0px, hsla(253,0%,98%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(67.5deg, hsla(253,0%,98%,0.03) 0px, hsla(253,0%,98%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(180deg, hsla(253,0%,98%,0.03) 0px, hsla(253,0%,98%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(135deg, hsla(253,0%,98%,0.03) 0px, hsla(253,0%,98%,0.03) 1px,transparent 1px, transparent 12px),linear-gradient(135deg, rgb(182,121,255),rgb(218,46,46))');
    document.documentElement.style.setProperty('--borderHF', '#000000');

    /* main */

    document.documentElement.style.setProperty('--module', 'repeating-linear-gradient(90deg, rgba(255,255,255, 0.05) 0px, rgba(255,255,255, 0.05) 1px,transparent 1px, transparent 11px,rgba(255,255,255, 0.05) 11px, rgba(255,255,255, 0.05) 12px,transparent 12px, transparent 32px),repeating-linear-gradient(45deg, rgba(255,255,255, 0.05) 0px, rgba(255,255,255, 0.05) 1px,transparent 1px, transparent 11px,rgba(255,255,255, 0.05) 11px, rgba(255,255,255, 0.05) 12px,transparent 12px, transparent 32px),repeating-linear-gradient(180deg, rgba(255,255,255, 0.05) 0px, rgba(255,255,255, 0.05) 1px,transparent 1px, transparent 11px,rgba(255,255,255, 0.05) 11px, rgba(255,255,255, 0.05) 12px,transparent 12px, transparent 32px),repeating-linear-gradient(135deg, rgba(255,255,255, 0.05) 0px, rgba(255,255,255, 0.05) 1px,transparent 1px, transparent 11px,rgba(255,255,255, 0.05) 11px, rgba(255,255,255, 0.05) 12px,transparent 12px, transparent 32px),linear-gradient(135deg, rgb(182,121,255),rgb(218,46,46))');

    /* Variable Bouton Connexion */

    document.documentElement.style.setProperty('--ecritureBtnCo', '#9f9f9f');
    document.documentElement.style.setProperty('--bgBtnCo', '#a544e8');
    document.documentElement.style.setProperty('--borderBtnCo', '#000000');
    document.documentElement.style.setProperty('--boxShadowBtnCo', '#000000');
    document.documentElement.style.setProperty('--bgBtnCoHover', '#c150e9');
    document.documentElement.style.setProperty('--ecritureBtnCoHover', '#e2e2e2');

    /* Variable Bouton Deconnexion */

    document.documentElement.style.setProperty('--ecritureBtnDeco', '#1B1B1B');
    document.documentElement.style.setProperty('--bgBtnDeco', '#880000');
    document.documentElement.style.setProperty('--borderBtnDeco', '#000000');
    document.documentElement.style.setProperty('--boxShadowBtnDeco', '#000000');
    document.documentElement.style.setProperty('--bgBtnDecoHover', '#a50000')
    document.documentElement.style.setProperty('--ecritureBtnDecoHover', '#999999');

    /* Navigation */

    document.documentElement.style.setProperty('--ecritureNav', '#000000');
    document.documentElement.style.setProperty('--bgNav', 'repeating-linear-gradient(375deg, transparent 0px, transparent 3px,rgb(255,255,255) 3px, rgb(255,255,255) 28px),repeating-linear-gradient(603deg, transparent 0px, transparent 3px,rgb(255,255,255) 3px, rgb(255,255,255) 28px),linear-gradient(360deg, rgb(183,119,250),rgb(200,85,153),rgb(217,47,48),rgb(217,47,48),rgb(200,85,153),rgb(200,85,153),rgb(183,119,250))');
    document.documentElement.style.setProperty('--borderNav', '#000000');
    document.documentElement.style.setProperty('--boxShadowNav', '#000000');
    document.documentElement.style.setProperty('--bgNavHover', 'repeating-linear-gradient(375deg, transparent 0px, transparent 3px,rgb(255,255,255) 3px, rgb(255,255,255) 28px),repeating-linear-gradient(603deg, transparent 0px, transparent 3px,rgb(255,255,255) 3px, rgb(255,255,255) 28px),linear-gradient(360deg, rgb(183,119,250),rgb(200,85,153),rgb(217,47,48),rgb(217,47,48),rgb(200,85,153),rgb(200,85,153),rgb(183,119,250))');
    document.documentElement.style.setProperty('--borderNavHover', '#020202');

    // Bouton light & Dark mode

    document.documentElement.style.setProperty('--bgColorSlider', 'rgba(255,255,255,0.6)');
    document.documentElement.style.setProperty('--borderSlider:', '#000000');
    document.documentElement.style.setProperty('--bgSliderBefore', '#ffffff');
    document.documentElement.style.setProperty('--colorIcon:', '#880000');
    document.documentElement.style.setProperty('--bgColorBtn', '#0e0e0e');
    document.documentElement.style.setProperty('--borderBtn', '#000000');
    document.documentElement.style.setProperty('--boxShadow', '#183153');

    // Switch Theme

    switchTheme.removeAttribute("checked");
    LogoApex.removeAttribute('src');
    LogoLol.removeAttribute('src');
    LogoSmash.removeAttribute('src');
    LogoApex.setAttribute('src', '../images/Logo Apex Noir.png');
    LogoLol.setAttribute('src', '../images/Logo LOL Noir.png');
    LogoSmash.setAttribute('src', '../images/Logo Smash Noir.png');
}
