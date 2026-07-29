import { initNavigation } from './navigation.js'
import { initializeRouter } from './router.js'
import { Header } from './components/Header.js'
import {Footer} from './components/Footer.js'

document.querySelector("#header-root").innerHTML = Header();
document.querySelector("#footer-root").innerHTML = Footer();


initNavigation();

initializeRouter();

