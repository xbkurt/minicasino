import ComeOnLogo from 'images/logo.svg';
import './index.scss';

function Image() {
  return (
    <div className='img-header'>
      <img src={ComeOnLogo} alt='React Logo' />
    </div>
  );
}

export default () => <Image />;
