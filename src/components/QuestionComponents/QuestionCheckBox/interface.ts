export type OptionType = {
  value: string
  text: string
  checked: boolean
}
export type QuestionCheckBoxPropsType = {
  title?: string
  isVertical?: boolean
  list?: OptionType[]

  // 用于PropComponent
  onChange?: (newProps: QuestionCheckBoxPropsType) => void
  disabled?: boolean
}

export const QuestionCheckBoxDefaultProps: QuestionCheckBoxPropsType = {
  title: '多选',
  isVertical: false,
  list: [
    { value: 'item1', text: '选项1', checked: false },
    { value: 'item2', text: '选项2', checked: false },
    { value: 'item3', text: '选项3', checked: false },
  ],
}
//统计组件props
export type QuestionCheckBoxStatisticProps = {
  stat: Array<{ name: string; value: number }>
}
