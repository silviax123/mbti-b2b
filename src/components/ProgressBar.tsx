/** @jsxImportSource @emotion/react */

import React from 'react';
import * as Progress from '@radix-ui/react-progress';
import {css} from '@emotion/react'

export interface ProgressProps extends Progress.ProgressProps {}  // why add {}

export const ProgressBar = (props:ProgressProps) => {
    const progress = props.value ?? 0; //value or undefined? why two ??
    return (
        <Progress.Root css={styles.progressRoot} {...props}>
            <Progress.Indicator
                css={styles.progressIndication}
                style={{ transform: `translateX(-${100 - progress}%)` }}
            />
        </Progress.Root>
    );
};

export default ProgressBar

const styles = {
    progressRoot:css({
        overflow:'hidden',
        height:'15px',
        background: '#E6E5E6',
        width:'100%',
    }),
    progressIndication:css({
        backgroundColor: '#7E39A8',
        width: '100%',
        height: '100%',
        transition:'transform 660ms cubic-bezier(0.65, 0, 0.35, 1)',
    }),
}