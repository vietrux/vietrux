//---Random Color---
alert("Its working");
var root = document.documentElement;
setInterval(() => {
    root.style.setProperty('--web-wash', `hsl(${Math.random() * 360}, ${Math.random() * 100}%, ${Math.random() * 100}%)`);
    root.style.setProperty('--surface-background', `hsl(${Math.random() * 360}, ${Math.random() * 100}%, ${Math.random() * 100}%)`);
    root.style.setProperty('--nav-bar-background', `hsl(${Math.random() * 360}, ${Math.random() * 100}%, ${Math.random() * 100}%)`);
    root.style.setProperty('--card-background', `hsl(${Math.random() * 360}, ${Math.random() * 100}%, ${Math.random() * 100}%)`);
    root.style.setProperty('--comment-background', `hsl(${Math.random() * 360}, ${Math.random() * 100}%, ${Math.random() * 100}%)`);
    root.style.setProperty('--primary-text', `hsl(${Math.random() * 360}, ${Math.random() * 100}%, ${Math.random() * 100}%)`);
    root.style.setProperty('--primary-button-background', `hsl(${Math.random() * 360}, ${Math.random() * 100}%, ${Math.random() * 100}%)`);
    root.style.setProperty('--primary-icon-color', `hsl(${Math.random() * 360}, ${Math.random() * 100}%, ${Math.random() * 100}%)`);
    root.style.setProperty('--secondary-text', `hsl(${Math.random() * 360}, ${Math.random() * 100}%, ${Math.random() * 100}%)`);
    root.style.setProperty('--secondary-icon', `hsl(${Math.random() * 360}, ${Math.random() * 100}%, ${Math.random() * 100}%)`);
}
    , 1000);
//-------------------------------------------------------------------

//---White-Black---
alert("Its working");
var flicker = document.createElement('style');
flicker.innerHTML = `
@keyframes flicker {
    0%   { background: white; }
    20%  { background: black; }
    40%  { background: white; }
    60%  { background: black; }
    80%  { background: white; }
    100% { background: black; }
    }
`;
document.getElementsByTagName('head')[0].appendChild(flicker);
document.body.style.animation = "flicker 0.35s infinite linear";

//---Dark-Light---
alert("Its working");

var defcolor = window.getComputedStyle(document.body, null).getPropertyValue('background-color');
if (defcolor == "rgb(24, 25, 26)") {
    var flicker = document.createElement('style');
    flicker.innerHTML = `
@keyframes flicker {
    0%   { background: rgb(24, 25, 26); }
    20%  { background: #010a00; }
    40%  { background: #000a0a; }
    60%  { background: #00000a; }
    80%  { background: #09000a; }
    100% { background: rgb(24, 25, 26); }
    }
`;
    document.getElementsByTagName('head')[0].appendChild(flicker);
    document.body.style.animation = "flicker 7s infinite linear";
} else {
    var flicker = document.createElement('style');
    flicker.innerHTML = `
@keyframes flicker {
    0%   { background: #ffbfbf; }
    20%  { background: #fffcbf; }
    40%  { background: #bfffc6; }
    60%  { background: #bff2ff; }
    80%  { background: #e9bfff; }
    100% { background: #ffbfdf; }
    }
`;
    document.getElementsByTagName('head')[0].appendChild(flicker);
    document.body.style.animation = "flicker 10s infinite linear";

}





