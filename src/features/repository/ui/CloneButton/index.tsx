import React, { SyntheticEvent, useState } from 'react';

import { ReactComponent as CloneIcon } from '@features/repository/assets/icons/clone.svg';
import { ReactComponent as CopyIcon } from '@features/repository/assets/icons/copy.svg';
import { Alert, Box, Button, Snackbar, Tab, Tabs, Typography } from '@mui/material';
import { useGetRepoQuery } from '@shared/api';
import { useCopy, usePopper, useTypedParams } from '@shared/model';
import { Field, Popper, TabPanel } from '@shared/ui';

import styles from './styles.module.scss';

export const CloneButton = () => {
    const { anchorEl, togglePopper, isOpen } = usePopper<HTMLButtonElement>();
    const [tab, setTab] = useState(1);
    const { copyData, handleClose, isCopy } = useCopy();

    const { username, repository } = useTypedParams();
    const { data } = useGetRepoQuery({ username, repository });

    const { clone_url: cloneUrl = '', ssh_url: sshUrl = '' } = data || {};

    const changeTab = (_: SyntheticEvent, value: number) => {
        setTab(value);
    };

    return (
        <>
            <Button
                onClick={togglePopper}
                ref={anchorEl}
                variant='contained'
                size='small'
                className={styles.button}
            >
                <Typography variant='subtitle1' className={styles.button_text}>
                    Clone
                </Typography>
            </Button>

            <Popper open={isOpen} anchorEl={anchorEl.current} placement='bottom-end'>
                <Box className={styles.popper_content}>
                    <Typography variant='subtitle1' className={styles.popper_title}>
                        <CloneIcon /> Clone
                    </Typography>

                    <Box className={styles.tabs}>
                        <Tabs value={tab} onChange={changeTab}>
                            <Tab className={styles.tab} label='HTTPS' value={1} />
                            <Tab className={styles.tab} label='SSH' value={2} />
                        </Tabs>
                    </Box>

                    <Box className={styles.popper_block_url}>
                        <TabPanel value={tab} index={1}>
                            <CloneTab url={cloneUrl} copyData={copyData} />
                        </TabPanel>

                        <TabPanel value={tab} index={2}>
                            <CloneTab url={sshUrl} copyData={copyData} />
                        </TabPanel>
                    </Box>
                </Box>
            </Popper>

            <Snackbar open={isCopy} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
                    This is a success message!
                </Alert>
            </Snackbar>
        </>
    );
};

interface Props {
    url: string;
    copyData(data: string): void;
}

const CloneTab: React.FC<Props> = ({ url, copyData }) => {
    const onCopy = () => {
        copyData(url);
    };

    return (
        <Box className={styles.popper_tab}>
            <Field className={styles.url} value={url} />

            <Box className={styles.copy_block} onClick={onCopy}>
                <CopyIcon />
            </Box>
        </Box>
    );
};
