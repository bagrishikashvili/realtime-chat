import React from 'react';
import { DotLoading } from 'antd-mobile';

const ScreenLoading = () => {
    return (
        <div style={{display: 'flex', height: '100vh', backgroundColor: '#18191a', justifyContent: 'center', alignItems: 'center'}}>
            <DotLoading color='primary' />
        </div>
    )
}
export default ScreenLoading;