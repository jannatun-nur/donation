import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";

const Section = () => {
  const [donation, SetDonation] = useState([]);

  useEffect(() => {
    fetch("section.json")
      .then((res) => res.json())
      .then((data) => SetDonation(data));
  }, []);
  return (
    <div className="columns-1 lg:grid grid-cols-2 rounded-lg my-6">
      <div>
        <p className="lg:text-4xl text-sky-600">Different way to helps other</p>
        <p className="text-gray-800 pt-2">
          Every human being needs basic need. Without it no one can live
          comfortly.But sometime , some people became victim of situation. They
          can not provide their needs. Kindness try to helps them to get rid of
          the problems. Eveyone should helps other. that's why we are trying to
          a part of your helpsness. Submit your email and information and let's
          make proud of your kind heart.{" "}
        </p>

        {/* form */}
        <section className="p-6  dark:text-gray-800">
          <form
            action=""
            className="container flex flex-col mx-auto space-y-12"
          >
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">First name</label>
                <input
                  id="firstname"
                  type="text"
                  placeholder="First name"
                  className="w-full rounded-md focus:ring focus:ri focus:ri border border-cyan-800 text-gray-800 py-3 bg-white"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Last name</label>
                <input
                  id="lastname"
                  type="text"
                  placeholder="Last name"
                  className="w-full rounded-md focus:ring focus:ri focus:ri border border-cyan-800 text-gray-800 py-3 bg-white"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-md focus:ring focus:ri focus:ri border border-cyan-800 text-gray-800 py-3 bg-white"
                />
              </div>
             
              <div className="col-span-full sm:col-span-2">
                <label className="text-sm">City</label>
                <input
                  id="city"
                  type="text"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ri focus:ri border border-cyan-800 text-gray-800 py-3 bg-white"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label className="text-sm">Donations</label>
                <input
                  id=""
                  type="text"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ri focus:ri border border-cyan-800 text-gray-800 py-3 bg-white"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label className="text-sm">Items</label>
                <input
                  id="zip"
                  type="text"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ri focus:ri border border-cyan-800 text-gray-800 py-3 bg-white"
                />
              </div>
            </div>
            <button></button>
          </form>
        </section>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {donation.map((donations) => (
          <Card key={donations} donations={donations}></Card>
        ))}
      </div>
    </div>
  );
};

export default Section;
