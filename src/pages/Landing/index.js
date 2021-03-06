// dependencies
import React, {useState} from 'react';
import {Redirect} from 'react-router-dom'
// component imports
import { CallToAction, InfoLarge, InfoSmall } from '../../components';
import Login from '../../components/modals/Login';
import Signup from '../../components/modals/Signup';
// partials imports
import { Footer, Header } from '../../partials';

export const Landing = props => {
    
    let [showSignup, setShowSignup] = useState(false)
    let [showLogin, setShowLogin] = useState(false)
    let [signupType, setSignupType] = useState('')

    const closeModal = () => {
        if(showSignup) { 
            setShowSignup(false) 
            setSignupType('')
        }  
        if(showLogin) { setShowLogin(false) } 
    }
    if(props.user) {
        if(props.user.isClinic) {
            return <Redirect to="/clinic"/>
        }
        return <Redirect to="/admin"/>
    }

    return (
        <div className='landing'>
            <div className='landing landing-banner'>
                <Header setShowLogin={setShowLogin} setShowSignup={setShowSignup} user={props.user} updateUser={props.updateUser}/>
                <Signup 
                    showSignup={showSignup}
                    setShowSignup={setShowSignup}
                    closeModal={closeModal} 
                    updateUser={props.updateUser} 
                    signupType={signupType}
                    setSignupType={setSignupType}
                />
                <Login showLogin={showLogin} closeModal={closeModal} updateUser={props.updateUser}/>
                <div className='landing-banner-message'>
                    <p className='heading heading-one'>
                        Health clinics are in dire need of masks and other supplies
                    </p>
                    <p className='body-font body-two landing-banner-text'>
                        Help fight the spread and protect healthcare workers by sewing or delivering supplies for your community clinics
                    </p>
                </div>
            </div>
            <div className='landing landing-main'>
                <div className='landing landing-main'>
                    <div className='landing-main landing-main-box'>
                        <InfoSmall text='Be a producer' />
                        <InfoSmall text='Help deliver' />
                    </div>
                    <p className='body-two'>We connect our volunteers with their local clinics</p>
                    <CallToAction text='VOLUNTEER' setShowSignup={setShowSignup} signupType={signupType} setSignupType={setSignupType} class='c2a-ong' />
                    <p className='heading heading-two'>Are you a small clinic with a large need?</p>
                    <div className='landing-main landing-main-box'>
                        <InfoLarge text='Masks' />
                        <InfoLarge text='Face Shields' />
                        <InfoLarge text='Gowns' />
                    </div>
                </div>
                <br />
                <CallToAction text='REQUEST SUPPLIES' setShowSignup={setShowSignup} signupType={signupType} setSignupType={setSignupType} class='c2a-grn' />
                <br />
            </div>
            <div className='landing landing-donate' name='donate'>
                <div className='landing-donate-message'>
                    <p className='heading heading-one'>Donate</p>
                    <p className='body-two landing-donate-text'>
                        Your contributions cover the cost to volunteers for materials and delivery
                    </p>
                    <CallToAction text='DONATE MONEY' setShowSignup={setShowSignup} class='c2a-donate c2a-ong' />
                    <br />
                    <CallToAction text='DONATE SUPPLIES' setShowSignup={setShowSignup} class='c2a-donate c2a-ong' />
                </div>
            </div>
            <Footer />
        </div>
    )
};