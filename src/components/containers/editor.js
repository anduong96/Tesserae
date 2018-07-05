import React from 'react'
import { Tabs, Icon } from 'antd';
import CanvasEditor from './editorComponents/canvasEditor'
import CanvasSelector from './editorComponents/canvasSelector'

const EditorTabHeader = () => <span><Icon type={'edit'} />Edit</span>
const SelectionTabHeader = () => <span><Icon type={'appstore'} />Select</span>

export const Editor = () => (
    <div className={'editor-wrapper'} >
        <Tabs defaultActiveKey={'2'} size={'default'}>
            <Tabs.TabPane tab={<EditorTabHeader />} key={'1'}>
                <CanvasEditor />
            </Tabs.TabPane>
            <Tabs.TabPane tab={<SelectionTabHeader />} key={'2'}>
                <CanvasSelector />
            </Tabs.TabPane>
        </Tabs>
    </div>
)
