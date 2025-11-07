import React from 'react';


const Content = () => {

    function timer() {
        const time = new Date();
        const data = document.querySelector('.timer');
        let hour = time.getHours();
        let minute = time.getMinutes();
        let second = time.getSeconds();
        let varl = hour >= 12 ? "PM" : "AM";
        hour = hour % 12;

        minute = minute < 10 ? 0 + minute : minute;
      





        data.innerHTML = `${hour} : ${minute} : ${second} ${varl}`;
    }

    
    const date = new Date().toLocaleDateString();
    setInterval(timer, 1000)
    return (
        <main>
            <div className='main'>
                <p> Today Works List</p>
                <div className='dates'>
                    <div className='date'><p className='timer'></p></div>
                    <div><p>{date}</p></div>
                </div>

            </div>
          
         
        </main>


    )
}

export default Content