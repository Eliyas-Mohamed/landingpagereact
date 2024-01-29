
import Description from "./Description"
import  Header  from "./Header"
const HeaderAndDescription=({headerText,descriptionText, className,size})=>(
    <>
    <Header size={size}>{headerText}</Header>
    <Description descriptions={descriptionText} size={size}/>
    </>
)
export default HeaderAndDescription