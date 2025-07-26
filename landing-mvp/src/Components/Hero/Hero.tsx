import Hiro from '../../assets/res.jpg';
import food from '../../assets/food.png';
import fb from '../../assets/facebook.png';
import insta from '../../assets/instagram.png';
import x from '../../assets/twitter.png';
import { t } from 'i18next';
function Hero(props: { lng: string; }){
return (
  <main className="flex flex-col lg:flex-row min-h-screen w-full overflow-x-hidden">
    {/* Left Section */}
    <section className="flex-1 flex flex-col gap-6 px-6 sm:px-10 lg:px-16 py-20 w-full">
      <div>
        <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl break-words">
          {t('HeroSTitle')}
        </p>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-light mt-4 max-w-2xl">
          {t('HeroTitle')}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-2 flex-wrap mt-4">
        <button className="bg-[#D96F32] px-4 py-2 rounded-tl-xl rounded-br-xl text-white font-semibold hover:cursor-pointer">
          {t('BookTable')}
        </button>
        <button className="bg-[#0C0950] px-4 py-2 rounded-tl-xl rounded-br-xl text-white font-semibold hover:cursor-pointer">
          {t('MenuButton')}
        </button>
        <hr className='bg-red-800'></hr>
      </div>

      {/* Social Icons */}
      <div className="mt-4">
        <ul className="flex gap-3">
          <li><img src={fb} alt="facebook" className="w-8 h-8" /></li>
          <li><img src={insta} alt="instagram" className="w-8 h-8" /></li>
          <li><img src={x} alt="twitter" className="w-8 h-8" /></li>
        </ul>
      </div>
    </section>

    {/* Right Section */}
    <section className="flex-1 relative flex justify-center items-center overflow-hidden min-h-[300px] sm:min-h-[500px]">
      <img
        src={Hiro}
        alt="rest"
        className={`w-[250px] sm:w-[350px] lg:w-[520px] h-auto absolute 
          ${props.lng === 'ar' ? 'top-10 left-5 sm:left-10' : 'top-5 right-5 sm:right-10'}`}
      />
      <img
        src={food}
        alt="plate"
        className={`w-[200px] sm:w-[300px] lg:w-[450px] h-auto absolute z-10 
          ${props.lng === 'ar' ? 'bottom-5 left-10 sm:left-20' : 'bottom-5 right-10 sm:right-24'}`}
      />
    </section>
  </main>
)
}
export default Hero