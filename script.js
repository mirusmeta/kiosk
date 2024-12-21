let clickrasp = document.getElementById('clickrasp');
let clickPam = document.getElementById('clickPam');
let A11 = document.getElementById('a1class');
let A21 = document.getElementById('a2class');
let A31 = document.getElementById('a3class');
let A41 = document.getElementById('a4class');
let A51 = document.getElementById('a5class');
let A61 = document.getElementById('a6class');
let A71 = document.getElementById('a7class');
let A81 = document.getElementById('a8class');
let A91 = document.getElementById('a9class');
let A101 = document.getElementById('a10class');
let A111 = document.getElementById('a11class');
let B11 = document.getElementById('b1class');
let B21 = document.getElementById('b2class');
let B31 = document.getElementById('b3class');
let B41 = document.getElementById('b4class');
let B51 = document.getElementById('b5class');
let B61 = document.getElementById('b6class');
let B71 = document.getElementById('b7class');
let B81 = document.getElementById('b8class');
let B91 = document.getElementById('b9class');
let a10class = document.getElementById('10aclass')
if(clickPam){
    clickPam.addEventListener('click', clickPamClick, false);
}
if(a10class){
    a10class.addEventListener('click', a10classclick, false)
}
if(clickrasp){
    clickrasp.addEventListener('click', clickraspfun, false)
}
if (A11) {
    setTimeout(function() {
        window.location.href = "main.html";
    }, 60000); // 60 000 миллисекунд = 1 минута
    A11.addEventListener('click', A1click, false);
}
if (A21) {
    A21.addEventListener('click', A2click, false);
}
if (A31) {
    A31.addEventListener('click', A3click, false);
}
if (A41) {
    A41.addEventListener('click', A4click, false);
}
if (A51) {
    A51.addEventListener('click', A5click, false);
}
if (A61) {
    A61.addEventListener('click', A6click, false);
}
if (A71) {
    A71.addEventListener('click', A7click, false);
}
if (A81) {
    A81.addEventListener('click', A8click, false);
}
if (A91) {
    A91.addEventListener('click', A9click, false);
}
if (A101) {
    A101.addEventListener('click', A10click, false);
}
if (A111) {
    A111.addEventListener('click', A11click, false);
}
if (B11) {
    B11.addEventListener('click', B1click, false);
}
if (B21) {
    B21.addEventListener('click', B2click, false);
}
if (B31) {
    B31.addEventListener('click', B3click, false);
}
if (B41) {
    B41.addEventListener('click', B4click, false);
}
if (B51) {
    B51.addEventListener('click', B5click, false);
}
if (B61) {
    B61.addEventListener('click', B6click, false);
}
if (B71) {
    B71.addEventListener('click', B7click, false);
}
if (B81) {
    B81.addEventListener('click', B8click, false);
}
if (B91) {
    B91.addEventListener('click', B9click, false);
}

function clickPamClick(){
    window.location.href = "choosePam.html"
}

function clickraspfun(){
    window.location.href = "chooserofrasp.html"
}
function A1click(){
    window.location.href = "1achooser.html"
}
function A2click(){
    window.location.href = "2achooser.html"
}
function A3click(){
    window.location.href = "3achooser.html"
}
function A4click(){
    window.location.href = "4achooser.html"
}
function A5click(){
    window.location.href = "5achooser.html"
}
function A6click(){
    window.location.href = "6achooser.html"
}
function A7click(){
    window.location.href = "7achooser.html"
}
function A8click(){
    window.location.href = "8achooser.html"
}
function A9click(){
    window.location.href = "9achooser.html"
}
function A10click(){
    window.location.href = "10achooser.html"
}
function A11click(){
    window.location.href = "11achooser.html"
}
function B1click(){
    window.location.href = "1bchooser.html"
}
function B2click(){
    window.location.href = "2bchooser.html"
}
function B3click(){
    window.location.href = "3bchooser.html"
}
function B4click(){
    window.location.href = "4bchooser.html"
}
function B5click(){
    window.location.href = "5bchooser.html"
}
function B6click(){
    window.location.href = "6bchooser.html"
}
function B7click(){
    window.location.href = "7bchooser.html"
}
function raspisanieclick(){
    window.location.href = "raitingchooser.html"
}
function B8click(){
    window.location.href = "8bchooser.html"
}
function B9click(){
    window.location.href = "9bchooser.html"
}
function a10classclick(){
    window.location.href = "a10classraiting.html"
}
let backbut = document.getElementById('backbut');
if (backbut) {
    setTimeout(function() {
        window.location.href = "main.html";
    }, 60000); // 60 000 миллисекунд = 1 минута
    let date = new Date();
    let today = date.toLocaleString('ru', { weekday: 'short' })
    if(today === "пн"){
        let monday =document.getElementById('monday');
        monday.style.backgroundColor = "rgb(187, 233, 252)"
    }
    if(today === "вт"){
        let monday =document.getElementById('tuesday');
        monday.style.backgroundColor = "rgb(187, 233, 252)"
    }
    if(today === "ср"){
        let monday =document.getElementById('wednesday');
        monday.style.backgroundColor = "rgb(187, 233, 252)"
    }
    if(today === "чт"){
        let monday =document.getElementById('thursday');
        monday.style.backgroundColor = "rgb(187, 233, 252)"
    }
    if(today === "пт"){
        let monday =document.getElementById('friday');
        monday.style.backgroundColor = "rgb(187, 233, 252)"
    }
    backbut.addEventListener('click', backbutfun, false);
}
function backbutfun(){
    window.location.href = "main.html"
}
let time2 = document.getElementById('time');
if(time2){
    let date = new Date();
    let today = date.toLocaleString('ru', { weekday: 'short' })
    time2.innerText = date.toLocaleString('ru')
}
let backbut2 = document.getElementById('backbut2');
if (backbut2) {
    setTimeout(function(){
        window.location.href = "main.html";
    }, 60000); // 60 000 миллисекунд = 1 минута
    backbut2.addEventListener('click', backbutfun2, false);
}
function backbutfun2(){
    window.location.href = "main.html"
}
