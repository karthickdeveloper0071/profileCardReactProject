

const ArraySample = (props) => {
    const {items}=props;
  return (
    <div> <p>array</p>
        <ul>
        {
            items.map(
                (items)=>{
                    <li key={items.id}>{items.name}</li>
                }
            )
        }
        </ul>
    </div>
  )
}

export default ArraySample