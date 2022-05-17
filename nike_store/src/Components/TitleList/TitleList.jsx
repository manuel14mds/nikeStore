import './TitleList.css'

const TitleList = ({filter}) => {
    return (
        <div className="titleList">
            <div className="imgTittleList"></div>
            <div className="title">
                <h1>{filter}</h1>
            </div>
        </div>
    )
}

export default TitleList
