import { Button } from "@material-ui/core";

function Card({ onClick }) {
  return (
    <div className="bg-white rounded-2xl shadow-full">
      <div className="flex justify-end pr-8">
        <img
          className="h-12 shadow rounded-full -mr-3 -mt-5"
          src="https://app.dodoex.io/assets/ethereum/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48/logo.png"
          alt="jj"
        />
        <img
          className="h-12 shadow rounded-full -mt-5 "
          src="https://app.dodoex.io/assets/ethereum/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48/logo.png"
          alt=""
        />
      </div>
      <div className="flex flex-col p-7 pt-0">
        <p className="text-xl font-normal">USDT-USDC LP</p>
        <div className="flex justify-center items-center mt-12 mb-6">
          <div className="flex flex-col items-center justify-center mr-5 ml-5">
            <p className="text-3xl font-normal">10.56%</p> <p> USDT</p>
          </div>
          <p className="text-2xl font-normal">/</p>
          <div className="flex flex-col items-center justify-center mr-5 ml-5">
            <p className="text-3xl font-normal">10.45%</p> <p>USDC APR</p>
          </div>
        </div>
        <hr className="border-t border-primary w-full" />
        <div className="flex items-center justify-between mt-5 mb-2">
          <p>Reward Token</p>
          <img
            className="h-4 shadow rounded-full"
            src="https://app.dodoex.io/assets/ethereum/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48/logo.png"
            alt="jj"
          />
        </div>
        <div className="flex justify-between mb-2">
          <p>Value Locked</p>
          <p>$44,359,995.53</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>My Share</p>
          <p>$0(0%)</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Available Balance</p>
          <p>$0</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>My Reward</p>
          <p>$0(0%)</p>
        </div>
        <div className="flex mt-5 space-x-2 justify-center items-center">
          <Button
            onClick={onClick}
            variant="contained"
            classes={{
              root: "rounded-xl tracking-normal py-3 md:text-base lg:text-sm xl:text-base text-sm w-full",
            }}
            color="secondary"
          >
            Stack USDT
          </Button>
          <Button
            onClick={onClick}
            variant="contained"
            classes={{
              root: "rounded-xl tracking-normal py-3 md:text-base lg:text-sm xl:text-base text-sm w-full",
            }}
            color="secondary"
          >
            Stack USDC
          </Button>
        </div>
      </div>
    </div>
  );
}
export default Card;
