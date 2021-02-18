import { ChonkyIconName } from '../types/icons.types';
import { defineFileAction } from '../util/helpers';

export const ExtraActions = {
    /**
     * Action that adds a button and shortcut to copy files.
     */
    CopyFiles: defineFileAction({
        id: 'copy_files',
        requiresSelection: true,
        hotkeys: ['ctrl+c'],
        button: {
            name: 'Copier',
            toolbar: true,
            contextMenu: true,
            group: 'Actions',
            icon: ChonkyIconName.copy,
        },
    } as const),
    /**
     * Action that adds a button to create a new folder.
     */
    CreateFolder: defineFileAction({
        id: 'create_folder',
        button: {
            name: 'Nouveau dossier',
            toolbar: true,
            tooltip: 'Nouveau dossier',
            icon: ChonkyIconName.folderCreate,
        },
    } as const),
    /**
     * Action that adds a button to upload files.
     */
    UploadFiles: defineFileAction({
        id: 'upload_files',
        button: {
            name: 'Téléverser',
            toolbar: true,
            tooltip: 'Téléverser',
            icon: ChonkyIconName.upload,
        },
    } as const),
    /**
     * Action that adds a button to download files.
     */
    DownloadFiles: defineFileAction({
        id: 'download_files',
        requiresSelection: true,
        button: {
            name: 'Télécharger',
            toolbar: true,
            contextMenu: true,
            group: 'Actions',
            icon: ChonkyIconName.download,
        },
    } as const),
    /**
     * Action that adds a button and shortcut to delete files.
     */
    DeleteFiles: defineFileAction({
        id: 'delete_files',
        requiresSelection: true,
        hotkeys: ['delete'],
        button: {
            name: 'Supprimer',
            toolbar: true,
            contextMenu: true,
            group: 'Actions',
            icon: ChonkyIconName.trash,
        },
    } as const),
};
