<template>
    <div>
        <div class="container" style="margin-top: 60px;">
<div id="content" class="content p-0">
    <div class="profile-header">
        <div class="profile-header-cover"></div>
        <div class="profile-header-content">
            <div class="profile-header-img mb-4">
                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" class="mb-4" alt="" />
            </div>

            <div class="profile-header-info">
                <h4 class="m-t-sm">Ayomide Raphael</h4>
                <p class="m-b-sm">UXUI + Frontend Developer</p>
            </div>
        </div>
        <ul class="profile-header-tab nav nav-tabs">
            <li class="nav-item"><a href="#/allposts" class="nav-link" data-toggle="tab">POSTS</a></li>
            <li class="nav-item"><a href="#/todo" class="nav-link" data-toggle="tab">TODOS</a></li>
            <li class="nav-item"><a href="#/" class="nav-link active show" data-toggle="tab">FEED</a></li>
        </ul>
    </div>

    <div class="profile-container">
        <div class="row row-space-20">
            <div class="col-md-8">
                <div class="tab-content p-0">

                    <div class="tab-pane fade active show" id="profile-friends">
                        <div class="m-b-10"><b>Available Users</b></div>
                        <div class="overflow-y-scroll" style="max-height: 500px;">
                        <ul :key="profile.id" v-for="profile in profiles" class="friend-list clearfix">
                            <li>
                                <a href="#/user-profile">
                                    <div class="friend-img"><img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" /></div>
                                    <div class="friend-info">
                                        <h4>{{profile.name}}</h4>
                                        <p>{{profile.status}}</p>
                                        <p>{{profile.gender}}</p>
                                        <p>{{profile.email}}</p>
                                    </div>
                                </a>
                            </li>
                            
                        </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-4 hidden-xs hidden-sm">
                <ul class="profile-info-list">
                    <li class="title">PERSONAL INFORMATION</li>
                    <li>
                        <div class="field">Occupation:</div>
                        <div class="value">UXUI / Frontend Developer</div>
                    </li>
                    <li>
                        <div class="field">Skills:</div>
                        <div class="value">JAVASCRIPT, REACTJS, VUEJS, HTML5, CSS, jQuery, MYSQL, Bootstrap, Angular JS, Angular JS, Asp.net</div>
                    </li>
                    <li>
                        <div class="field">Birth of Date:</div>
                        <div class="value">1989/11/04</div>
                    </li>
                    <li>
                        <div class="field">Country:</div>
                        <div class="value">San Francisco</div>
                    </li>
                    <li>
                        <div class="field">Address:</div>
                        <div class="value">
                            <address class="m-b-0">
                                Twitter, Inc.<br />
                                1355 Market Street, Suite 900<br />
                                San Francisco, CA 94103
                            </address>
                        </div>
                    </li>
                    <li>
                        <div class="field">Phone No.:</div>
                        <div class="value">
                            (123) 456-7890
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</div>

    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "Profile",
    components: {

    },
    props: {},
    data(){
        return{
            profiles: []
        }
    },
    mounted() {
        const headers = {
            Accept:"application/json",
             ContentType: "application/json",
             Authorization: "Bearer 68f97e578f94be80281510d3192602b6387e9faef957d2258a945ce0041be4dd"
        }
        axios.get(`https://gorest.co.in/public/v2/users`, {headers})
            .then((response) => {
                this.profiles = response.data
            })
    },
}
</script>
