import sandwich from '../../assets/sandwich.png';
import pizza from '../../assets/pizza.png';
import tacos from '../../assets/tacos.png';
import shawarma from '../../assets/shawarma.png';

function TopPlates() {
  const plates: { id: number, img: string, name: string, desc: string, price: string }[] = [
    { id: 1, img: tacos, name: "tacos", desc: "tacos mix lherba", price: "36dh" },
    { id: 2, img: pizza, name: "pizza", desc: "tacos mix lherba", price: "45dh" },
    { id: 3, img: shawarma, name: "shawarma", desc: "tacos mix lherba", price: "35dh" },
    { id: 4, img: sandwich, name: "sandwich", desc: "tacos mix lherba", price: "22dh" },
  ];

  return (
    <section className="flex flex-col items-center gap-5 border border-red-800 p-4">
      <span className="px-4 py-2 text-lg font-bold">Our Special Dishes</span>
      <p className="p-2 max-w-xl text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam repudiandae dolorum consectetur amet,
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {plates.map((p) => (
          <div
            className="flex flex-col  w-[340px] h-[420px] items-center bg-white shadow-md rounded overflow-hidden"
            key={p.id}
          >
            <div className="relative w-full h-[200px]">
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-2 right-2 bg-black text-white px-2 py-4 rounded-full font-bold text-sm">
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
  );
}

export default TopPlates