 import {forwarRef} from 'react'
 export const Input = forwarRef ((props, ref) => {
   return (
     <input type="text" className= "bg-zinc-800 px-3 py-2 block my-2 w-full"
     {...props} ref={ref} />
   );
 })
 
 export default Input