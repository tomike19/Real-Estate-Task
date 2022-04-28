


export const BtnLarge = ( props ) =>{
    const { className } = props;
    return (
        <button className={`btn btn-large ${ className }`}>{props.label}</button>
    );
};
export const BtnSmall = ( props ) =>{
    const { className } = props;
    return (
        <button className={`btn btn-small ${ className }`}>{props.label}</button>
    );
};