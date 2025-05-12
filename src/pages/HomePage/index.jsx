import { Uloha1 } from '../../components/Uloha1';
import { Uloha2 } from '../../components/Uloha2';
import { Uloha3 } from '../../components/Uloha3';
import { Bonus1 } from '../../components/Bonus1';
import { Bonus2 } from '../../components/Bonus2';
import { Bonus3 } from '../../components/Bonus3';
import { Bonus4 } from '../../components/Bonus4';
import './style.css';

export const HomePage = () => (
  <div className='container'>
    <h1>React stav</h1>
    <h2>Úloha 1</h2>
    <Uloha1 />
    <h2>Úloha 2</h2>
    <Uloha2 />
    <h2>Úloha 3</h2>
    <Uloha3 />
    <h2>Bonus 1</h2>
    <Bonus1 />
    <h2>Bonus 2</h2>
    <Bonus2 />
    <h2>Bonus 3</h2>
    <Bonus3 />
    <h2>Bonus 4</h2>
    <Bonus4 />
  </div>
);
