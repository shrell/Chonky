import React from 'react';
import { Nullable } from 'tsdef';

import { DndEntryState } from '../../types/file-list.types';
import { FileData } from '../../types/file.types';
import { useFileEntryDnD } from '../../util/dnd';
import { FileHelper } from '../../util/file-helper';
import { makeLocalChonkyStyles } from '../../util/styles';

export interface DnDFileEntryProps {
    file: Nullable<FileData>;
    children: (dndState: DndEntryState) => React.ReactElement;
}

export const DnDFileEntry = React.memo(({ file, children }: DnDFileEntryProps) => {
    const { drop, drag, dndState } = useFileEntryDnD(file);
    const classes = useStyles();
    return (
        <div ref={drop} className={classes.fillParent}>
            <div
                ref={FileHelper.isDraggable(file) ? drag : null}
                className={classes.fillParent}
            >
                {children(dndState)}
            </div>
        </div>
    );
});

export const useStyles = makeLocalChonkyStyles((theme) => ({
    fillParent: {
        height: '100%',
    },
}));
