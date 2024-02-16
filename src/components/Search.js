import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';



function Search({value,onChange,onClick}) {
  const searchStyle={display:"flex",justifyContent:"center",alignItems:"center",gap:"20px",border:"1px solid white",borderRadius:"40px",padding:"20px",height:"50px",width:"400px", backgroundColor: 'rgba(255, 255, 255, 0.2)'};
  const inpuStyle={height:"100%",width:"100%",border:"none",backgroundColor: 'transparent',outline: 'none',padding:"10px"}
  return (
    <div>
        <div style={searchStyle}>
            <input type='text' value={value} onChange={onChange} placeholder='Search for city weather' style={inpuStyle}></input>
            <div onClick={onClick}><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
        </div>
    </div>
  )
}

export default Search