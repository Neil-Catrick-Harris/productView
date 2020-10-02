
const SizeDetails = ({details}) => {
    return (
        <div>
            <div>Product size</div>
            <br />
            {details.measurments.map((value) => {
                return  <div>{details.attributes}: {value}</div>
            })}
        </div>
    )
};


export default SizeDetails;