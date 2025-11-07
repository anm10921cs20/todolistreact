import React, { useEffect, useState } from 'react'; // Import useEffect and useState

const Content = () => {
    // Use state to hold the current time string, so React re-renders when it changes
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        function updateTimer() {
            const time = new Date();
            let hour = time.getHours();
            let minute = time.getMinutes();
            let second = time.getSeconds();
            const varl = hour >= 12 ? "PM" : "AM";
            hour = hour % 12 || 12; // Convert 0 to 12 for 12-hour format

            minute = minute < 10 ? '0' + minute : minute;
            second = second < 10 ? '0' + second : second; // Ensure seconds also have leading zero

            // Update the state, which will trigger a re-render
            setCurrentTime(`${hour} : ${minute} : ${second} ${varl}`);
        }

        // Call updateTimer immediately to show the time without waiting for the first interval
        updateTimer();

        // Set up the interval after the component mounts
        const intervalId = setInterval(updateTimer, 1000);

        // Clean up the interval when the component unmounts
        return () => {
            clearInterval(intervalId);
        };
    }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

    const date = new Date().toLocaleDateString();

    return (
        <main>
            <div className='main'>
                <p> Today Works List</p>
                <div className='dates'>
                    <div className='date'>
                        <p className='timer'>{currentTime}</p> {/* Display time from state */}
                    </div>
                    <div><p>{date}</p></div>
                </div>
            </div>
        </main>
    )
}

export default Content;
