import { FileAction } from '../types/file-actions.types';
import { ChonkyIconName } from '../types/icons.types';
import { SpecialAction } from '../types/special-actions.types';
import { FileHelper } from './file-helper';

export const ChonkyActions = {
    // Actions triggered by drag & drop
    MoveFilesTo: {
        id: 'move_files_to',
    },
    DuplicateFilesTo: {
        id: 'duplicate_files_to',
    },

    // Most important action of all - opening files!
    OpenFiles: {
        // We don't specify the 'enter' hotkey here because it is handled inside
        // `<ClickableFileEntry>` component.
        id: 'open_files',
        requiresSelection: true,
        fileFilter: FileHelper.isOpenable,
        toolbarButton: {
            name: 'Open selection',
            group: 'Actions',
            dropdown: true,
            icon: ChonkyIconName.openFiles,
        },
    },

    // Toolbar related action
    OpenParentFolder: {
        id: 'open_parent_folder',
        hotkeys: ['backspace'],
        toolbarButton: {
            name: 'Go up a directory',
            icon: ChonkyIconName.openParentFolder,
            iconOnly: true,
        },

        specialActionToDispatch: SpecialAction.OpenParentFolder,
    },
    ToggleSearch: {
        id: 'toggle_search',
        hotkeys: ['ctrl+f'],
        toolbarButton: {
            name: 'Search',
            icon: ChonkyIconName.search,
            iconOnly: true,
        },

        specialActionToDispatch: SpecialAction.ToggleSearchBar,
    },

    // Actions related to selection
    SelectAllFiles: {
        id: 'select_all_files',
        hotkeys: ['ctrl+a'],
        toolbarButton: {
            name: 'Select all files',
            group: 'Actions',
            icon: ChonkyIconName.openParentFolder,
            iconOnly: true,
        },

        specialActionToDispatch: SpecialAction.SelectAllFiles,
    },
    ClearSelection: {
        id: 'clear_selection',
        hotkeys: ['escape'],
        toolbarButton: {
            name: 'Clear selection',
            group: 'Actions',
            icon: ChonkyIconName.openParentFolder,
            iconOnly: true,
        },

        specialActionToDispatch: SpecialAction.ClearSelection,
    },

    // Optional actions
    CopyFiles: {
        id: 'copy_files',
        requiresSelection: true,
        hotkeys: ['ctrl+c'],
        toolbarButton: {
            name: 'Copy selection',
            group: 'Actions',
            dropdown: true,
            icon: ChonkyIconName.copy,
        },
    },
    CreateFolder: {
        id: 'create_folder',
        toolbarButton: {
            name: 'Create folder',
            tooltip: 'Create a folder',
            icon: ChonkyIconName.folderCreate,
        },
    },
    UploadFiles: {
        id: 'upload_files',
        toolbarButton: {
            name: 'Upload files',
            tooltip: 'Upload files',
            icon: ChonkyIconName.upload,
        },
    },
    DownloadFiles: {
        id: 'download_files',
        requiresSelection: true,
        toolbarButton: {
            name: 'Download files',
            group: 'Actions',
            tooltip: 'Download files',
            dropdown: true,
            icon: ChonkyIconName.download,
        },
    },
} as const;

export const DefaultFileActions: FileAction[] = [
    ChonkyActions.MoveFilesTo,
    ChonkyActions.DuplicateFilesTo,

    ChonkyActions.OpenParentFolder,
    ChonkyActions.ToggleSearch,

    ChonkyActions.OpenFiles,
    ChonkyActions.SelectAllFiles,
    ChonkyActions.ClearSelection,
];
