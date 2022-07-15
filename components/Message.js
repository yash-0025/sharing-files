import CardHeader from "./CardHeader"
import CardFooter from "./CardFooter"

const style = {
  wrapper: `h-[45rem] w-[27rem] flex flex-col rounded-lg overflow-hidden`,
  cardMain: `w-full flex-1 relative flex flex-col justify-center items-center bg-blue-100`,
}

const Message = () => {
  return (
    <div className={style.wrapper}>
      <CardHeader />
      <div className={style.cardMain}>
              <div>
                <h1>Chat</h1>
              </div>
      </div>
      <CardFooter />
    </div>
  )
}

export default Message
