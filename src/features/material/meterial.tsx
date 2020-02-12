import React, { useState } from 'react';
import { Drawer, Button, List, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import styles from './styles/index.module.css';

export default function TemporaryDrawer() {
    const [openMenu, setOpenMenu] = useState(false);

    const sideList = () => (
        <div className={`${styles['list']}`} role="presentation">
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div className={`${styles['container']}`}>
            <Button className={styles['button']} onClick={() => setOpenMenu(true)}>Open Menu</Button>
            <Drawer open={openMenu} onClose={() => setOpenMenu(false)}>
                {sideList()}
            </Drawer>
        </div>
    );
}