<template>
    <div className="sidebar-open" role="banner">
                <nav id="topbar">
                    <ul className="navbar-nav row justify-content-between pl-5 pr-5 theme-brand flex-row  text-center">
                        <li className="nav-item">
                            <a style="width: 100px;" className='' href="#/">
                                <img style="width: inherit;" src="../assets/logowildfussion.png" />
                            </a>
                        </li>
                        <li className="nav-item theme-logo logout">
                            <a className='' href="/">
                                <b>Logout</b>
                            </a>
                        </li>
                    </ul>
                <ul className="list-unstyled menu-categories sidebar-menu-categories" id="topAccordion">
                    <li className="menu single-menu active">
                        <a href="#/">
                        <div className="nav-items">
                            <span>Home</span>
                        </div>
                        </a>
                    </li>
                    
                    <li className="menu single-menu">
                        <a href="#/">
                            <div className="nav-items">
                                <span>Feed</span>
                            </div>
                        </a>
                    </li>
                    <li className="menu single-menu">
                        <a href="#/profile">
                            <div className="nav-items">
                            
                                <span>Profile </span>
                            </div>
                        </a>
                    </li>
                    <li className="menu single-menu">
                        <a href="#/allposts">
                            <div className="nav-items">
                            
                                <span>Post</span>
                            </div>
                        </a>
                    </li>
                    
                </ul>
                <li className="menu single-menu">
                <a @click="sideBarCloser()">
                    <div className="nav-items">
                    
                        <span>Close</span>
                    </div>
                </a>
                </li>
            </nav>
        </div>
</template>
<script>

export default {
    name: "SideBar",
    components: {

    },
    props: {
        openSideBars:Boolean
    },
    methods: {
        sideBarCloser(){
            if ( this.openSideBar ) {
                this.openSideBar = false;
            }
        }
    }
}
</script>
