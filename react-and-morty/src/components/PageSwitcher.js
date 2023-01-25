const PageSwitcher = (props) => {
    return (
    <div className='pageSwitcher'>
        <button className='header-button' onClick={() => {props.setPage(Math.max(props.pageNumber-1,1))}}>&lt;</button>
        <div>&nbsp;Page {props.pageNumber}&nbsp;</div>
        <button className='header-button' onClick={() => {props.setPage(props.pageNumber+1)}}>&gt;</button>
    </div>
    )
}

export default PageSwitcher
