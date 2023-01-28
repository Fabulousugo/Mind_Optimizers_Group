import Link from 'next/link'
import Router from 'next/router'
import React, { cloneElement, useState } from 'react'
import { MdLocalPrintshop } from 'react-icons/md'
import { sanityClient, urlFor } from '../sanity'
// import { urlFor } from '../sanity';
import { Route } from 'react-router-dom'


/*This is a functional component called "CollectionCard" that is being exported and used to display a card with a title and an image. 
The card also has a click event that redirects the user to a new page, the path of which is determined by the contractAddress passed as a prop to the component. 
The component is using various styling classes that are defined in the "style" object at the top of the file, and is also using the "Router" and "Link" components from the "next/router" and "next/link" libraries,
 respectively, to handle client-side routing. Additionally, it's using "sanityClient" and "urlFor" functions from '../sanity' to handle image url. It's also using "MdLocalPrintshop" and "react-icons/md" for icons.*/
const style = {
  wrapper: `bg-[#303339] max-w-sm flex-auto w-[14rem] h-[30rem] my-10 mx-5 overflow-hidden cursor-pointer rounded-xl hover:border-solid hover:shadow-2xl hover:bg-grey-100 hover:scale-105 transition transform duration-100 ease-out border-dashed border-2 border-[#6e7687] `,
  imagecontainer: `h-2/3 w-full overflow-hidden`,
  imgtag: `h-full w-full`,
  infoconainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white mx-4`,

  title: `flex flex-col justify-center ml-4 text-white`,
}

const CollectionCard = ({ title, image, contractAddress }) => {
  // console.log(contractAddress)

  return (
    <div
      className={style.wrapper}
      onClick={() => {
        Router.push({
          pathname: `contract/${contractAddress}`,
        })
      }}
    >
      <div className={style.imagecontainer}>
        <img
          className={style.imgtag}
          src={urlFor(image).auto('format')}
          alt={image}
        />
      </div>
      <div className={style.imagecontainer}>
        <div className="py-8 text-center text-2xl text-white">{title}</div>
      </div>
    </div>
  )
}

export default CollectionCard
