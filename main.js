
const Birthday = () => {
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
    const Amount = ({amount, type}) => <span>{amount} {type}</span>;

    const Days = () => {
        const days = daysLeft(getNextBirthday(birthday), new Date());
        return <Amount amount={Math.floor(days)} type="days" />
    }

    return (
        <h1>Harry's birthday is in <Days/>.</h1>
    );
}

const Footer = ({link}) => 
    <footer>
        <a href={link}>GitHub</a>
    </footer>

ReactDOM.render(
    <div className="container">
        <Birthday />
        <Footer link="//github.com/harrymt/birthday" />
    </div>,
    document.getElementById('root')
);
