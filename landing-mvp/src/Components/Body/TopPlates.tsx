import sandwich from '../../assets/sandwich.png';
import pizza from '../../assets/pizza.png';
import tacos from '../../assets/tacos.png';
import shawarma from '../../assets/shawarma.png';
import dish from '../../assets/dish.png';
import { t } from 'i18next';
function TopPlates() {
  const plates: { id: number, img: string, name: string, desc: string, price: string }[] = [
    { id: 1, img: tacos, name: "tacos", desc: "tacos mix lherba", price: "36dh" },
    { id: 2, img: pizza, name: "pizza", desc: "tacos mix lherba", price: "45dh" },
    { id: 3, img: shawarma, name: "shawarma", desc: "tacos mix lherba", price: "35dh" },
    { id: 4, img: sandwich, name: "sandwich", desc: "tacos mix lherba", price: "22dh" },
  ];

  return (
    <>

    <section className="flex flex-col items-center gap-5 p-4">
      <span className="px-4 py-2 text-lg font-bold">Our Special Dishes</span>
      <p className="p-2 max-w-xl text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam repudiandae dolorum consectetur amet,
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {plates.map((p) => (
          <div
            className="flex flex-col  w-[340px] h-[420px] items-center bg-white shadow-md rounded overflow-hidden hover:scale-110"
            key={p.id}
          >
            <div className="relative w-full h-[200px]">
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-full"
              />
              <span className="absolute top-2 right-2 bg-black text-white px-2 py-4 rounded-full font-bold text-sm ">
                {p.price}
              </span>
            </div>

            <div className="bg-gray-100 flex-1 w-full text-center p-2">
              <p className="font-bold text-xl">{p.name}</p>
              <p className="text-sm text-gray-700 mt-1">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    <section className='flex w-[60%] ml-auto mr-auto'>
      <div>
        <img src={dish} alt="dish" width="100%" />
      </div>
      <div className='mt-auto mb-auto flex flex-col justify-evenly gap-5'>
        <h2 className='text-center font-semibold text-2xl '>Welcome to our restaurant</h2>
        <p className='leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga iste quae adipisci ab molestias architecto officia, earum aut ducimus magni nulla voluptatem necessitatibus hic deleniti. Nam cum tenetur est possimus.</p>

      <div className="flex gap-2 flex-wrap mt-4">
        <button className="bg-[#D96F32] px-4 py-2 rounded-tl-xl rounded-br-xl text-white font-semibold hover:cursor-pointer">
            {t('BookTable')}
        </button>
        <button className="bg-[#0C0950] px-4 py-2 rounded-tl-xl rounded-br-xl text-white font-semibold hover:cursor-pointer">
            {t('MenuButton')}
        </button>
            </div>
      </div>
    </section>
        </>
  );
}

export default TopPlates