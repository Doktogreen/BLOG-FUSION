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
                <h4 class="m-t-sm">Clyde Stanley</h4>
                <p class="m-b-sm">UXUI + Frontend Developer</p>
                <a href="#" class="btn btn-xs btn-primary mb-2">Edit Profile</a>
            </div>
        </div>
        <ul class="profile-header-tab nav nav-tabs">
            <li class="nav-item"><a href="#profile-post" class="nav-link" data-toggle="tab">POSTS</a></li>
            <li class="nav-item"><a href="#profile-about" class="nav-link" data-toggle="tab">ABOUT</a></li>
            <li class="nav-item"><a href="#profile-photos" class="nav-link" data-toggle="tab">PHOTOS</a></li>
            <li class="nav-item"><a href="#profile-videos" class="nav-link" data-toggle="tab">VIDEOS</a></li>
        </ul>
    </div>

    <div class="profile-container">
        <div class="row row-space-20">
            <div class="col-md-8">
                <div class="tab-content p-0">

                    <div class="tab-pane fade active show" id="profile-friends">
                        <div class="m-b-10"><b>Recent Posts</b></div>
                        <div class="overflow-y-scroll" style="max-height: 500px;">
                        <ul :key="post.id" v-for="post in posts" class="friend-list clearfix">
                            <li>
                                <a href="#">
                                    <div class="friend-img"><img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" /></div>
                                    <div class="friend-info">
                                        <h4>{{post.title}}...</h4>
                                        <p><b>Date : </b>11-23-2022</p>
                                        <a href=".." style="color: blue;">Learn more</a>
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
                        <div class="value">C++, PHP, HTML5, CSS, jQuery, MYSQL, Ionic, Laravel, Phonegap, Bootstrap, Angular JS, Angular JS, Asp.net</div>
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
    name: "UserProfile",
    components: {

    },
    props: {},
    
  data() {
    return {
        posts : [],

    }
  },
    mounted() {
        axios.get(`https://gorest.co.in/public/v2/posts`)
            .then((response) => {
                this.posts = response.data
            })
    }
  }

</script>
