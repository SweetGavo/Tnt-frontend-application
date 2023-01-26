import React, {useEffect, useRef, useState} from 'react';
import dayjs from "dayjs";

function Countdown({expired}) {
    const [duration,setDuration] = useState("");
    const durationRef = useRef(duration);
    durationRef.current = duration;

    useEffect(()=>{
        const timeExpire = expired
        setInterval(()=>{
        let now = dayjs();
        const expired = dayjs("2023-01-30T00:00:00.000Z");
        const dayDiff = expired.diff(now,"days");
        const DayWithDayDiffAdded = now.add(dayDiff,'days');
        const hourDiff = expired.diff(DayWithDayDiffAdded,'hours');
        const DayWithDayHourDiffAdded = DayWithDayDiffAdded.add(hourDiff,'hours');
        const minDiff = expired.diff(DayWithDayHourDiffAdded,'minutes');
        const DayWithDayHourMinDiffAdded = DayWithDayHourDiffAdded.add(minDiff,'minutes');
        const seconds = expired.diff(DayWithDayHourMinDiffAdded,'seconds');
        setDuration(`${dayDiff }d : ${hourDiff}h : ${minDiff}m : ${seconds}s`)
        },1000)
    })
    return (
        <div>
            {durationRef.current}
        </div>
    );
}

export default Countdown;
