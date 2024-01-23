import './Deposit'
const Deposit = () => {
    return (
        <div>
         <div className="grid grid-cols-2 gap-4 w-9/12 mx-auto text-white">
            <section className="bg-sky-500 p-5">
        <p>Please deposit</p>
        <input type="text" id="input-id" className="bg-white text-black" />
        <button id="deposit"
        
        
        >Deposit</button>
            </section>
            <section className="bg-sky-500 p-5">
        <p>Total amount</p>
        <input type="text" className="bg-white text-black" />
            </section>

         </div>
         
        </div>

        
    );
};

export default Deposit;