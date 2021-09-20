import React, { useEffect } from "react";

const useHelmet = (title) => {
    useEffect(() => {
        document.title = title;
    }, [title])
}

export default useHelmet;
