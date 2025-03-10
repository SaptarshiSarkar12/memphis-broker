// Copyright 2021-2022 The Memphis Authors
// Licensed under the MIT License (the "License");
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// This license limiting reselling the software itself "AS IS".
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
import './style.scss';
import { Tabs } from 'antd';
import React from 'react';

import TooltipComponent from '../tooltip/tooltip';
import CheckboxComponent from '../checkBox';
import { PriorityHighRounded } from '@material-ui/icons';

const CustomTabs = ({ tabs, onChange, value, disabled, length, tooltip, icon = false, checkbox = false, defaultActiveKey }) => {
    return (
        <div className={!disabled ? 'tabs-container hover' : 'tabs-container'}>
            <Tabs
                value={value}
                onChange={onChange}
                items={tabs.map((tab, index) => {
                    return {
                        key: tab?.name || tab,
                        disabled: tab?.disabled || disabled,
                        label: (
                            <label className="tabs-name" style={{ width: length && length[index] && '135px' }}>
                                {checkbox && <CheckboxComponent checked={tab.checked} />}
                                <TooltipComponent text={tooltip && tooltip[index]}>{tab?.name || tab} </TooltipComponent>
                                {length && length[index] && icon && (
                                    <div className="error-icon">
                                        <div>
                                            <PriorityHighRounded />
                                        </div>
                                    </div>
                                )}
                                {length && length[index] && !icon && <label className="dls-size"> {length[index].toLocaleString()}</label>}
                            </label>
                        )
                    };
                })}
                disabled={disabled}
                defaultActiveKey={defaultActiveKey}
            />
        </div>
    );
};

export default CustomTabs;
