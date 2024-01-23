



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
          <div className="grid grid-cols-2 gap-4 w-9/12 mx-auto text-white">
       <section className="bg-sky-500 p-5">
       <p>Please deposit</p>
       <input type="text" id="input-id" className="bg-white text-black" />

       <button onClick={handleClick} id="btn-deposit">Deposit</button>
     </section>

     <section className="bg-sky-500 p-5">
       <p>Total amount</p>
       <p>
         $ <span id="total-depo">00</span>
       </p>
     </section>


   </div>
    </div>
 );
};

export default Deposit;
