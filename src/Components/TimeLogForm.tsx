import React, { useState } from 'react';
import { ITimeLogEntry } from '../Types/ITimeLogEntry';
import { getHTMLDate } from './../Utils/conversions'

interface ITimeLogEntryProps {
    defaultTimeLog: ITimeLogEntry
}

export const TimeLogForm: React.FC<ITimeLogEntryProps> = (props: ITimeLogEntryProps) => {
    //
    // Export text file out of website - Don't spend long worrying about this.
    //
    const exportLogFile = (value: ITimeLogEntry) => {
        const blob = new Blob([JSON.stringify(value)], {type: "text/plain"})
        const destination = URL.createObjectURL(blob);
        const exportLink = document.createElement('a');
        exportLink.download = 'logFile.txt';
        exportLink.href = destination;
        exportLink.click();
    }

    const [timeLog, setTimeLog] = useState<ITimeLogEntry>(props.defaultTimeLog);

    const clearForm = () => {
        setTimeLog(props.defaultTimeLog);
    }

    const handleInputChange = (caller: string, event: React.ChangeEvent<HTMLInputElement>) => {
        switch(caller) {
            case 'activity':
                setTimeLog({ ...timeLog, activity: event.target.value });
                break;
            case 'date':
                setTimeLog({ ...timeLog, date: event.target.valueAsDate });
                break;
            case 'minutesSpent':
                setTimeLog({ ...timeLog, minutesSpent: event.target.valueAsNumber });
                break;
        }
    }
    const handleTextAreaChange = (caller: string, event: React.ChangeEvent<HTMLTextAreaElement>) => {
        switch(caller) {
            case 'notes':
                setTimeLog({ ...timeLog, notes: event.target.value });
                break;
        }
    }

    return (
        <>
            <label> 
                Activity
                <input 
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {handleInputChange("activity", event)}} 
                    type="text"
                    value={timeLog.activity}
                    >
                </input>
            </label>
            <label> 
                Date
                <input 
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {handleInputChange("date", event)}} 
                type="date"
                value={getHTMLDate(timeLog.date)}
                >
                </input>
            </label>
            <label> 
                Minutes Spent
                <input 
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {handleInputChange("minutesSpent", event)}} 
                    type="number"
                    value={timeLog.minutesSpent}
                >
                </input>
            </label>
            <label> 
                Notes
                <textarea 
                    onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {handleTextAreaChange("notes", event)}} 
                    value={timeLog.notes}
                >
                </textarea>
            </label>
            <br/>
            <button onClick={() => { exportLogFile(timeLog) }}>Download JSON File</button>
            <button onClick={() => { clearForm() }}>Clear</button>
        </>
    )
}