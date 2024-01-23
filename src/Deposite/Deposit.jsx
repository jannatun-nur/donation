



const Deposit = () => {
 const handleClick = () => {
    console.log(' ok bye');
    const depositMoney = document.getElementById('input-id');
    const depositAmountString = depositMoney.value;
    const depositAmount = parseFloat(depositAmountString)
    console.log(depositAmountString);

    const totalDepo = document.getElementById('total-depo');
    const PreviousCountMoneyString = totalDepo.innerText;
    const PreviousCountMoney = parseFloat(PreviousCountMoneyString)
    console.log(PreviousCountMoney);

    const currentTotal = depositAmount + PreviousCountMoney
    totalDepo.innerText = currentTotal;

   depositMoney.value ='';
 };

 return (
    <div>
       <p className="text-xl lg:text-4xl py-3">Show Your love 💙</p>
      
          <div className=" columns-1 gap-4 lg:grid grid-cols-2 w-9/12 mx-auto text-white">
       <section className="bg-rose-500 p-10">
       <p>Donate here</p>
       <input type="text" id="input-id" placeholder="donate" className="bg-white text-black py-2 rounded-lg" />

       <button onClick={handleClick} id="btn-deposit"></button>
     </section>

     <section className="bg-sky-500 p-5">
       <p>Your Donation</p>
       <p>
         $ <span id="total-depo">00</span>
       </p>
     </section>


   </div>
    </div>
 );
};

export default Deposit;
