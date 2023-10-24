export default function Search(props){
    return (
        <div className="search">
        <select onChange={e => { 
            console.log(e.target.value, "target")
            props.handleChange(e) 
            }}
            value={props.dropValue}
            > 
            <option defaultValue>
                Select an option
            </option>
          {props.options.map(dogName => (
            <option key={Math.random() * 10000000} value={dogName}>
              {dogName}
            </option>
          ))}
        </select>
      </div>
      
    )
}