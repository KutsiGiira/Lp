import Hiro from '../../assets/res.jpg';
import food from '../../assets/food.png';
import fb from '../../assets/facebook.png';
import insta from '../../assets/instagram.png';
import x from '../../assets/twitter.png';
import { t } from 'i18next';
function Hero(props: { lng: string; }){
    return (
    <main className="flex flex-col lg:flex-row border border-green-900 h-screen w-full">
      <section className="flex-1 flex flex-col gap-6 mt-40 ml-20 px-4 lg:px-16 w-full">
        <div>
          <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl w-full">
            {t('HeroSTitle')}
          </p>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-light w-full md:w-[70%] mt-4">
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
        </div>

        <div className="mt-4">
          <ul className="flex gap-3">
            <li><img src={fb} alt="facebook" width={32} /></li>
            <li><img src={insta} alt="instagram" width={32} /></li>
            <li><img src={x} alt="twitter" width={32} /></li>
          </ul>
        </div>
      </section>

      <section className="flex-1 relative flex justify-center items-center overflow-hidden">
        <img
          src={Hiro}
          alt="rest"
          width={520}
          className={`absolute ${props.lng === 'ar' ? 'top-20 left-10' : 'top-10 right-50'}`}
        />
        <img
          src={food}
          alt="plate"
          width={450}
          className={`absolute z-1  ${props.lng === 'ar' ? 'bottom-10 left-20' : 'bottom-10 right-100'}`}
        />
      </section>
    </main>
    )
}
export default Hero