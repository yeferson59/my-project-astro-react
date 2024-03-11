export default function Button({
    text = "",
    direc = '/',
    isTitle = false,
    classNameA = "", 
    classNameS = ""
    }){
    if (isTitle) {
        return(
            <a href={direc} className={classNameA}>
                <img src="" alt="logo" loading="eager" />
                <span className={classNameS}>
                    {text}
                </span>
            </a>
        );
    }
    return(
        <a href={direc} className={classNameA}>
            {text}
        </a>
    );
}

