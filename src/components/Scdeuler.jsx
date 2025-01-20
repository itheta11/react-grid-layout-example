import Bookings from "./Bookings";
import GridTest from "./GridTest";

const getRooms = () => {
    let rooms = []
    for(let i = 1 ; i <= 2; i++){
        for (let  j = 1 ; j <=10 ; j++){
            rooms.push(i*100 + j)
        }
    }
    return rooms
}

export default function Scheduler(){

    return <div className="scheduler">
        <div className="header">
            header
        </div>
        <div className="roomBooking">
            <div className="rooms">
                {getRooms().map((i) => (<div key={i} className="room flex-center ">{i}</div>))}
            </div>
            <div className="bookings">
                <Bookings/>
            </div>
        </div>
    </div>
}