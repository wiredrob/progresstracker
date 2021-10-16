import React, {useState} from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import raw from '../../data.csv';

function MigrationProgressBar(){
    const [csvArray, setCsvArray] = useState([]);
    // [{name: "", target: 0, current: 0},{name: "", target: 0, current: 0}]

    const processCSV = (str, delim=',') => {
        const headers = str.slice(0, str.indexOf('\n')).split(delim);
        const rows = str.slice(str.indexOf('\n')+1).split('\n');

        const newArray = rows.map( row => {
            const values = row.split(delim);
            const eachObject = headers.reduce((obj, header, i) => {
                obj[header] = values[i];
                return obj;
            },{})
            return eachObject;
        })

        setCsvArray(newArray)
    }

    const submit = () => {
        fetch(raw)
            .then(r => r.text())
            .then(text => {
            console.log('text decoded:', text);
            processCSV(text)
        });
    }

    return (
        <div className="results">
            <form id='csv-form'>
                <button 
                    data-testid="btnResults"
                    onClick={(e) => {
                        e.preventDefault()
                        submit()
                    }}>
                    Show Latest Results
                </button>
                <br /><br />
                {csvArray.length>0 ? 
                <>
                    {
                        csvArray.map((item, i) => (
                            <div data-testid="progressBars">
                                <div>{item.name} </div>
                                <ProgressBar now={item.current} max={item.target} />
                            </div>
                        ))
                    }   
                </> : null}
            </form>
        </div>
    );
}

export default MigrationProgressBar;