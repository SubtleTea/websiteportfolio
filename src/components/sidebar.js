import React from 'react';
import {Avatar} from '@material-ui/core'

const Sidebar = () => (
    <section className="sidebar">
        <section className="sidebar-header">
            <h2>Ariel Lim</h2>
            <p>ariel.lim.us@gmail.com</p>
        </section>
        <section className="sidebar-content">
            <p> sometimes i plonk on a keyboard and programs come out</p>
        </section>
        <section className="sidebar-footer">
            <h2>Follow me on social media i guess</h2>
            <p>here&apos;s where i&apos;d put my instagram, if i had one</p>
            <p className="copyright">copyright me obviously</p>
        </section>
    </section>
);

export default Sidebar;