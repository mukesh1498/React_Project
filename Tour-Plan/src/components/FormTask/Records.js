
function Records(props) {
    let records = props.records;

function UpdateHandler(event){
        console.log("update");
        console.log(event.target.value);
        // const tempData = records[index];
        // console.log("tempData", tempData);
    }
    return (
        <div>
            <span> This page for  Records</span>
            {/* {
                    records.map((record) => (<p key={index}>{JSON.stringify(record)} </p>))
                } */}
            <table style={{ width: 1000, border:"2px" }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Father Name</th>
                        <th>Date</th>
                        <th>City</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Mode</th>
                        <th>Actions</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        records.map((item) => (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.fatherName}</td>
                                <td>{item.dob}</td>
                                <td>{item.cityName}</td>
                                <td>{item.email}</td>
                                <td>{item.phoneNumber}</td>
                                <td>{item.mode}</td>
                                <td>
                                    <button onClick={UpdateHandler}>Update</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}
export default Records;