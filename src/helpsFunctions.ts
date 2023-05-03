export let setLanguageStorage = (language: string) => {
    localStorage.setItem('language', language);
}


export let getLanguageStorage = () => {
    let language = localStorage.getItem('language');
    console.log(language)
    if (!language) {
        let browserlanguage = navigator.language || 'ru';
        return browserlanguage.substr(0, 2).toLowerCase();
    } else if (language)
        return localStorage.getItem('language') || 'ru';
    else
        return '';
}
