import './about.styles.scss';
import CustomButton from '../../components/custom-button/custom-button.component';

function AboutPage() {
  return (
    <div class='submenu-wraper'>
      <div class='submenu-lefthand'>
        <div className='submenu-item'>
          <div className='submenu-item-left'>
            <p>Name</p>
          </div>
          <div className='submenu-item-right'>
            <p>Nathan</p>
          </div>
        </div>
        <div className='submenu-item'>
          <div className='submenu-item-left'>
            <p>Age</p>
          </div>
          <div className='submenu-item-right'>
            <p>28</p>
          </div>
        </div>
        <div className='submenu-item'>
          <div className='submenu-item-left'>
            <p>Location</p>
          </div>
          <div className='submenu-item-right'>
            <p>Sydney</p>
          </div>
        </div>
        <div className='techskills'></div>
      </div>
      <div className='submenu-righthand'>
        <p>
          Nathan is a fullstack developer based in Sydney, Australia. You can
          download his resume here.
          <br></br>
          <CustomButton type='submit'>Download Resume</CustomButton>
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
