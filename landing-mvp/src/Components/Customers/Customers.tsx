function Customers(){
const Cus: { id: number; img: string; comment: string; name: string }[] = [
  {
    id: 1,
    img: "/images/customers/john.jpg",
    comment: "Amazing food and great service! Highly recommended.",
    name: "John Doe",
  },
  {
    id: 2,
    img: "/images/customers/fatima.jpg",
    comment: "Delicious meals and cozy atmosphere. Loved it!",
    name: "Fatima Zahra",
  },
  {
    id: 3,
    img: "/images/customers/ali.jpg",
    comment: "Best restaurant experience I've had in a long time.",
    name: "Ali Bennani",
  },
  {
    id: 4,
    img: "/images/customers/sara.jpg",
    comment: "Wonderful staff and the food was just perfect.",
    name: "Sara Mounir",
  },
];

    return(
        <section>
            <h1>Our Happy Customers</h1>
            <p className='leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga iste quae adipisci ab molestias architecto officia, earum aut ducimus magni nulla voluptatem necessitatibus hic deleniti. Nam cum tenetur est possimus.</p>
        </section>
    )
}
export default Customers;