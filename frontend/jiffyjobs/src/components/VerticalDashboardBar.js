import React, { useState } from 'react';
import '../styles/Dashboard.css';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AssignmentIcon from '@mui/icons-material/Assignment';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import { styled, Tab, Tabs } from '@mui/material';

const CustomTab = styled((props) => <Tab {...props} />)(() => ({
    textTransform: 'none',
    fontFamily: 'Outfit',
    fontSize: '12px',
    fontWeight: 500,
    fontStyle: 'normal',
    textAlign: 'start',
    minHeight: '0px',
    height: '33px',
    width: "142px",
    justifyContent: 'flex-start',
    whiteSpace: 'nowrap',
    borderRadius: '5px',
    "&.Mui-selected": {
        backgroundColor: '#4A4FE4',
        color: 'white',
    },
}))

function allyProps(index) {
    return {
        id: `vertical-tab-${index}`,
    };
}
  
export function VerticalDashboardBar() {
    const [value, setValue] = useState(2);

    const handleChange = (_, newValue) => {
        setValue(newValue);
    };

    return {
        value,
        renderVerticalDashBoard:(
            <Tabs 
                orientation="vertical" 
                value={value} 
                onChange={handleChange} 
                variant="scrollable"
                textColor= "inherit"
                TabIndicatorProps={{style: {display: 'none'}}}
                sx={{ 
                    borderRight: 1, 
                    borderColor: 'divider', 
                    width: "159px",
                    alignItems: 'center',
                }}
            >
                <div className='logo' style={{paddingTop: '36px', paddingLeft: '14px', paddingBottom: '20px', transform: 'scale(1. )',}}>
                    <svg width="102" height="58" viewBox="0 0 79 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M67.2133 35.3872C67.2133 34.7955 67.3263 34.2403 67.5524 33.7218C67.7784 33.2032 68.0842 32.7511 68.4698 32.3655C68.8621 31.9733 69.3175 31.6641 69.8361 31.4381C70.3546 31.2121 70.9098 31.099 71.5015 31.099H77.3389C77.739 31.099 78.0633 31.4234 78.0633 31.8235V33.2367C78.0633 33.6368 77.739 33.9611 77.3389 33.9611H71.5015C71.302 33.9611 71.1159 33.9977 70.943 34.0708C70.7701 34.1439 70.6172 34.247 70.4843 34.38C70.358 34.5063 70.2582 34.6559 70.1851 34.8287C70.112 35.0016 70.0754 35.1877 70.0754 35.3872C70.0754 35.5866 70.112 35.7761 70.1851 35.9556C70.2582 36.1285 70.358 36.2814 70.4843 36.4143C70.6172 36.5406 70.7701 36.6404 70.943 36.7135C71.1159 36.7866 71.302 36.8232 71.5015 36.8232H74.3635C74.9552 36.8232 75.5104 36.9362 76.0289 37.1623C76.5541 37.3817 77.0096 37.6875 77.3952 38.0797C77.7874 38.4653 78.0932 38.9207 78.3126 39.4459C78.5387 39.9645 78.6517 40.5196 78.6517 41.1113C78.6517 41.703 78.5387 42.2582 78.3126 42.7767C78.0932 43.2953 77.7874 43.7507 77.3952 44.143C77.0096 44.5286 76.5541 44.8344 76.0289 45.0604C75.5104 45.2865 74.9552 45.3995 74.3635 45.3995H68.7355C68.3355 45.3995 68.0111 45.0751 68.0111 44.675V43.2618C68.0111 42.8617 68.3355 42.5374 68.7355 42.5374H74.3635C74.563 42.5374 74.7491 42.5008 74.922 42.4277C75.0949 42.3546 75.2444 42.2548 75.3708 42.1285C75.5037 41.9956 75.6068 41.8427 75.6799 41.6698C75.753 41.4969 75.7896 41.3108 75.7896 41.1113C75.7896 40.9119 75.753 40.7257 75.6799 40.5529C75.6068 40.38 75.5037 40.2304 75.3708 40.1041C75.2444 39.9712 75.0949 39.8681 74.922 39.795C74.7491 39.7218 74.563 39.6853 74.3635 39.6853H71.5015C70.9098 39.6853 70.3546 39.5723 69.8361 39.3462C69.3175 39.1202 68.8621 38.8144 68.4698 38.4288C68.0842 38.0365 67.7784 37.5811 67.5524 37.0625C67.3263 36.5373 67.2133 35.9789 67.2133 35.3872Z" fill="#4A4FE4"/>
                        <path d="M64.8611 41.1113C64.8611 41.703 64.7481 42.2582 64.522 42.7767C64.296 43.2953 63.9868 43.7507 63.5946 44.143C63.209 44.5286 62.7569 44.8344 62.2383 45.0604C61.7198 45.2865 61.1646 45.3995 60.5729 45.3995H54.1472C53.7471 45.3995 53.4227 45.0751 53.4227 44.675V31.8235C53.4227 31.4234 53.7471 31.099 54.1471 31.099H60.5729C61.1646 31.099 61.7198 31.2121 62.2383 31.4381C62.7569 31.6641 63.209 31.9733 63.5946 32.3655C63.9868 32.7511 64.296 33.2032 64.522 33.7218C64.7481 34.2403 64.8611 34.7955 64.8611 35.3872C64.8611 35.6531 64.8245 35.9257 64.7514 36.2049C64.6783 36.4841 64.5752 36.7534 64.4422 37.0127C64.3093 37.272 64.1497 37.508 63.9636 37.7207C63.7241 37.9943 63.7383 38.4906 63.9735 38.7678C64.1597 38.9806 64.3193 39.2166 64.4522 39.4759C64.5852 39.7351 64.6849 40.0077 64.7514 40.2936C64.8245 40.5728 64.8611 40.8454 64.8611 41.1113ZM56.2848 41.813C56.2848 42.2131 56.6091 42.5374 57.0092 42.5374H60.5729C60.7724 42.5374 60.9585 42.5008 61.1314 42.4277C61.3043 42.3546 61.4538 42.2548 61.5802 42.1285C61.7131 41.9956 61.8162 41.8427 61.8893 41.6698C61.9624 41.4969 61.999 41.3108 61.999 41.1113C61.999 40.9119 61.9624 40.7257 61.8893 40.5529C61.8162 40.38 61.7131 40.2304 61.5802 40.1041C61.4538 39.9712 61.3043 39.8681 61.1314 39.795C60.9585 39.7218 60.7724 39.6853 60.5729 39.6853H57.0092C56.6091 39.6853 56.2848 40.0096 56.2848 40.4097V41.813ZM56.2848 36.0988C56.2848 36.4989 56.6091 36.8232 57.0092 36.8232H60.5729C60.7724 36.8232 60.9585 36.7866 61.1314 36.7135C61.3043 36.6404 61.4538 36.5406 61.5802 36.4143C61.7131 36.2814 61.8162 36.1285 61.8893 35.9556C61.9624 35.7761 61.999 35.5866 61.999 35.3872C61.999 35.1877 61.9624 35.0016 61.8893 34.8287C61.8162 34.6559 61.7131 34.5063 61.5802 34.38C61.4538 34.247 61.3043 34.1439 61.1314 34.0708C60.9585 33.9977 60.7724 33.9611 60.5729 33.9611H57.0092C56.6091 33.9611 56.2848 34.2855 56.2848 34.6856V36.0988Z" fill="#4A4FE4"/>
                        <path d="M51.5269 38.1956C51.5269 38.8737 51.4372 39.5286 51.2577 40.1602C51.0848 40.7851 50.8389 41.3735 50.5197 41.9253C50.2006 42.4705 49.815 42.9691 49.3629 43.4212C48.9109 43.8732 48.4122 44.2622 47.8671 44.5879C47.3219 44.9071 46.7335 45.153 46.102 45.3259C45.4704 45.5054 44.8155 45.5951 44.1374 45.5951C43.4593 45.5951 42.8044 45.5054 42.1728 45.3259C41.5479 45.153 40.9595 44.9071 40.4077 44.5879C39.8625 44.2622 39.3639 43.8732 38.9118 43.4212C38.4598 42.9691 38.0708 42.4705 37.7451 41.9253C37.426 41.3735 37.1766 40.7851 36.9971 40.1602C36.8243 39.5286 36.7379 38.8737 36.7379 38.1956C36.7379 37.5175 36.8243 36.8626 36.9971 36.231C37.1766 35.5995 37.426 35.0111 37.7451 34.4659C38.0708 33.9208 38.4598 33.4221 38.9118 32.9701C39.3639 32.518 39.8625 32.1324 40.4077 31.8133C40.9595 31.4941 41.5479 31.2482 42.1728 31.0753C42.8044 30.8958 43.4593 30.806 44.1374 30.806C44.8155 30.806 45.4704 30.8958 46.102 31.0753C46.7335 31.2482 47.3219 31.4941 47.8671 31.8133C48.4122 32.1324 48.9109 32.518 49.3629 32.9701C49.815 33.4221 50.2006 33.9208 50.5197 34.4659C50.8389 35.0111 51.0848 35.5995 51.2577 36.231C51.4372 36.8626 51.5269 37.5175 51.5269 38.1956ZM48.6848 38.1956C48.6848 37.5707 48.5651 36.9823 48.3258 36.4305C48.0865 35.872 47.7607 35.39 47.3485 34.9845C46.943 34.5723 46.461 34.2465 45.9025 34.0072C45.3507 33.7679 44.7623 33.6482 44.1374 33.6482C43.5058 33.6482 42.9141 33.7679 42.3623 34.0072C41.8105 34.2465 41.3285 34.5723 40.9163 34.9845C40.5041 35.39 40.1783 35.872 39.939 36.4305C39.6997 36.9823 39.58 37.5707 39.58 38.1956C39.58 38.8205 39.6997 39.4089 39.939 39.9607C40.1783 40.5059 40.5041 40.9846 40.9163 41.3968C41.3285 41.809 41.8105 42.1347 42.3623 42.3741C42.9141 42.6134 43.5058 42.7331 44.1374 42.7331C44.7623 42.7331 45.3507 42.6134 45.9025 42.3741C46.461 42.1347 46.943 41.809 47.3485 41.3968C47.7607 40.9846 48.0865 40.5059 48.3258 39.9607C48.5651 39.4089 48.6848 38.8205 48.6848 38.1956Z" fill="#4A4FE4"/>
                        <path d="M74.0444 28.3944C74.0444 28.7945 73.7201 29.1188 73.32 29.1188H71.9168C71.5167 29.1188 71.1923 28.7945 71.1923 28.3944V25.2054C71.1923 24.8736 70.9651 24.5889 70.6527 24.4771C70.2258 24.3242 69.824 24.123 69.4471 23.8733C68.9219 23.521 68.4698 23.1021 68.0909 22.6168C67.7119 22.1248 67.4161 21.583 67.2034 20.9913C66.9973 20.3929 66.8942 19.7647 66.8942 19.1065V15.5428C66.8942 15.1427 67.2185 14.8184 67.6186 14.8184H69.0319C69.432 14.8184 69.7563 15.1427 69.7563 15.5428V19.1065C69.7563 19.4987 69.8294 19.8711 69.9757 20.2234C70.1286 20.5691 70.3347 20.8716 70.594 21.1309C70.8533 21.3902 71.1558 21.5963 71.5015 21.7492C71.8538 21.8955 72.2261 21.9686 72.6184 21.9686C73.0106 21.9686 73.3796 21.8955 73.7253 21.7492C74.0777 21.5963 74.3835 21.3902 74.6428 21.1309C74.9021 20.8716 75.1048 20.5691 75.2511 20.2234C75.404 19.8711 75.4805 19.4987 75.4805 19.1065V15.5428C75.4805 15.1427 75.8048 14.8184 76.2049 14.8184H77.6081C78.0082 14.8184 78.3326 15.1427 78.3326 15.5428V19.1065C78.3326 19.7647 78.2262 20.3929 78.0135 20.9913C77.8074 21.583 77.5148 22.1248 77.1359 22.6168C76.7569 23.1021 76.3048 23.521 75.7796 23.8733C75.4077 24.1228 75.0092 24.324 74.5839 24.4768C74.2717 24.589 74.0444 24.8736 74.0444 25.2054V28.3944Z" fill="#4A4FE4"/>
                        <path d="M58.141 28.3944C58.141 28.7945 57.8166 29.1188 57.4165 29.1188H56.0033C55.6032 29.1188 55.2789 28.7945 55.2789 28.3944V15.5428C55.2789 15.1427 55.6032 14.8184 56.0033 14.8184H64.5668C64.9669 14.8184 65.2912 15.1427 65.2912 15.5428V16.956C65.2912 17.3561 64.9669 17.6804 64.5668 17.6804H58.8654C58.4653 17.6804 58.141 18.0048 58.141 18.4049V19.8181C58.141 20.2182 58.4653 20.5425 58.8654 20.5425H61.7047C62.1048 20.5425 62.4291 20.8669 62.4291 21.267V22.6802C62.4291 23.0803 62.1048 23.4046 61.7047 23.4046H58.8654C58.4653 23.4046 58.141 23.729 58.141 24.129V28.3944Z" fill="#4A4FE4"/>
                        <path d="M46.5676 28.3944C46.5676 28.7945 46.2432 29.1188 45.8431 29.1188H44.4299C44.0298 29.1188 43.7055 28.7945 43.7055 28.3944V15.5428C43.7055 15.1427 44.0298 14.8184 44.4299 14.8184H52.9933C53.3934 14.8184 53.7178 15.1427 53.7178 15.5428V16.956C53.7178 17.3561 53.3934 17.6804 52.9933 17.6804H47.292C46.8919 17.6804 46.5676 18.0048 46.5676 18.4049V19.8181C46.5676 20.2182 46.8919 20.5425 47.292 20.5425H50.1313C50.5314 20.5425 50.8557 20.8669 50.8557 21.267V22.6802C50.8557 23.0803 50.5314 23.4046 50.1313 23.4046H47.292C46.8919 23.4046 46.5676 23.729 46.5676 24.129V28.3944Z" fill="#4A4FE4"/>
                        <path d="M41.1702 28.3944C41.1702 28.7945 40.8458 29.1188 40.4457 29.1188H39.0325C38.6324 29.1188 38.3081 28.7945 38.3081 28.3944V15.5428C38.3081 15.1427 38.6324 14.8184 39.0325 14.8184H40.4457C40.8458 14.8184 41.1702 15.1427 41.1702 15.5428V28.3944Z" fill="#4A4FE4"/>
                        <path d="M45.7077 10.3971C45.7077 10.2542 45.4916 10.1827 45.4916 10.1827C45.4916 10.1827 44.8328 10.098 44.4112 10.0398C43.9748 9.97954 43.2947 9.87899 43.2947 9.87899C43.2947 9.87899 42.1475 9.74471 41.422 9.61101C40.912 9.51704 40.1254 9.32516 40.1254 9.32516C40.1254 9.32516 39.5215 9.18349 39.153 9.03931C38.7258 8.87215 38.4877 8.7604 38.1086 8.50335C37.9129 8.37067 37.8069 8.28119 37.6343 8.13555L37.6044 8.11031C37.3542 7.89933 37.2362 7.75656 36.9921 7.53861C36.7846 7.3533 36.664 7.25417 36.4519 7.07411C36.2699 6.91963 36.1741 6.82528 35.9837 6.68107C35.807 6.54718 35.7004 6.48204 35.5155 6.35949C35.3209 6.2305 35.2154 6.15163 35.0113 6.03791C34.8468 5.94624 34.7516 5.89944 34.5791 5.82353C34.4407 5.76259 34.3616 5.73133 34.219 5.6806C34.0389 5.61655 33.9354 5.58742 33.7508 5.53768C33.6415 5.50824 33.5786 5.49345 33.4706 5.46809L33.4627 5.46622C33.3365 5.43657 33.2662 5.41752 33.1385 5.39476C32.9711 5.3649 32.7064 5.34116 32.7064 5.34116C32.7064 5.34116 31.8238 5.28849 31.2658 5.35903C31.096 5.38048 31.0013 5.39692 30.8336 5.43049C30.6062 5.47599 30.4793 5.50643 30.2573 5.57341C29.955 5.66468 29.7885 5.72901 29.501 5.85926C29.1344 6.02534 28.9278 6.126 28.6007 6.35949C28.2773 6.59026 28.1222 6.7552 27.8443 7.03838C27.5241 7.36486 27.351 7.55813 27.088 7.93165C26.8104 8.32614 26.6638 8.56006 26.4758 9.00358C26.305 9.40645 26.2158 9.61098 26.1202 10.0376C26.0212 10.4797 26.0212 10.3815 26.0076 10.9688C25.9916 11.6615 26.0076 11.8059 26.0212 12.5427C26.0291 12.9714 26.0707 13.083 26.0707 13.5741L26.114 14.2198C26.1162 14.2524 26.1567 14.2662 26.1773 14.2407L26.2016 14.2107C27.3388 12.8042 29.2357 10.4583 31.6619 9.59556C34.4711 8.59668 38.2878 9.61101 40.2695 10.1827C40.2676 10.2221 40.2695 10.2521 40.1975 10.2542C40.1254 10.2562 36.1998 10.3614 36.1998 10.3614C36.1998 10.3614 35.6057 10.361 35.2274 10.3971C34.9304 10.4254 34.7643 10.4495 34.4711 10.5043C34.0286 10.5869 33.7837 10.6546 33.3546 10.7901C33.0409 10.8892 32.8663 10.9506 32.5623 11.076C32.2022 11.2245 32.0002 11.3121 31.6619 11.5047C31.3541 11.6801 31.1932 11.7985 30.9056 12.005C30.6458 12.1915 30.4977 12.2946 30.2573 12.5052C30.0188 12.7142 29.8983 12.8461 29.6811 13.0769C29.477 13.2938 29.3649 13.4179 29.1769 13.6486C29 13.8656 28.9062 13.9918 28.7447 14.2203C28.6283 14.3851 28.562 14.4771 28.4566 14.6491C28.2997 14.9051 28.2307 15.0596 28.0965 15.328C27.979 15.5628 27.9038 15.6909 27.8083 15.9354C27.7023 16.2071 27.6679 16.3716 27.5814 16.65C27.4989 16.9157 27.4543 17.0632 27.3762 17.3289C27.3188 17.5239 27.2811 17.6319 27.2321 17.8291C27.201 17.954 27.1843 18.0243 27.1601 18.1507C27.1228 18.3446 27.1145 18.4554 27.088 18.6509C27.0578 18.8739 27.0431 18.9993 27.016 19.2226C26.3085 25.0551 27.9369 28.4623 27.016 34.2654C26.9628 34.6008 26.9349 34.7892 26.8719 35.1229C26.8324 35.3327 26.8163 35.4519 26.7639 35.6589C26.6697 36.0313 26.5943 36.2359 26.4398 36.5879C26.2537 37.0116 26.1224 37.2398 25.8635 37.6241C25.6353 37.9629 25.4978 38.1501 25.2153 38.4459C24.8858 38.7909 24.672 38.9604 24.2789 39.232C23.9066 39.4891 23.6832 39.6171 23.2705 39.8037C22.8899 39.9757 22.6677 40.0603 22.262 40.161C21.9301 40.2434 21.7384 40.2721 21.3977 40.3039L21.3587 40.3076C20.9361 40.3471 20.7097 40.3683 20.2452 40.3039C19.9884 40.2683 19.8485 40.2237 19.5969 40.161C19.2128 40.0652 18.995 40.014 18.6245 39.8751C18.2772 39.7449 18.0825 39.6649 17.7602 39.4821C17.384 39.2687 17.1927 39.1141 16.8598 38.8389C16.5464 38.5799 16.3777 38.4239 16.1035 38.1243C15.8274 37.8226 15.6823 37.6421 15.4552 37.3025C15.1318 36.8189 14.9672 36.5272 14.7709 35.9805C14.6393 35.6138 14.6075 35.3949 14.5188 35.0157C14.4409 34.6825 14.3803 34.4978 14.3388 34.1582C14.2794 33.6734 14.3148 33.3954 14.3388 32.9076C14.3608 32.4597 14.3662 32.2055 14.4468 31.7642C14.5167 31.3812 14.5589 31.163 14.6989 30.7995C14.7932 30.5546 14.8683 30.4262 14.987 30.192C15.0945 29.9801 15.1706 29.8479 15.3112 29.6561C15.4107 29.5202 15.4552 29.4774 15.5633 29.3345C15.6713 29.1916 15.6173 29.1201 15.6173 29.1201C15.5946 29.0751 15.5272 29.0129 15.5272 29.0129C15.4495 28.953 15.2751 29.0129 15.2751 29.0129L14.987 29.1201C14.987 29.1201 14.3281 29.3846 13.9426 29.6203C13.5163 29.8811 13.3122 30.0805 12.9342 30.4064L12.8999 30.436C12.538 30.748 12.323 30.9334 11.9978 31.2997C11.7059 31.6285 11.556 31.8268 11.3135 32.193C11.0232 32.6313 10.868 32.8877 10.6652 33.3721C10.5066 33.7511 10.4424 33.9747 10.3411 34.3726C10.2499 34.7308 10.2027 34.9344 10.161 35.3016C10.1013 35.8285 10.1391 36.1295 10.161 36.6593C10.1772 37.0507 10.1626 37.2744 10.2331 37.6598C10.3038 38.0464 10.3936 38.2525 10.5212 38.6245C10.6473 38.9926 10.729 39.1954 10.8813 39.5536C11.0257 39.893 11.0901 40.0931 11.2775 40.4111C11.4805 40.7556 11.6351 40.924 11.8897 41.2329C12.1042 41.4931 12.2371 41.6284 12.466 41.8761C12.8491 42.2907 13.0473 42.5424 13.4744 42.9123C13.8453 43.2334 14.0746 43.3897 14.4828 43.6626C14.8649 43.918 15.0889 44.0473 15.4912 44.27C15.7824 44.4312 15.9469 44.52 16.2475 44.6631L16.2984 44.6873C16.5855 44.8241 16.7621 44.9082 17.0759 45.0204C17.2977 45.0997 17.4238 45.1605 17.6521 45.2348C17.7917 45.2802 17.8706 45.3037 18.0123 45.342C18.1242 45.3722 18.1879 45.3855 18.3004 45.4134C18.4129 45.4413 18.4744 45.4643 18.5885 45.4849C18.7276 45.5099 18.8075 45.5214 18.9487 45.5385C19.0576 45.5517 19.1203 45.5571 19.2269 45.5662L19.2368 45.5671C19.3772 45.5791 19.456 45.5893 19.5969 45.5921C19.6532 45.5932 19.6847 45.5921 19.741 45.5921H19.9931H21.1816C21.3363 45.5921 21.4232 45.5982 21.5778 45.5921C21.747 45.5854 21.8412 45.571 22.0099 45.5564C22.1647 45.5429 22.2513 45.5336 22.4061 45.5206C22.5888 45.5053 22.6918 45.5025 22.8743 45.4849C23.0011 45.4727 23.0724 45.4672 23.1984 45.4492C23.2831 45.437 23.3304 45.4289 23.4145 45.4134C23.485 45.4005 23.5243 45.3917 23.5946 45.3777C23.6649 45.3637 23.7047 45.3574 23.7747 45.342C23.9312 45.3075 24.0164 45.2778 24.1708 45.2348C24.2694 45.2073 24.3249 45.1928 24.4229 45.1633C24.5932 45.1121 24.6863 45.0762 24.8551 45.0204C25.0239 44.9646 25.1204 44.9386 25.2873 44.8775L25.3047 44.8711C25.4362 44.823 25.5152 44.7941 25.6474 44.7345C25.762 44.683 25.823 44.6474 25.9356 44.5916L26.2237 44.4487L26.5118 44.3058C26.7087 44.2081 26.8219 44.1586 27.016 44.0556C27.216 43.9496 27.3275 43.8885 27.5202 43.7698C27.6926 43.6637 27.7876 43.6014 27.9524 43.484C28.1558 43.339 28.2745 43.2615 28.4566 43.0909C28.5145 43.0367 28.5444 43.0038 28.6007 42.948L28.7447 42.8051L28.8888 42.6621L29.0328 42.5192L29.2489 42.3048C29.4458 42.1095 29.5665 42.0096 29.7531 41.8046C29.9004 41.6429 29.9745 41.5448 30.1133 41.3758C30.2271 41.2373 30.2889 41.1581 30.4014 41.0185C30.5139 40.879 30.5828 40.8052 30.6895 40.6612C30.8097 40.4991 30.9776 40.2324 30.9776 40.2324C30.9776 40.2324 31.1643 39.978 31.2658 39.8037C31.3601 39.6415 31.3975 39.5424 31.4819 39.3749L31.6979 38.9461L31.842 38.6603C31.8983 38.5486 31.9341 38.4881 31.9861 38.3744C32.0461 38.2433 32.0752 38.1648 32.1237 38.0344L32.1301 38.0171C32.1917 37.8515 32.2126 37.7539 32.2742 37.5884C32.3266 37.4474 32.3681 37.3729 32.4182 37.231C32.486 37.0393 32.5155 36.9286 32.5623 36.7308C32.5951 36.5923 32.6046 36.5127 32.6343 36.3735C32.6612 36.2476 32.6824 36.1784 32.7064 36.0519C32.7457 35.8444 32.7511 35.7254 32.7784 35.516C33.5944 29.2469 32.2092 25.6189 32.8504 19.3298C32.8775 19.0646 32.9224 18.6509 32.9224 18.6509L32.9945 17.9363L33.0665 17.4361L33.2106 16.9359L33.3546 16.3284C33.3546 16.3284 33.4357 16.0431 33.4987 15.8639C33.5359 15.758 33.5601 15.6967 33.5992 15.5973L33.6067 15.5781C33.6343 15.5081 33.6561 15.4668 33.6896 15.3994C33.7258 15.3264 33.7448 15.2906 33.7868 15.2208C33.9291 14.9845 34.147 14.6133 34.147 14.6133L34.5071 14.0416L35.2274 13.2556L35.8757 12.6839L36.3078 12.3623L36.668 12.1479L36.8841 12.005L37.0281 11.9335L37.1722 11.8621L37.3163 11.7906L37.4603 11.7191L37.6044 11.6477L37.7484 11.5762L37.9645 11.5047L38.1806 11.4333L38.3967 11.3618L38.6488 11.2904L38.9009 11.2189L39.153 11.1474L39.5132 11.076L39.9454 11.0045L40.5576 10.9331L41.7101 10.8616C41.7101 10.8616 42.6316 10.8248 43.2227 10.808C44.1225 10.7824 45.3476 10.8123 45.5277 10.7901C45.7077 10.768 45.7077 10.7187 45.7077 10.6472V10.3971Z" fill="#4A4FE4" stroke="#4A4FE4" stroke-width="0.359769"/>
                        <path d="M20.8721 15.7847C20.9928 15.8493 21.0932 15.9149 21.1769 15.9801C21.4261 16.1742 21.1501 16.4342 20.8495 16.3373C19.6173 15.9404 17.5894 15.7064 15.9707 15.7847C14.6616 15.8481 6.03612 17.06 1.02688 17.7436C0.811957 17.7729 0.672128 17.9851 0.746633 18.1888C2.28804 22.4034 9.49172 23.1641 13.0002 23.0051C16.778 22.735 19.8392 20.7168 21.5054 18.9699C21.7447 18.7191 22.1196 18.8802 21.9813 19.198C20.9327 21.6083 16.4825 23.3524 13.3218 24.4811C13.0016 24.5954 13.0092 25.0345 13.3388 25.1177C17.0954 26.0667 20.369 24.8695 21.6147 24.0857C22.4068 23.5874 22.9118 23.0739 24.1396 21.3842C25.3675 19.6946 25.6744 17.4548 25.0308 15.7847C24.8328 15.3263 24.5852 14.5568 23.3475 13.9182C22.2779 13.3664 20.674 12.4938 18.5947 12.0518C16.9829 11.7091 14.9042 11.1289 13.6172 10.5991C13.3234 10.4782 13.0242 10.7374 13.187 11.0102C14.1389 12.6057 16.6131 14.3248 17.9016 14.8024C18.8917 15.1694 20.179 15.49 20.8721 15.7847Z" fill="#A0A4FF"/>
                        <path d="M14.2517 9.89041C10.0375 8.13813 8.97909 3.4939 9.17493 1.24093C9.18541 1.12042 9.31281 1.05158 9.42249 1.10258L19.4501 5.76448C23.9299 7.96991 25.1821 12.1179 25.3714 14.1828C25.3752 14.2248 25.2925 14.245 25.2694 14.2097C24.8459 13.5631 23.6671 12.9898 23.0643 12.641C20.6738 11.2578 16.6141 10.7254 14.2517 9.89041Z" fill="#4A4FE4" stroke="#4A4FE4" stroke-width="0.359769"/>
                    </svg>
                </div>

                <CustomTab label='Status' icon={<TrendingUpIcon/>} iconPosition="start" {...allyProps(2)}/> 
                <CustomTab label='Jobs Posted' icon={<AssignmentIcon/>} iconPosition="start" {...allyProps(3)}/>      
                <CustomTab label='Saved Jobs' icon={<StarOutlineRoundedIcon/>} iconPosition="start" {...allyProps(4)}/>      
            </Tabs>
        )
    }
}