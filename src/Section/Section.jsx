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
    <div className="columns-1 lg:grid grid-cols-2">
        <div>
            <p>Different way to helps other</p>
        </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {
           donation.map( donations =><Card key={donations} donations={donations}></Card> )
        }
      </div>
    </div>
  );
};

export default Section;
