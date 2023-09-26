// import dataGroup from '../data/data';

const Groups = ({ data }) =>
    data.map(({ groupName, cource, started, room, students, time }, idx) => (
        <div className="group" key={idx}>
            <p className="group-text">
                Group Name: <span>{groupName}</span>
            </p>
            <p className="group-text">
                Cource: <span>{cource}</span>
            </p>
            <p className="group-text">
                Started: <span>{started}</span>
            </p>
            <p className="group-text">
                Room: <span>{room}</span>
            </p>
            <p className="group-text">
                Students: <span>{students}</span>
            </p>
            <p className="group-text">
                Time: <span>{time}</span>
            </p>
        </div>
    ));

export default Groups;
