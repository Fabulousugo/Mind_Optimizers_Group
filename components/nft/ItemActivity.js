import { CgArrowsExchangeV } from 'react-icons/cg'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { useState } from 'react'
import { AiOutlineUp, AiOutlineDown } from 'react-icons/ai'
import { dummyEvents } from '../../static/dummyEvents'
import EventItem from './itemActivity/EventItem'

/*This is a React functional component called "ItemActivity" that renders a toggleable section displaying item activity. 
The component uses several imported icons, the useState hook, and a dummy data of events imported from a static file. 
The component's JSX structure includes a wrapper div, a title div that toggles the visibility of the activity table when clicked, a filter div, 
and a table header div. Inside the activity table, the component maps over the dummyEvents array and renders an EventItem component for each event, passing the event object as a prop. Each EventItem component will display information about the event, 
such as the event name, price, from and to address, and date.*/
const style = {
  wrapper: `w-full mt-8 border border-[#151b22] rounded-xl bg-[#303339] overflow-hidden `,
  title: `bg-[#262b2f] px-6 py-4 flex items-center`,
  titleLeft: `flex-1 flex items-center text-xl font-bold`,
  titleIcon: `text-3xl mr-2`,
  titleRight: `text-xl`,
  filter: `flex items-center border border-[#151b22] mx-4 my-6 px-3 py-4 rounded-xl bg-[#363840]`,
  filterTitle: `flex-1`,
  tableHeader: `flex w-full bg-[#262b2f] border-y border-[#151b22] mt-8 px-4 py-1`,
  eventItem: `flex px-4`,
  ethLogo: `h-5 mr-2`,
  accent: `text-[#2081e2]`,
}

const ItemActivity = () => {
  const [toggle, setToggle] = useState(true)
  return (
    <div className={style.wrapper}>
      <div className={style.title} onClick={() => setToggle(!toggle)}>
        <div className={style.titleLeft}>
          <span className={style.titleIcon}>
            <CgArrowsExchangeV />
          </span>
          Item Activity
        </div>
        <div className={style.titleRight}>
          {toggle ? <AiOutlineUp /> : <AiOutlineDown />}
        </div>
      </div>
      {toggle && (
        <div className={style.activityTable}>
          <div className={style.filter}>
            <div className={style.filterTitle}>Filter</div>
            <div className={style.filterIcon}>
              {' '}
              <AiOutlineDown />{' '}
            </div>
          </div>
          <div className={style.tableHeader}>
            <div className={`${style.tableHeaderElement} flex-[2]`}>Event</div>
            <div className={`${style.tableHeaderElement} flex-[2]`}>Price</div>
            <div className={`${style.tableHeaderElement} flex-[3]`}>From</div>
            <div className={`${style.tableHeaderElement} flex-[3]`}>To</div>
            <div className={`${style.tableHeaderElement} flex-[2]`}>Date</div>
          </div>
          {dummyEvents.map((event, id) => (
            // <EventItem key={id} event={event} />
            <EventItem key={id} event={event}/>
          ))}
        </div>
      )}
    </div>
  )
}

export default ItemActivity
