import React, { MouseEvent } from 'react'
import { Spin } from 'antd'
import classNames from 'classnames'
import { useDispatch } from 'react-redux'
import style from './EditCanvas.module.scss'
import useGetComponentInfo from '../../../hooks/useGetComponentInfo'
import { getComponentConfByType } from '../../../components/QuestionComponents'
import { ComponentInfoType, changeSelectedId } from '../../../store/componentsReducer'
type PropsType = {
  loading: boolean
}
// 获取组件
function getComponent(component: ComponentInfoType) {
  const { type, props } = component
  const componentConf = getComponentConfByType(type)
  if (componentConf == null) return null
  const { Component } = componentConf
  return <Component {...props}></Component>
}
const EditCanvas: React.FC<PropsType> = ({ loading }) => {
  const { componentList, selectedID } = useGetComponentInfo()
  const dispatch = useDispatch()

  const handleClick = (event: MouseEvent, id: string) => {
    event.stopPropagation() //阻止冒泡
    dispatch(changeSelectedId(id))
  }
  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '24px' }}>
        <Spin></Spin>
      </div>
    )
  }
  return (
    <div className={style.canvas}>
      {componentList
        .filter(i => !i.isHidden)
        .map(c => {
          const { fe_id } = c
          // 使用classNames拼接样式
          const wraperDefaultClassName = style['component-wrapper']
          const selectedClassName = style.selected
          const wrapperClassName = classNames({
            [wraperDefaultClassName]: true,
            [selectedClassName]: fe_id === selectedID,
          })
          return (
            <div key={fe_id} className={wrapperClassName} onClick={e => handleClick(e, fe_id)}>
              <div className={style.component}>{getComponent(c)}</div>
            </div>
          )
        })}
    </div>
  )
}
export default EditCanvas
