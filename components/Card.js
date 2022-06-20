import { useContext } from 'react'
import { NomadsContext } from '../context/NomadsContext'
import { SiTinder } from 'react-icons/si'
import CardHeader from './CardHeader'
import CardFooter from './CardFooter'
import NomadsCardItem from './NomadsCardItem'

const style = {
  wrapper: `h-[45rem] w-[27rem] flex flex-col rounded-lg overflow-hidden`,
  cardMain: `w-full flex-1 relative flex flex-col justify-center items-center bg-blue-100`,
  noMoreWrapper: `flex flex-col justify-center items-center absolute`,
  tinderLogo: `text-5xl text-red-500 mb-4`,
  noMoreText: `text-xl text-white`,
  swipesContainer: `w-full h-full overflow-hidden`,
}

const Card = () => {
  const { cardsData } = useContext(NomadsContext)

  return (
    <div className={style.wrapper}>
      <CardHeader />
      <div className={style.cardMain}>
        <div className={style.noMoreWrapper}>
          <SiTinder className={style.tinderLogo} />
          <div className={style.noMoreText}>
            No More Profiles in your Location...
          </div>
        </div>
        <div className={style.swipesContainer}>
          {cardsData.map((card, index) => (
            <NomadsCardItem card={card} key={index} />
          ))}
        </div>
      </div>
      <CardFooter />
    </div>
  )
}

export default Card
