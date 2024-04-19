import '../assets/styles/components/_EpisodeControl.scss';
import down from '../assets/img/down.svg';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { filterEpisodeBySeason } from "../redux/actions";

const EpisodeControl = () => {

    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    const handleFilterBySeason = (season) => {
        dispatch(filterEpisodeBySeason(season));
        setIsOpen(false);
    }

    const options = [
        { label: "Season 1", value: "S1" },
        { label: "Season 2", value: "S2" },
        { label: "Season 3", value: "S3" },
        { label: "Season 4", value: "S4" },
        { label: "Season 5", value: "S5" }
    ];

    return (
        <div className='episode-control'>
            <div className="custom-dropdown">
                <div className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
                    Season
                    <img className='dropdown-arrow' src={down} alt="" />
                </div>
                <div className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
                    {options.map(option => (
                        <div
                            key={option.value}
                            className="dropdown-item"
                            onClick={() => handleFilterBySeason(option.value)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default EpisodeControl;