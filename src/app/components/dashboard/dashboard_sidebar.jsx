import React from 'react'
import '../../style/dashboard/sideBar.scss'
import app from '../../firebase/firebase'


export default function DashboardSidebar() {

    return (
        <div className="sidebar">
            <h1>Sidebar</h1>
            <button onClick={() => app.auth().signOut()}>Sign out</button>
        </div>
    )
}
