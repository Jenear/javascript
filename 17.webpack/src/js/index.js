import { foo, bar } from './main';
import data from '../data/data.json';
import '../css/style.css'

document.write('index.js is working' + '<br />')
document.write(foo(3) + '<br />')
document.write(bar(3) + '<br />')
document.write(JSON.stringify(data))