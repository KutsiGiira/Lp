import Hiro from '../../assets/res.jpg';
import food from '../../assets/food.png';
import fb from '../../assets/facebook.png';
import insta from '../../assets/instagram.png';
import x from '../../assets/twitter.png';
import { t } from 'i18next';
function Hero(props: { lng: string; }){
    return (
      <main className='flex'>
        <section className='flex-2 ml-60 mr-60 flex flex-col gap-10 mt-60'>
            <div>
                <p className='text-7xl w-[70%]'>{t('HeroSTitle')}</p>
                <p className='text-4xl font-light w-[70%] ml-2 mt-15'>{t('HeroTitle')}</p>
            </div>
            <div className='flex flex-row gap-2'>
                <button className="bg-[#D96F32] p-2 rounded-tl-xl rounded-br-xl text-white font-semibold  hover:cursor-pointer">{t('BookTable')}</button>
                <button className="bg-[#0C0950] p-2 rounded-tl-xl rounded-br-xl text-white font-semibold  hover:cursor-pointer">{t('MenuButton')}</button>
            </div>
            <div>
                <ul className='flex gap-3'>
                    <li><img src={fb} alt="facebook" width={24}/></li>
                    <li><img src={insta} alt="instagram" width={24}/></li>
                    <li><img src={x} alt="twitter" width={24}/></li>
                </ul>
            </div>
        </section>
        <section className='flex-1'>
            <img src={Hiro} alt="rest" width={480} className={`relative ${props.lng === 'ar'? 'top-25 left-30' : 'top-20 right-20' }`}/>
            <img src={food} alt="plate" width={380}   className={`relative z-10 ${props.lng === 'ar'? 'bottom-45 left-60' : 'bottom-50 right-70' }`}/>
        </section>
      </main>
    )
}
export default Hero