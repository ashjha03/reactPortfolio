import {CgWebsite} from "react-icons/cg"
import {SiMaterialdesignicons} from "react-icons/si"
import {TbBrandJavascript} from "react-icons/tb"
import {FiShoppingCart} from "react-icons/fi"
import {BiMoneyWithdraw} from "react-icons/bi"
import {MdDomainVerification} from "react-icons/md"


const ServiceCard = (props) => {
  return (
    <div className="serviceCard bg-primary hover:scale-105 duration-300 transition-all text-primary-content py-6 lg:px-6 px-3 rounded-xl shadow-lg">
          <div className="cardHead text-center">
            {props.index === 0 && <CgWebsite className="text-5xl mx-auto pb-2"/>}
            {props.index === 1 && <SiMaterialdesignicons className="text-5xl mx-auto pb-2"/>}
            {props.index === 2 && <TbBrandJavascript className="text-5xl mx-auto pb-2"/>}
            {props.index === 3 && <FiShoppingCart className="text-5xl mx-auto pb-2"/>}
            {props.index === 4 && <BiMoneyWithdraw className="text-5xl mx-auto pb-2"/>}
            {props.index === 5 && <MdDomainVerification className="text-5xl mx-auto pb-2"/>}
            <h1 className="text-3xl font-bold pb-5">{props.title}</h1>
            <p className="text-lg">
              {props.body}
            </p>
          </div>
        </div>
  )
}

export default ServiceCard
