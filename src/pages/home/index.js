import React from "react";
import { LandingTemplate } from "layout";
import Layer1 from "../../images/Layer-9.png";
import Layer2 from "../../images/Layer-10.png";
import Layer3 from "../../images/Layer-11.png";
import DogImg from "../../images/DogeSpaceTree.png";
import iconDown from "../../images/icon-down.svg";
import { Link } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";
function Home() {
  const links = [
    {
      value: "Launch App",
      variant: "contained",
      color: "primary",
      href: "/exchange",
    },
    // {
    //   value: "Blog",
    //   variant: "contained",
    //   color: "primary",
    //   href: "../../../https://www.wsum.network/blog/",
    //   target:"_blank",
    // },
    // {
    //   value: "WSUM.ART",
    //   variant: "contained",
    //   color: "secondary",
    //   href: "../../../https://www.wsum.network/",
    //   target:"_blank",
    // },
    // {
    //   value: "WSUM Dojo",
    //   variant: "outlined",
    //   color: "primary",
    //   href: "/",
    // },
  ];
  const cards = [
    {
      src: Layer1,
      title: "Liquidity Protocol",
      desc: "WSUM is a liquidity protocol powered by the Proactive Market Maker (PMM) algorithm and built for capital efficiency",
    },
    {
      src: Layer2,
      title: "Contract-Fillable Liquidity",
      desc: "WSUM’s contract-fillable liquidity is comparable to centralized exchanges (CEXs)",
    },
    {
      src: Layer3,
      title: "Price Discovery",
      desc: "WSUM offers a low barrier-to-entry, pain-free token issuance mechanic for long tail assets",
    },
  ];
  const cards2 = [
    {
      title: "What is PMM?",
      desc: "Developed by the WSUM team, Proactive Market Maker (PMM) is an oracle-aided algorithm with an advanced pricing formula that provides contract-fillable liquidity. Traders get lower slippage with PMM than AMMs.",
    },
    {
      title: "Any impermanent loss?",
      desc: "Short answer: there is reduced impermanent loss on WSUM compared to other AMM platforms. Long answer: On WSUM, there is no AMM-specific impermanent loss caused by asset reallocation. LPs do need to beware of market/inventory risk associated with market making.",
    },
    {
      title: "Do I have to deposit pair tokens?",
      desc: "No. WSUM allows liquidity providers to deposit any amount of base or quote tokens. You deposit what you have, nothing more. Unlocking single-token deposit gives LPs the flexibility to choose how they want to market-make.",
    },
  ];
  return (
    <LandingTemplate>
      <div className="xl:h-70vh lg:h-45vh md:h-55vh h-90vh md:px-8 mb-48 pb-20 md:pb-0 xl:px-10 px-4 font-sans bg-gray-200">
        <div className="xl:w-11/12 h-full w-full mx-auto md:py-5 py-4 grid md:grid-cols-3 grid-cols-1">
          <div className="w-full order-1 md:order-0 md:col-span-2 flex flex-col pb-10 items-start justify-center">
            <h1 className="text-gray-100 tracking-tight md:text-5xl text-3xl font-extrabold">
              Issue-Trade-Invest your crypto assets with market-leading liquidity
            </h1>
            <div className="md:flex grid grid-cols-3 items-center lg:space-x-5 md:space-x-2 gap-3 md:gap-0 md:py-12 py-10">
              {links?.map((v, k) => {
                return (
                  <Link to={v.href} target={v._blank}>
                    <Button
                      key={k}
                      variant={v.variant}
                      classes={{
                        root: "px-2 rounded-lg tracking-normal py-1 pb-1.5 lg:text-base text-md font-light lg:w-34 md:w-30 w-full",
                      }}
                      color={v.color}
                    >
                      {v.value}
                    </Button>
                  </Link>
                );
              })}
              <Button target="_blank" variant= "contained" color="primary" classes={{root: "px-2 rounded-lg tracking-normal py-1 pb-1.5 lg:text-base text-md font-light lg:w-34 md:w-30 w-full",}} onClick={(e) => (window.location = "https://www.wsum.network/blog/")}>Blog</Button>

              <Button target="_blank" variant= "contained" color="secondary" classes={{root: "px-2 rounded-lg tracking-normal py-1 pb-1.5 lg:text-base text-md font-light lg:w-34 md:w-30 w-full",}} onClick={(e) => (window.location = "https://www.wsum.network")}>WSUM.ART</Button>
            </div>
            <form className="flex" noValidate autoComplete="off">
              <TextField
                placeholder="Email Address"
                type="email"
                variant="outlined"
                inputProps={{
                  className: "text-gray-100 text-sm py-2.5 px-4 bg-white",
                }}
                classes={{
                  root: "py-0 md:w-64 w-60 text-gray-100",
                }}
              />
              <Button
                variant="contained"
                classes={{
                  root: "rounded-tr-lg rounded-br-lg tracking-normal py-1 pb-1.5 md:text-base text-md md:w-26",
                }}
                color="primary"
              >
                Subscribe
              </Button>
            </form>
          </div>
          <div className="flex items-center order-0 md:order-1">
            <img src={DogImg} alt="Dog" width="100%" />
          </div>
        </div>
      </div>
      <div className="">
        <div className="grid bg-gray-200 items-start lg:grid-cols-3 grid-cols-1 w-full gap-12 xl:px-26 md:px-9 px-4 mx-auto -my-48">
          {cards?.map((v, k) => {
            return (
              <div className="bg-white text-center shadow-full rounded-lg p-5 flex flex-col items-center justify-center" style={{minHeight: '347px'}}>
                <img src={v.src} alt="Icon1" className="w-32" />
                <h1 className="pt-6 h-22 text-black-220 font-bold text-2xl leading-6">
                  {v.title}
                </h1>
                <p className="pb-5 text-gray-700 px-1 text-sm md:text-base leading-5">
                  {v.desc}
                </p>
              </div>
            );
          })}
        </div>
        <div className="bg-parallex">
          <div className="bg-indigo-50 min-h-screen flex flex-col items-center justify-center xl:h-screen py-20 md:py-32">
            <h1 className="text-white md:text-5xl text-3xl text-center font-extrabold md:w-10/12 mx-auto">
              On-Chain Liquidity Provider for Everyone
            </h1>
            <div className="md:w-10/12 mx-auto md:-mb-60 -mb-38 md:pt-60 pt-38">
              <h1 className="text-white md:text-3xl text-2xl text-center font-bold tracking-normal">
                Got a question?
              </h1>
              <img src={iconDown} className="mx-auto" alt="iconDown" />
            </div>
          </div>
        </div>
        <div className="grid bg-gray-200 items-start lg:grid-cols-3 grid-cols-1 w-full gap-12 xl:px-26 md:px-9 px-4 mx-auto">
          {cards2?.map((v, k) => {
            return (
              <div className="bg-white shadow-full rounded-lg p-6 md:px-7 flex flex-col justify-center -mt-32 mb-32" style={{minHeight: '256px'}}>
                <h1 className="pt-4 xl:h-20 h-24 text-black-220 leading-6 font-bold text-2xl">
                  {v.title}
                </h1>
                <p className="pb-2 text-gray-700 leading-5 text-sm md:text-base">
                  {v.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </LandingTemplate>
  );
}

export default Home;
