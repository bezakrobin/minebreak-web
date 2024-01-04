export const copyServerLink = (path: string | undefined) => {
    if(path) {
        navigator.clipboard.writeText(path).then(() => {
        }).catch(err => {
            console.error('Could not copy text: ', err); //TODO REPORT BACK TO DEVELOPER
        });
    }
};