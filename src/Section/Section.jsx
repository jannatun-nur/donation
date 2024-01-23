import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";

const Section = () => {
    const [donation, SetDonation] = useState([]);

    useEffect( ()=>{
        fetch('section.json')
        .then(res => res.json())
        .then(data =>SetDonation(data))
    },[])
  return (
    <div>
      <div>
        {
           donation.map( donations =><Card key={donations} donations={donations}></Card> )
        }
      </div>
    </div>
  );
};

export default Section;
