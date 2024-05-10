import { connect } from 'react-redux'
import React, { Component } from 'react'
import { NextPage } from 'next'
import ProfileSidebar from 'components/profile/profile-sidebar/profile-sidebar.component'

const Profile: NextPage = () => {
    return (
            <div className="container-fluid p-0">
                  <div className="row">
                        <div className="col-12">
                           <ProfileSidebar/>
                        </div>
                  </div>
            </div>
        )
}

export default Profile