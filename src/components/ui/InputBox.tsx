export function InputBox({placeholder,refProp}:{placeholder: string,refProp:any}){
    return(
        <div>
            <input placeholder={placeholder} className="px-4 py-2 rounded-md border m-1" ref={refProp} />
        </div>
    )
}