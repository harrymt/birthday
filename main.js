const birthday = "November 16";
const toDays = (1000 * 60 * 60 * 24);

const getNextBirthday = birthday => {
    const today = new Date();
    
    const thisYear = today.getFullYear();
    const nextYear = thisYear + 1;
    let nextBirthday = new Date(`${birthday}, ${thisYear}`);

    // If my birthday has past this year
    if (nextBirthday.valueOf() < today.valueOf()) {
        nextBirthday = new Date(`${birthday}, ${nextYear}`);
    }
    return nextBirthday;
}

const millisecondsLeft = (startTime, endTime) => startTime.valueOf() - endTime.valueOf();
const daysLeft = (birthday, now) => millisecondsLeft(birthday, now) / toDays;

// Presentational
const Amount = ({amount, type}) => {
    return (
        <span>{amount} {type}</span>
    );
};

const Days = () => {
    const days = daysLeft(getNextBirthday(birthday), new Date());
    return <Amount amount={Math.floor(days)} type="days" />
}

ReactDOM.render(
    <h1>My Birthday is in <Days/>.</h1>,
    document.getElementById('root')
);
