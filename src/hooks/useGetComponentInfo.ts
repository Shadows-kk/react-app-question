import { useSelector } from 'react-redux'
import { Statetype } from '../store'
import { ComponentsStateType } from '../store/componentsReducer'

const useGetComponentInfo = () => {
  const components = useSelector<Statetype>(state => state.components) as ComponentsStateType
  // const { componentList = [] } = components
  console.log(components)
  return {
    // componentList,
    components,
  }
}
export default useGetComponentInfo
