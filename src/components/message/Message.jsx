import React,{useContext,createContext,useState,useRef} from 'react';
import './Message.scss';
import { TransitionGroup ,CSSTransition} from 'react-transition-group';

const MessageContext = createContext({});


export const useMessage = () => useContext(MessageContext);


const svg= {
  success: <svg t="1713550863811" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4249" width="22"  height='22'><path d="M511.434623 63.564711c-247.428276 0-448.010617 200.582341-448.010617 448.01164 0 247.430322 200.581318 448.01164 448.010617 448.01164 247.432369 0 448.012663-200.581318 448.012663-448.01164C959.447287 264.147052 758.865969 63.564711 511.434623 63.564711zM773.519714 382.576325 447.871959 704.039781 245.771031 507.044128l63.996546-68.093864 138.15964 138.15964 261.086343-261.087367L773.519714 382.576325z" fill="#67c23a" p-id="4250"></path></svg>,
  info: <svg t="1713787136067"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1528" width="22" height="22"><path d="M512 97.52381c228.912762 0 414.47619 185.563429 414.47619 414.47619s-185.563429 414.47619-414.47619 414.47619S97.52381 740.912762 97.52381 512 283.087238 97.52381 512 97.52381z m36.571429 341.333333h-73.142858v292.571428h73.142858V438.857143z m0-121.904762h-73.142858v73.142857h73.142858v-73.142857z" p-id="1529" fill="#909399"></path></svg>,
    warning: <svg t="1713787417938"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2847" width="22" height="22"><path d="M512 128c-213.589333 0-384 170.410667-384 384s170.410667 384 384 384 384-170.410667 384-384-170.410667-384-384-384z m-36.949333 150.229333c10.069333-10.069333 18.688-16.768 35.029333-16.768 18.261333-1.450667 35.029333 7.168 41.770667 20.138667 7.68 9.130667 11.989333 29.269333 10.069333 41.301333 0 3.328-2.389333 25.898667-3.370667 32.128l-13.44 170.410667c0 16.810667-3.370667 33.578667-10.069333 46.549333-3.370667 10.069333-13.44 16.810667-26.88 16.810667a25.258667 25.258667 0 0 1-23.509333-16.810667c-6.741333-16.810667-10.069333-30.250667-10.069334-46.549333L465.450667 358.4c-3.370667-30.250667-3.370667-20.181333-3.370667-36.949333 0-16.341333 3.370667-29.781333 12.970667-43.221334z m73.898666 470.912a48.128 48.128 0 0 1-33.578666 13.397334c-13.44 0-26.88-3.328-36.992-13.397334a55.338667 55.338667 0 0 1-16.768-39.850666c0-13.44 3.370667-26.88 13.44-36.949334 10.069333-10.112 23.509333-16.810667 36.949333-16.810666 13.44 0 26.88 6.698667 36.949333 16.768 10.069333 10.112 13.44 23.552 13.44 36.992-0.469333 16.298667-3.84 29.738667-13.44 39.850666z" fill="#e6a23c" p-id="2848"></path></svg>,
    error: <svg t="1713787586948"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4333" width="22" height="22"><path d="M512 0C229.376 0 0 229.376 0 512s229.376 512 512 512 512-229.376 512-512S794.624 0 512 0z m218.624 672.256c15.872 15.872 15.872 41.984 0 57.856-8.192 8.192-18.432 11.776-29.184 11.776s-20.992-4.096-29.184-11.776L512 569.856l-160.256 160.256c-8.192 8.192-18.432 11.776-29.184 11.776s-20.992-4.096-29.184-11.776c-15.872-15.872-15.872-41.984 0-57.856L454.144 512 293.376 351.744c-15.872-15.872-15.872-41.984 0-57.856 15.872-15.872 41.984-15.872 57.856 0L512 454.144l160.256-160.256c15.872-15.872 41.984-15.872 57.856 0 15.872 15.872 15.872 41.984 0 57.856L569.856 512l160.768 160.256z" fill="#f56c6c" p-id="4334"></path></svg>
}

export default function Message({children,...props}){
  const [MessageList,setMessageList] = useState([]);
  const MessageId = useRef(0)
  const remove = (id)=>{
    console.log(id)
    setMessageList((n)=> n.filter(item=>item.id !== id))
  }
  const MessageF={
    KMessage:(data)=>{
        const id = MessageId.current++
        if(typeof data !== 'object'){  setMessageList((n)=> [...n,{id:id,message:data,type:'info'}])
          setTimeout(()=>{remove(id)},3000)
         return
      };
       const {message,type='info',duration=3000} = data
       setMessageList((n)=> [...n,{id:id,message:message,type:type}])
       setTimeout(()=>{remove(id)},duration)
    }
  }

  return(
    <MessageContext.Provider value={MessageF}>
      {children}
     <div className='k-messages'>
     <TransitionGroup component={null}>
      {MessageList.map((item)=>(
        <CSSTransition
          key={item.id} 
          classNames='k-message'
          timeout={300} 
          >
          <MessageI type={item.type} message={item.message}></MessageI>
        </CSSTransition>
      )
  
       )}
      </TransitionGroup>
     </div>
    </MessageContext.Provider>
  )
}



const MessageI = ({type,message})=>{
  return(
    <div  className='k-message'>{svg[type]}<div style={{'--message-color':`var(--color-${type})`}}>{message}</div></div>
  )
}

