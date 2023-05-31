import {regexpHandler} from "./regexp/regexp.js";

{
    const newsInit = (selectorApp) => {
        regexpHandler();
    };
    window.newsInit = newsInit;
}