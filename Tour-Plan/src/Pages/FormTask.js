import { useState } from 'react';
import Form from '../components/FormTask/Form';
import Records from '../components/FormTask/Records';
function FormTask() {
    const [records, setRecords] = useState([]);

    const [open, setOpen] = useState(false);
    const showForm = () => {
        setOpen(!open);
    }

    const onSubmit = (data) => {
        // debugger;
        const newRecords = [...records, data];
        setRecords(newRecords);
    }


    return (
        <div>
            <div className='openformdiv'>
          
           
                <button className='openform' onClick={showForm}>Open form</button>
                {!open ? <div> <p> Click add for form  </p></div> : <Form onSubmit={onSubmit} />}
            </div>
            <div>
               <Records records={records}></Records>
            </div>
        </div>
    )
}
export default FormTask;