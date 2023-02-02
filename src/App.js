import './default.scss';
import ScribeText from './components/ScribeText/ScribeText';

export default function App() {
  return (
    <div className='App'>
      <ScribeText msg='This animation was pretty tedious to do!' delay={150} />
    </div>
  );
}