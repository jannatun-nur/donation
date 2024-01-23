import { useEffect } from "react";
import { useState } from "react";

const Section = () => {
    const [donation, SetDonation] = useState([]);

    useEffect( ()=>{
        fetch('section.json')
        .then(res => res.json())
        .then(data =>SetDonation(data);)
    },[])
  return (
    <div>
      <div>
        {
            donation.map()
        }
      </div>
    </div>
  );
};

export default Section;
