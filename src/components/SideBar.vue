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
                            <a className='' href="#/login">
                                <b>Logout</b>
                            </a>
                        </li>
                    </ul>
                <ul className="list-unstyled menu-categories sidebar-menu-categories" id="topAccordion">
                    <li className="menu single-menu active">
                        <a href="#/">
                        <div className="nav-items">
                            <b>Home</b>
                        </div>
                        </a>
                    </li>
                    <li className="menu single-menu">
                        <a href="#/post-content">
                            <div className="nav-items">
                            
                                <b>Comments</b>
                            </div>
                        </a>
                    </li>
                    <li className="menu single-menu">
                        <a href="#/">
                            <div className="nav-items">
                                <b>Feed</b>
                            </div>
                        </a>
                    </li>
                    <li className="menu single-menu">
                        <a href="#/profile">
                            <div className="nav-items">
                            
                                <b>Profile </b>
                            </div>
                        </a>
                    </li>
                    <li className="menu single-menu">
                        <a href="#/allposts">
                            <div className="nav-items">
                            
                                <b>Posts</b>
                            </div>
                        </a>
                    </li>

                     <li className="menu single-menu">
                        <a href="#/todo">
                            <div className="nav-items">
                            
                                <b>Todos</b>
                            </div>
                        </a>
                    </li>
                    <li className="menu single-menu">
                        <a type="button" @click="sideBarCloser()">
                            <div className="nav-items">
                                <b>Close</b>
                            </div>
                        </a>
                    </li>
                </ul>
                
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
            this.$emit("open-sidebar")
        }
    }
}
</script>
