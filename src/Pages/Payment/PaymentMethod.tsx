interface appState {
    setShowComponent:(item:any) =>void
}

const PaymentMethod = ({ setShowComponent }:appState) => {
  return (
    <div className="w-screen h-fit flex flex-col items-center z-10 fixed left-0 right-0 top-0 bottom-0 backdrop-blur-sm  bg-[#101c161d]">
      <div className="m-auto flex flex-col items-center  mx-auto w-[450px] h-[590px] hover:shadow-lg shadow-md bg-white rounded-[15px] mt-2 gap-2">
        <div className="flex flex-col items-center w-[432px] h-[500px] mt-4 font-Roboto">
          <div className="flex justify-center items-center bg-blue-400 bg-gradient-to-l  w-[432px] h-[250px] rounded-[8px]">
            <div className=" flex flex-col w-[316px] h-[190px] rounded-[20px] shadow-lg p-4 bg-blue-200/10 bg-opacity-20 backdrop-filter backdrop-blur-lg border border-white">
              <div className="flex flex-col  w-[280px] h-[170px] justify-between">
                <div className="flex flex-row justify-between w-[280px]">
                  <img
                    src="./images/gouferwhite.svg"
                    alt=""
                    className="w-[42px] h-[13px]"
                  />
                  <img
                    src="./images/PayPass icon.svg"
                    alt=""
                    className="w-[20px] h-[24px]"
                  />
                </div>

                <div className="flex flex-row justify-between w-[280px]">
                  <div className="flex flex-col text-white">
                    <h1 className="font-Manrope text-[16px]">
                      1234 1234 1234 1234
                    </h1>
                    <p className="font-Manrope text-[12px]">06/24</p>
                  </div>
                  <img
                    src="./images/whitemastacard.svg"
                    alt="master card"
                    className="w-[45px] h-[32px]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col  mt-1 w-[432px] h-[65px]">
            <h1 className=" text-[#322F37] text-[18px] ">
              Update payment method
            </h1>

            <p className="pt-3 text-[#605D66] text-[14px]">
              Update your card details.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center text-[#c7c7c8] mt-2">
            <div className="flex flex-row w-[432px] h-[70px] justify-between items-center">
              <div className="flex flex-col w-[304px] h-[66px]">
                <h2 className="text-[#49454F] text-[14px]">Name on card</h2>

                <div className="flex flex-row w-[304px] h-[40px] border border-[#9eabbf] items-center justify-center rounded-[8px] mt-2">
                  <input
                    type="text"
                    className="w-[276px] h-[20px] outline-none text-[#aa9ac49e]"
                  />
                </div>
              </div>

              <div className="flex flex-col w-[112px] h-[66px]">
                <h2 className="text-[#49454F] text-[14px]">Expiry</h2>

                <div className="flex flex-row w-[112px] h-[40px] border border-[#9eabbf] items-center justify-center rounded-[8px] mt-2">
                  <input
                    type="text"
                    className="w-[84px] h-[20px] outline-none text-[#322F37]"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-row w-[432px] h-[70px] justify-between items-center pt-4">
              <div className="flex flex-col w-[304px] h-[66px] text-[14px]">
                <p className="text-[#49454F]">Card number</p>

                <div className="flex flex-row w-[304px] h-[40px] border border-[#9eabbf] items-center justify-center  rounded-[8px] mt-2">
                  <div className="flex  w-[280px] h-[24px] gap-2">
                    <img src="public/images/masta.svg" alt="card" />{" "}
                    <input
                      type="text"
                      className=" outline-none text-[#322F37] w-[260px]"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-[112px] h-[66px]  text-[14px]">
                <p className="text-[#49454F] font-Roboto">CVV</p>

                <div className="flex flex-row w-[112px] h-[40px] border border-[#9eabbf] items-center justify-center rounded-[8px] mt-2">
                  <input
                    type="text"
                    className="w-[84px] h-[20px] outline-none text-[#322F37]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex  flex-row items-center justify-center gap-4 w-[432px] h-[45px] mb-2">
          <button
            className="w-[210px] h-[40px] rounded-[50px] text-[#49454F] bg-white border border-[#79747E] hover:bg-gray-300 transition-colors duration-300"
            onClick={() => setShowComponent("none")}
          >
            Cancel
          </button>
          <button className="w-[210px] h-[40px] rounded-[50px] bg-blue-400 hover:bg-blue-600 transition-colors duration-300 text-white">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
