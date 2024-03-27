import titleLine from './titleline.svg';

import './title.css';

const Title = ({title, subtitle}) => {
    return (
        <h1 className="title">
            {title}
            <p className="subtitle">
                {subtitle} 
                <img src={titleLine} alt="line" className='title-line'/>
            </p>
        </h1>
    )
}
export default Title;