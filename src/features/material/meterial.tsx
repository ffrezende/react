import React, { useState } from 'react';
import { Drawer, AppBar, Toolbar, List, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { Menu, Mail } from '@material-ui/icons';

import styles from './styles/index.module.css';
export default function TemporaryDrawer() {
    const [openMenu, setOpenMenu] = useState(false);

    const handleClick = (index: any) => {
        switch (index) {
            case 0:
                alert('clicked Inbox');
                break;
            case 1:
                alert('clicked Starred');
                break;
            case 2:
                alert('clicked Send email');
                break;
            case 3:
                alert('clicked Drafts');
                break;

        }
    }
    const sideList = () => (
        <div className={`${styles['list']}`} role="presentation">
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button onClick={() => handleClick(index)} key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <Mail />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
        </div>
    );

    return (
        <div className={`${styles['container']}`}>
            <div className={styles['root']}>
                <AppBar position="static">
                    <Toolbar>
                        <ListItemIcon onClick={() => setOpenMenu(true)}>{<Menu color={'secondary'} />}</ListItemIcon>
                        <Drawer open={openMenu} onClose={() => setOpenMenu(false)}>
                            {sideList()}
                        </Drawer>
                    </Toolbar>
                </AppBar>
            </div>
        </div>
    );
}