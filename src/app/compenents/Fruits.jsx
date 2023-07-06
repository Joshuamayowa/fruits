import Image from "next/image"
import {BsInstagram} from "react-icons/bs"
import {FaFacebook} from "react-icons/fa"
import {AiFillGoogleCircle} from "react-icons/ai"
import style from './fruit.module.css'

export default function Fruits({lists}) {
    const fruitList=lists.map(fruit => (
        <section key= {fruit.id} className={`m-auto text-white ${style.section}`}>
            <Image className="hover:animate-spin" src = {fruit.image} alt = {fruit.name} width={200}  height= {200}/> 
            <h2>{fruit.name}</h2>
           <h2>{fruit.botanicalName}</h2>
            <h2>{fruit.season}</h2>
            <div className="flex space-x-3">
            <BsInstagram/>
            <FaFacebook/>
            <AiFillGoogleCircle/>
            </div>
        </section>
    ))
  return (
    <div className="grid grid-cols-3 gap-2 bg-blue-900 "> {fruitList}</div>
  )
}
