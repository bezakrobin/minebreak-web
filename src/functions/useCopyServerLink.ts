import { useSnackbar } from "notistack";
import { strings } from "../strings/strings";

export const useCopyServerLink = () => {
    const { enqueueSnackbar } = useSnackbar();

    let copyServerLink: (path: (string | undefined)) => void;
    copyServerLink = (path: string | undefined) => {
        if (path) {
            navigator.clipboard.writeText(path).then(() => {
                enqueueSnackbar(strings.SERVER_LINK_COPY_SUCCESS, {variant: 'success'});
            }).catch(err => {
                console.error('Could not copy text: ', err); //TODO REPORT BACK TO DEVELOPER
            });
        }
    };

    return copyServerLink;
};
