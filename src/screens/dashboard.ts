import styles from './dashboard.css';
import "../components/export";
import {dataProfile, dataCommunity, dataChatlist, dataMyprofile, dataNavbar} from "../services/getData";
import ProfileCard, { profileAttribute } from "../components/Profile/Profile";
import CommunityCard, { communityAttribute } from "../components/Community/Community";
import chatlistCard, { chatlistAttribute } from "../components/Chatlist/Chatlist";
import MyprofileCard, { myprofileAttribute } from "../components/MyProfile/MyProfile";
import NavbarCard, {navbarAttribute} from "../components/Navbar/Navbar";
console.log(styles);

class Dashboard extends HTMLElement{
    profiles: ProfileCard[] = [];
    friends: CommunityCard[] = [];
    chats: chatlistCard [] = [];
    myprofiles: MyprofileCard[] = [];
    navbars: NavbarCard [] = [];

    constructor(){
        super();
        this.attachShadow({mode: "open"});

        dataProfile.forEach((user) => {
            const profileContainer = this.ownerDocument.createElement(
                "profile-card"
            ) as ProfileCard;
            profileContainer.setAttribute(profileAttribute.profileimage, user.profileimage);
            profileContainer.setAttribute(profileAttribute.name, user.name);
            profileContainer.setAttribute(profileAttribute.gender, user.gender);
            profileContainer.setAttribute(profileAttribute.breed, user.breed);
            profileContainer.setAttribute(profileAttribute.age, user.age);
            profileContainer.setAttribute(profileAttribute.activity, user.activity);
            profileContainer.setAttribute(profileAttribute.location, user.location);
            this.profiles.push(profileContainer);    
            
        });

        dataCommunity.forEach((friend) => {
            const communityContainer = this.ownerDocument.createElement(
                "my-community"
            ) as CommunityCard;
            communityContainer.setAttribute(communityAttribute.communityimage, friend.communityimage);
            communityContainer.setAttribute(communityAttribute.communityname, friend.communityname);
            communityContainer.setAttribute(communityAttribute.communitybreed, friend.commmunitybreed);
            this.friends.push(communityContainer);
        });

        dataChatlist.forEach((chat) => {
            const chatlistContainer = this.ownerDocument.createElement(
                "chat-list"
            ) as chatlistCard;
            chatlistContainer.setAttribute(chatlistAttribute.chatlistimage, chat.chatlistimage);
            chatlistContainer.setAttribute(chatlistAttribute.chatlistname, chat.chatlistname);
            chatlistContainer.setAttribute(chatlistAttribute.chatlisttext, chat.chatlisttext);
            chatlistContainer.setAttribute(chatlistAttribute.chatlistwhen, chat.chatlistwhen);
            this.chats.push(chatlistContainer);
        });

        dataMyprofile.forEach((me) => {
            const myprofileContainer = this.ownerDocument.createElement(
                "myprofile-card"
            ) as MyprofileCard;
            myprofileContainer.setAttribute(myprofileAttribute.mybackground, me.mybackground);
            myprofileContainer.setAttribute(myprofileAttribute.myprofileimage, me.myprofileimage);
            myprofileContainer.setAttribute(myprofileAttribute.myname, me.myname);
            myprofileContainer.setAttribute(myprofileAttribute.mygender, me.mygender);
            myprofileContainer.setAttribute(myprofileAttribute.mybreed, me.mybreed);
            myprofileContainer.setAttribute(myprofileAttribute.myage, me.myage);
            myprofileContainer.setAttribute(myprofileAttribute.mydescription, me.mydescription);
            myprofileContainer.setAttribute(myprofileAttribute.myactivity, me.myactivity);
            myprofileContainer.setAttribute(myprofileAttribute.mylocation, me.mylocation);
            this.myprofiles.push(myprofileContainer);    
            
        });

        dataNavbar.forEach((nav) => {
            const navbarContainer = this.ownerDocument.createElement(
                "nav-bar"
            ) as NavbarCard;
            navbarContainer.setAttribute(navbarAttribute.navbarlogo, nav.navbarlogo);
            navbarContainer.setAttribute(navbarAttribute.navbarhome, nav.navbarhome);
            navbarContainer.setAttribute(navbarAttribute.navbarcommunity, nav.navbarcommunity);
            navbarContainer.setAttribute(navbarAttribute.navbarchat, nav.navbarchat);
            navbarContainer.setAttribute(navbarAttribute.navbarnotifications, nav.navbarnotifications);
            navbarContainer.setAttribute(navbarAttribute.navbarnameprofile, nav.navbarnameprofile);
            navbarContainer.setAttribute(navbarAttribute.navbarprofile, nav.navbarprofile);
            this.navbars.push(navbarContainer);
        });
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if (this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <style>${styles}</style>
            `;

            this.profiles.forEach((profile) => {
                this.shadowRoot?.appendChild(profile);
                
            });

            this.friends.forEach((friend) => {
                this.shadowRoot?.appendChild(friend);
                
            });

            this.chats.forEach((chat) => {
                this.shadowRoot?.appendChild(chat);
                
            });

            this.myprofiles.forEach((me) => {
                this.shadowRoot?.appendChild(me);
                
            });

            this.navbars.forEach((nav) => {
                this.shadowRoot?.appendChild(nav);
                
            });
        }
    }
}

customElements.define("app-dashboard", Dashboard);