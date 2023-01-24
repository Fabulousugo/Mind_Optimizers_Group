import Image from 'next/image'
import Link from 'next/link'
import appLogo from '../assets/opensea.png'

const style = {
  mainContainer: ` grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 px-[40px] md:px-[45px] lg:px-[55px] xl:px-32 py-14 text-gray-600 space-x-4`,
  mainDiv: `space-y-4 text-grey-800 text-xs`,
  h5Element: `font-bold text-lg `,
  ptag: `text-base text-left`,
}

function Footer() {
  return (
    <div>
      <div className={style.mainContainer}>
        <div className={style.mainDiv}>
          <Link href="/">
            <div className="flex cursor-pointer items-center space-x-4">
              <Image src={appLogo} height={40} width={40} />

              <div className=" text-2xl font-bold">
                <span className="hover:scale-102 transform pr-4 transition duration-200 ease-out hover:text-white ">
                  OptiMint
                </span>
              </div>
            </div>
            {/* <h1 className='text-xl font-bold cursor-pointer'>BaseMint</h1> */}
          </Link>

          <p className={style.ptag}>
          OptiMint is a cutting-edge NFT marketplace company that is revolutionizing the way people buy and sell digital assets.
           They offer a user-friendly platform that allows individuals and businesses to easily discover and invest in unique,
           one-of-a-kind digital collectibles.
          </p>
        </div>
        <div className={style.mainDiv}>
          <h5 className={style.h5Element}>GENERAL</h5>
          <Link href="/collections">
            <div className="transform cursor-pointer text-base transition duration-200 ease-out hover:text-white hover:underline ">
              Explore
            </div>
          </Link>

          <Link href="/collections">
            <div className="transform cursor-pointer text-base transition duration-200 ease-out hover:text-white hover:underline ">
              All Collections
            </div>
          </Link>

          <Link href="/allnfts">
            <div className="transform cursor-pointer text-base transition duration-200 ease-out hover:text-white hover:underline ">
              All NFTs
            </div>
          </Link>
          <Link href="/">
            <div className="transform cursor-pointer text-base transition duration-200 ease-out hover:text-white hover:underline ">
              Stats
            </div>
          </Link>
        </div>

        <div className={style.mainDiv}>
          <h5 className={style.h5Element}>HOST</h5>
          <Link href="/collections">
            <div className="transform cursor-pointer text-base transition duration-200 ease-out hover:text-white hover:underline ">
              Explore
            </div>
          </Link>

          <Link href="/">
            <div className="transform cursor-pointer text-base transition duration-200 ease-out hover:text-white hover:underline ">
              Auctions
            </div>
          </Link>

          <Link href="/">
            <div className="transform cursor-pointer text-base transition duration-200 ease-out hover:text-white hover:underline ">
              Offers
            </div>
          </Link>
          <Link href="/">
            <div className="transform cursor-pointer text-base transition duration-200 ease-out hover:text-white hover:underline ">
              Stats
            </div>
          </Link>
        </div>

        <div className={style.mainDiv}>
          <h5 className={style.h5Element}>ECOSYSTEM</h5>
          <Link href="/collections">
            <div className="transform cursor-pointer text-base transition duration-200 ease-out hover:text-white hover:underline ">
              Buy Mint Token
            </div>
          </Link>

          <Link href="/">
            <div className="transform cursor-pointer text-base transition duration-200 ease-out hover:text-white hover:underline ">
              Trade Mint
            </div>
          </Link>

          <Link href="/">
            <div className="transform cursor-pointer text-base transition duration-200 ease-out hover:text-white hover:underline ">
              Mint RIch List
            </div>
          </Link>

          <Link href="/">
            <div className="transform cursor-pointer text-base transition duration-200 ease-out hover:text-white hover:underline">
              Mint Telegram
            </div>
          </Link>
        </div>
      </div>

      <div className={style.mainContainer}>
        <div className="text-grey-800">
          <div>
            © Copyright 2023 &nbsp;
            <Link href="/">
              <span className="cursor-pointer hover:text-[#0198E1] hover:underline">
                OptiMint
              </span>
            </Link>
            &nbsp; -All Rights Reserved
          </div>
        </div>

        {/* <div className='flexorde  r-last'>Social Media Handles</div> */}
      </div>
    </div>
  )
}

export default Footer
