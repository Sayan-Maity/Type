import '../App.css'

type GreetProps = {
    name: string
    messageCount?: number
    isLoggedIn : boolean
}
const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props

  return (
    <div>
        <h1>Greet Page</h1>
        {props.isLoggedIn ? (
        <>
            <p>Welcome</p>
            <p>{props.name}</p>
            <p>{messageCount}</p>
        
        </>
        ) : (
        <>
        <p>You are not logged in !!</p>
        </>
        )}
        
      
    </div>
  )
}

export default Greet
