import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';

function Customers(){
const Cus: { id: number; comment: string; name: string }[] = [
  {
    id: 1,
    comment: "Amazing food and great service! Highly recommended.",
    name: "John Doe",
  },
  {
    id: 2,
    comment: "Delicious meals and cozy atmosphere. Loved it!",
    name: "Fatima Zahra",
  },
  {
    id: 3,
    comment: "Best restaurant experience I've had in a long time.",
    name: "Ali Bennani",
  },
  {
    id: 4,
    comment: "Wonderful staff and the food was just perfect.",
    name: "Sara Mounir",
  },
];
    return(
        <section className='flex flex-col gap-5'>
            <h1 className='text-center font-bold text-3xl'>Our Happy Customers</h1>
            <p className='leading-relaxed text-center font-semibold text-gray-700 w-[40%] ml-auto mr-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga iste quae adipisci ab molestias architecto officia, earum aut ducimus magni nulla voluptatem necessitatibus hic deleniti. Nam cum tenetur est possimus.</p>
          <div className='flex flex-col justify-center '>
            <Slide transitionDuration={400} indicators={true}>
            {Cus.map((c, index)=> (
                <div key={index} className='bg-white-300 text-center w-[50%] ml-auto mr-auto p-10 mt-2 shadow-2xl'>
                    <p>{c.comment}</p>
                    <p className='font-semibold'>{c.name}</p>
                </div>
              ))} 
            </Slide>
          </div>
        </section>
    )
}
export default Customers;