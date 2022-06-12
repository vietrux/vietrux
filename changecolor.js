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
