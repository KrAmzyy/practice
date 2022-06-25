import "./styles/main.scss"
import { initBurgerButton } from "./btn"
import { preloader } from "./preloader"
import logo from "../assets/logo.svg"
import smarthome from "../assets/smarthome.svg"
import ilustbg from "../assets/ilustbg.svg"
import shadow from "../assets/shadow.svg"
import man from "../assets/man1.svg"
import women from "../assets/women1.svg"
import platform from "../assets/platform.svg"
import fisrt from "../assets/WWDicons/first.svg"
import second from "../assets/WWDicons/second.svg"
import thrid from "../assets/WWDicons/thrid.svg"
import arrow from "../assets/arrow.svg"

document.addEventListener('DOMContentLoaded', () => {
  initBurgerButton()
  preloader()
})

const logoImg = document.getElementById('logoImg')
logoImg.src = logo
const smartImg = document.getElementById('smartImg')
smartImg.src = smarthome
const ilustbgImg = document.getElementById('ilustbgImg')
ilustbgImg.src = ilustbg
const shadowImg = document.getElementById('shadowImg')
shadowImg.src = shadow
const manImg = document.getElementById('manImg')
manImg.src = man
const womenImg = document.getElementById('womenImg')
womenImg.src = women
const platformImg = document.getElementById('platformImg')
platformImg.src = platform
const firstImg = document.getElementById('firstImg')
firstImg.src = fisrt
const secondImg = document.getElementById('secondImg')
secondImg.src = second
const thridImg = document.getElementById('thridImg')
thridImg.src = thrid
const arrowImgf = document.getElementById('arrowImgf')
arrowImgf.src = arrow
const arrowImgs = document.getElementById('arrowImgs')
arrowImgs.src = arrow
const arrowImgt = document.getElementById('arrowImgt')
arrowImgt.src = arrow