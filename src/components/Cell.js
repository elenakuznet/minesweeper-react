export default function Cell({details, updateFlag}) {
    return (
        <div 
            onContextMenu={(e)=> updateFlag(e, details.x, details.y)} 
            onClick={()=> console.log(details)} 
            style={style.cellStyle}>
            {details.reveal ? details.value : ""}
        </div>
    )
}

const style = {
    cellStyle: {
        width: 40, 
        height: 40, 
        background: "grey",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
}