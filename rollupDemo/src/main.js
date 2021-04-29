import { name } from './modules/myModole';
import Greeter from './modules/Greeter';
import './sty.css'

const container = '<div class="container" style="color: green">内容1</div>'
document.getElementById('container').innerHTML = container;
const a = new Greeter('ss');
a.greet()
console.log('hello' + name);

