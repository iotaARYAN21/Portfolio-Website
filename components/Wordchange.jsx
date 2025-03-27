import "../src/App.css"
function Wordchange(props){
    const lst = ["Responsive", "Dynamic"];
    return <>
        <h2>Building {lst[props.iter]} Websites.</h2>
    </>
}
export default Wordchange;