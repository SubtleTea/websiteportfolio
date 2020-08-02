import React from 'react';
import Avatar from './blank-avatar.jpg';

const Sidebar = () => (
    <section className="sidebar">
        <section className="sidebar-header">
            <img className="avatar" src={Avatar} alt="" />
            <h2 className="sidebar-name">Ariel Lim</h2>
            <p>ariel.lim.us@gmail.com</p>
        </section>
        <section className="sidebar-content">
            <p> sometimes i plonk on a keyboard and programs come out</p>
        </section>
        <section className="sidebar-footer">
            <h2>Follow me on social media i guess</h2>
            <p>here&apos;s where i&apos;d put my instagram, if i had one</p>
        </section>
        <section className="sidebar-copyright">
            <p>copyright me obviously</p>
        </section>
    </section>
);

export default Sidebar;