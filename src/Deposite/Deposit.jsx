const Deposit = () => {
  const handleClick = () => {
    console.log(" ok bye");
    const depositMoney = document.getElementById("input-id");
    const depositAmountString = depositMoney.value;
    const depositAmount = parseFloat(depositAmountString);
    console.log(depositAmountString);

    const totalDepo = document.getElementById("total-depo");
    const PreviousCountMoneyString = totalDepo.innerText;
    const PreviousCountMoney = parseFloat(PreviousCountMoneyString);
    console.log(PreviousCountMoney);

    const currentTotal = depositAmount + PreviousCountMoney;
    totalDepo.innerText = currentTotal;

    depositMoney.value = "";
  };

  return (
    <div id="donation">
      <p className="text-xl lg:text-4xl py-3 text-center text-red-800">Show Your love 💙</p>

      <div className=" columns-1 gap-4 grid  lg:grid-cols-2 md:grid-cols-2  w-full lg:w-9/12 mx-auto text-white ">
        <section className="bg-rose-500 w-full lg:-w-0 p-10 mb-2 lg:mb-0">
          <p className="text-xs lg:text-2xl">Donate here</p>
          <input
            type="text"
            id="input-id"
            placeholder="donate"
            className="bg-white text-black px-1 lg:px-2 py-1 lg:py-2 rounded-lg"
          />

          <button
            onClick={handleClick}
            id="btn-deposit"
            className="text-xs px-2 lg:text-xl py-1 lg:px-3 lg:py-2 bg-purple-400 rounded-xl text-white"
          >
            Donate
          </button>
        </section>

        <section className="bg-sky-500 p-5 w-full lg:-w-0">
          <p className="text-xl lg:text-2xl text-center">Your Donation</p>
          <p className="text-2xl lg:text-6xl text-center">
            $ <span id="total-depo">00</span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Deposit;
