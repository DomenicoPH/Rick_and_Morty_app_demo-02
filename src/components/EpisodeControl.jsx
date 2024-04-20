import '../assets/styles/components/_EpisodeControl.scss';
import down from '../assets/img/down.svg';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { filterEpisodeBySeason, getAllEpisodes } from "../redux/actions";

const EpisodeControl = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedSeason, setSelectedSeason] = useState("all");
    const dispatch = useDispatch();

    const handleFilterBySeason = (season) => {
        if(season === 'all'){
            dispatch(getAllEpisodes())
        } else {
            dispatch(filterEpisodeBySeason(season));
        }
        setIsOpen(false);
        setSelectedSeason(season);
    }

    const options = [
        { label: "All seasons", value: "all"},
        { label: "Season 1", value: "1" },
        { label: "Season 2", value: "2" },
        { label: "Season 3", value: "3" },
        { label: "Season 4", value: "4" },
        { label: "Season 5", value: "5" }
    ];

    return (
        <div className='episode-control'>
            <div className="custom-dropdown">
                <div className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {selectedSeason === "all" ? "All seasons" : `Season ${selectedSeason}`} 
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