import './styles.css';
import {format} from 'date-fns';

function App() {
  return (
    <>
      <div className='header'>
        <div className='head1'>
          <img className="nFimg" src="https://uploads-ssl.webflow.com/5ed0f381d2b21c219f260b60/5ee31dc8601c7f4fb62cb4c1_n17r-logo-red.png" alt="<nFactorial logo>" />
          <input type="text" />
        </div>

        <div className='date'>
          {format(new Date(), 'dd.MM.yyyy hh:mm')}
        </div>
      </div>
      <div className="wrapper">
        <div className="hey">
          hey
        </div>
          
        <div className="lets">
          let's
        </div>

        <div className="give">
          give
        </div>

        <div className="all">
          all
        </div>

        <div className="youcan">
          you can
        </div>
      </div>

    </>
  );
}

export default App;
